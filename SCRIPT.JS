
const courses = [
  {id:1,name:"Informática",icon:"💻",description:"Aprenda sobre computadores, programação, sistemas e tecnologia.",duration:"120 horas",modules:8},
  {id:2,name:"Marketing",icon:"📢",description:"Conheça estratégias de divulgação, comunicação e marketing digital.",duration:"100 horas",modules:7},
  {id:3,name:"Administração",icon:"📊",description:"Aprenda conceitos de gestão, organização e administração de empresas.",duration:"110 horas",modules:8}
];

const initialState = {
  enrolled:[{id:1,progress:25},{id:2,progress:0}],
  notifications:[
    {id:1,title:"Nova atividade disponível",description:"Uma nova atividade de Informática foi publicada.",date:"Hoje",read:false,icon:"📝"},
    {id:2,title:"Aviso da coordenação",description:"Confira os comunicados da escola.",date:"Ontem",read:false,icon:"📢"},
    {id:3,title:"Material atualizado",description:"Novos slides foram adicionados ao portal.",date:"Ontem",read:false,icon:"📚"}
  ],
  materials:[
    {id:1,title:"Introdução à programação",subject:"Informática",type:"Slides",date:"25/11/2026"},
    {id:2,title:"Atividade de HTML e CSS",subject:"Informática",type:"Atividade",date:"24/11/2026"},
    {id:3,title:"Trabalho de marketing digital",subject:"Marketing",type:"Trabalho",date:"22/11/2026"},
    {id:4,title:"Aula de administração",subject:"Administração",type:"Videoaula",date:"20/11/2026"}
  ],
  trash:[],
  messages:[]
};

let state = JSON.parse(localStorage.getItem("educonnectData")) || initialState;

function save(){
  localStorage.setItem("educonnectData",JSON.stringify(state));
}

function showToast(message){
  const toast=document.getElementById("toast");
  toast.textContent=message;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2500);
}

function showPage(page){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.remove("active"));
  document.getElementById(page).classList.add("active");
  document.querySelector(`[data-page="${page}"]`)?.classList.add("active");

  const names={
    inicio:"Visão geral",cursos:"Meus cursos",materiais:"Material didático",
    biblioteca:"Biblioteca",notas:"Notas e boletim",horarios:"Horários",
    eventos:"Eventos escolares",professores:"Professores",
    notificacoes:"Notificações",lixeira:"Lixeira",configuracoes:"Configurações"
  };
  document.getElementById("pageName").textContent=names[page];
  document.getElementById("sidebar").classList.remove("open");
}

function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("open");
}

document.querySelectorAll(".nav-item").forEach(button=>{
  button.addEventListener("click",()=>showPage(button.dataset.page));
});

function updateStats(){
  const enrolled=state.enrolled;
  const average=enrolled.length
    ?Math.round(enrolled.reduce((sum,c)=>sum+c.progress,0)/enrolled.length)
    :0;

  document.getElementById("statCourses").textContent=enrolled.length;
  document.getElementById("statProgress").textContent=average+"%";

  const unread=state.notifications.filter(n=>!n.read).length;
  document.getElementById("statNotifications").textContent=unread;
  document.getElementById("notificationCount").textContent=unread;
}

function renderHome(){
  const container=document.getElementById("homeCourses");
  container.innerHTML=state.enrolled.length
    ?state.enrolled.map(item=>{
      const course=courses.find(c=>c.id===item.id);
      return `<div class="course-row">
        <div class="course-icon">${course.icon}</div>
        <div class="course-info"><strong>${course.name}</strong>
        <small>${item.progress}% concluído</small>
        <div class="progress"><div style="width:${item.progress}%"></div></div></div>
        <span class="course-percent">${item.progress}%</span>
      </div>`;
    }).join("")
    :'<p class="empty">Você ainda não está inscrito em nenhum curso.</p>';

  document.getElementById("homeNotifications").innerHTML=
    state.notifications.slice(0,3).map(n=>`
      <div class="notice"><div class="notice-icon">${n.icon}</div>
      <div><strong>${n.title}</strong><p>${n.description}</p></div></div>
    `).join("")||'<p class="empty">Nenhuma notificação.</p>';

  updateStats();
}

function renderCourses(){
  document.getElementById("allCourses").innerHTML=courses.map(c=>{
    const enrolled=state.enrolled.find(e=>e.id===c.id);
    return `<article class="course-card">
      <div class="card-emoji">${c.icon}</div>
      <h3>${c.name}</h3><p>${c.description}</p>
      <div class="card-meta">⏱ ${c.duration} • ${c.modules} módulos</div>
      ${enrolled
        ?`<button class="secondary-btn" onclick="showToast('Você já está inscrito neste curso.')">Inscrito • ${enrolled.progress}%</button>`
        :`<button class="primary-btn" onclick="enroll(${c.id})">Inscrever-se</button>`}
    </article>`;
  }).join("");

  document.getElementById("enrolledCourses").innerHTML=state.enrolled.length
    ?state.enrolled.map(e=>{
      const c=courses.find(x=>x.id===e.id);
      return `<div class="material-row">
        <div class="course-icon">${c.icon}</div>
        <div class="course-info"><strong>${c.name}</strong>
        <small>${e.progress}% concluído</small>
        <div class="progress"><div style="width:${e.progress}%"></div></div></div>
        <span class="course-percent">${e.progress}%</span>
        <button onclick="advanceCourse(${e.id})">${e.progress>=100?"Certificado":"Concluir módulo"}</button>
      </div>`;
    }).join("")
    :'<p class="empty">Nenhum curso em andamento.</p>';
}

function enroll(id){
  state.enrolled.push({id,progress:0});
  save();renderAll();
  showToast("Inscrição realizada!");
}

function advanceCourse(id){
  const item=state.enrolled.find(e=>e.id===id);
  if(item.progress>=100){
    printCertificate(id);
    return;
  }
  item.progress=Math.min(100,item.progress+25);
  save();renderAll();
  if(item.progress===100){
    showToast("Parabéns! Curso concluído. Certificado liberado.");
  }else{
    showToast("Módulo concluído! Seu progresso foi atualizado.");
  }
}

function printCertificate(id){
  const course=courses.find(c=>c.id===id);
  const win=window.open("","_blank");
  if(!win){showToast("Permita a abertura de janelas para imprimir.");return;}
  win.document.write(`
    <html><head><title>Certificado</title>
    <style>
      body{font-family:Georgia,serif;text-align:center;padding:70px;color:#25234a}
      .certificate{border:9px double #6558d3;padding:65px 30px;max-width:850px;margin:auto}
      h1{font-size:38px;color:#5145b5}
      h2{font-size:28px;margin:35px}
      p{font-size:18px;line-height:1.8}
      .signature{margin-top:70px;border-top:1px solid #555;display:inline-block;padding:10px 50px}
    </style></head><body>
    <div class="certificate">
      <h1>EDUCONNECT</h1><h2>Certificado de Conclusão</h2>
      <p>Certificamos que</p><h2>Yan Victor</h2>
      <p>concluiu o curso de <strong>${course.name}</strong>, com carga horária de ${course.duration}.</p>
      <div class="signature">Coordenação Escolar</div>
    </div><script>window.onload=()=>window.print();<\/script>
    </body></html>`);
  win.document.close();
}

function renderMaterials(){
  const query=document.getElementById("materialSearch").value.toLowerCase();
  const filter=document.getElementById("materialFilter").value;
  const filtered=state.materials.filter(m=>
    (m.title.toLowerCase().includes(query)||m.subject.toLowerCase().includes(query))&&
    (filter==="Todos"||m.type===filter)
  );
  document.getElementById("materialsList").innerHTML=filtered.map(m=>`
    <div class="material-row">
      <div class="course-icon">${materialIcon(m.type)}</div>
      <div class="course-info"><strong>${m.title}</strong><small>${m.subject} • ${m.type} • ${m.date}</small></div>
      <button onclick="openMaterial(${m.id})">Visualizar</button>
      <button onclick="removeMaterial(${m.id})">Excluir</button>
    </div>
  `).join("")||'<p class="empty">Nenhum material encontrado.</p>';
}

function materialIcon(type){
  return {Atividade:"📝",Trabalho:"📑",Slides:"📊",Videoaula:"🎥"}[type]||"📄";
}

function openMaterial(id){
  const m=state.materials.find(x=>x.id===id);
  showToast("Material demonstrativo: "+m.title);
}

function removeMaterial(id){
  const index=state.materials.findIndex(m=>m.id===id);
  if(index<0)return;
  state.trash.push(state.materials.splice(index,1)[0]);
  save();renderMaterials();renderTrash();
  showToast("Material enviado para a lixeira.");
}

function renderLibrary(){
  const books=[
    {title:"HTML e CSS para iniciantes",category:"Informática",icon:"💻",description:"Material introdutório sobre criação de páginas web."},
    {title:"Lógica de programação",category:"Informática",icon:"🧠",description:"Conceitos fundamentais para aprender a programar."},
    {title:"Marketing digital",category:"Marketing",icon:"📢",description:"Introdução às estratégias de comunicação digital."},
    {title:"Gestão empresarial",category:"Administração",icon:"📊",description:"Fundamentos de gestão e organização."},
    {title:"Matemática básica",category:"Matemática",icon:"📐",description:"Conteúdos para revisão e prática."},
    {title:"Língua portuguesa",category:"Português",icon:"📖",description:"Leitura, interpretação e gramática."}
  ];
  const q=document.getElementById("librarySearch").value.toLowerCase();
  document.getElementById("libraryList").innerHTML=books.filter(b=>
    (b.title+" "+b.category).toLowerCase().includes(q)
  ).map(b=>`<article class="library-card"><div class="card-emoji">${b.icon}</div><h3>${b.title}</h3><p>${b.description}</p><div class="card-meta">${b.category}</div><button class="secondary-btn" onclick="showToast('Material demonstrativo da biblioteca.')">Abrir material</button></article>`).join("");
}

function renderGrades(){
  const grades=[
    ["Português","8,5","8,0","9,0","8,5"],
    ["Matemática","8,0","8,5","9,0","8,5"],
    ["História","9,0","8,0","8,5","8,5"],
    ["Geografia","8,5","8,0","8,5","8,3"],
    ["Informática","9,0","9,5","9,0","9,2"],
    ["Física","7,5","8,0","8,5","8,0"]
  ];
  document.getElementById("gradesTable").innerHTML=grades.map(row=>
    `<tr>${row.map(value=>`<td>${value}</td>`).join("")}</tr>`
  ).join("");
}

function printReport(){
  window.print();
}

function renderSchedule(){
  const rows=[
    ["07:00 – 07:50","Português","Matemática","Informática","História","Inglês"],
    ["07:50 – 08:40","Matemática","Português","Informática","Geografia","Física"],
    ["08:40 – 09:30","História","Informática","Matemática","Português","Informática"],
    ["09:50 – 10:40","Informática","Física","Português","Matemática","História"],
    ["10:40 – 11:30","Inglês","Geografia","Física","Informática","Matemática"]
  ];
  document.getElementById("scheduleTable").innerHTML=rows.map(row=>
    `<tr>${row.map(value=>`<td>${value}</td>`).join("")}</tr>`
  ).join("");
}

function renderEvents(){
  const events=[
    {date:"28 NOV",title:"Feira de Ciências",description:"Apresentação de projetos e experiências dos alunos.",icon:"🔬"},
    {date:"05 DEZ",title:"Semana da Informática",description:"Palestras, oficinas e atividades de tecnologia.",icon:"💻"},
    {date:"12 DEZ",title:"Encerramento escolar",description:"Evento de encerramento das atividades do ano.",icon:"🎓"}
  ];
  document.getElementById("eventsList").innerHTML=events.map(e=>
    `<article class="event-card"><div class="card-emoji">${e.icon}</div><div class="card-meta">${e.date}</div><h3>${e.title}</h3><p>${e.description}</p></article>`
  ).join("");
}

document.getElementById("messageForm").addEventListener("submit",e=>{
  e.preventDefault();
  const message={
    teacher:document.getElementById("teacher").value,
    subject:document.getElementById("messageSubject").value,
    text:document.getElementById("messageText").value,
    date:new Date().toLocaleDateString("pt-BR")
  };
  state.messages.unshift(message);
  save();renderMessages();
  e.target.reset();
  showToast("Mensagem registrada no portal.");
});

function renderMessages(){
  document.getElementById("sentMessages").innerHTML=state.messages.map(m=>
    `<div class="notice"><div class="notice-icon">✉️</div><div><strong>${m.subject}</strong><p>Para: ${m.teacher} • ${m.date}</p><p>${m.text}</p></div></div>`
  ).join("");
}

function renderNotifications(){
  document.getElementById("notificationsList").innerHTML=state.notifications.map(n=>
    `<div class="notice"><div class="notice-icon">${n.icon}</div><div style="flex:1"><strong>${n.title}</strong><p>${n.description}</p><p>${n.date} • ${n.read?"Lida":"Não lida"}</p></div><button class="text-btn" onclick="readNotification(${n.id})">${n.read?"Lida":"Marcar como lida"}</button></div>`
  ).join("")||'<p class="empty">Nenhuma notificação.</p>';
}

function readNotification(id){
  const n=state.notifications.find(x=>x.id===id);
  if(n)n.read=true;
  save();renderAll();
}

function markAllRead(){
  state.notifications.forEach(n=>n.read=true);
  save();renderAll();
  showToast("Notificações marcadas como lidas.");
}

function renderTrash(){
  document.getElementById("trashList").innerHTML=state.trash.map(m=>
    `<div class="material-row"><div class="course-info"><strong>${m.title}</strong><small>${m.subject} • ${m.type}</small></div><button onclick="restoreMaterial(${m.id})">Restaurar</button></div>`
  ).join("")||'<p class="empty">A lixeira está vazia.</p>';
}

function restoreMaterial(id){
  const index=state.trash.findIndex(m=>m.id===id);
  if(index<0)return;
  state.materials.push(state.trash.splice(index,1)[0]);
  save();renderAll();
  showToast("Material restaurado.");
}

function clearTrash(){
  if(!state.trash.length){showToast("A lixeira já está vazia.");return;}
  if(confirm("Deseja apagar permanentemente os materiais da lixeira?")){
    state.trash=[];
    save();renderTrash();
    showToast("Lixeira esvaziada.");
  }
}

document.getElementById("darkMode").addEventListener("change",e=>{
  document.body.classList.toggle("dark",e.target.checked);
  localStorage.setItem("educonnectDark",e.target.checked);
});

function renderAll(){
  renderHome();
  renderCourses();
  renderMaterials();
  renderLibrary();
  renderGrades();
  renderSchedule();
  renderEvents();
  renderMessages();
  renderNotifications();
  renderTrash();
}

if(localStorage.getItem("educonnectDark")==="true"){
  document.body.classList.add("dark");
  document.getElementById("darkMode").checked=true;
}

renderAll();
