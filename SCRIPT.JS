
// ==========================================
// DVF PORTAL ESCOLAR
// Sistema principal - JavaScript
// ==========================================

// DADOS DO ESTUDANTE

const student = {
    name: "Yan Victor",
    class: "301 INF",
    grade: "3º Ano"
};

// ==========================================
// DADOS INICIAIS
// ==========================================

const initialCourses = [
    {
        id: 1,
        name: "Informática",
        icon: "bi bi-pc-display",
        cover: "cover-purple",
        description: "Aprenda conceitos de informática, programação, desenvolvimento web, manutenção e tecnologia.",
        workload: "120 horas",
        progress: 65,
        lessons: 10,
        completedLessons: 6
    },
    {
        id: 2,
        name: "Marketing",
        icon: "bi bi-megaphone",
        cover: "cover-blue",
        description: "Conheça estratégias de marketing, comunicação, publicidade, redes sociais e criação de conteúdo.",
        workload: "80 horas",
        progress: 35,
        lessons: 10,
        completedLessons: 3
    },
    {
        id: 3,
        name: "Administração",
        icon: "bi bi-briefcase",
        cover: "cover-orange",
        description: "Estude gestão empresarial, organização, planejamento, recursos humanos e empreendedorismo.",
        workload: "100 horas",
        progress: 20,
        lessons: 10,
        completedLessons: 2
    }
];

const initialActivities = [
    {
        id: 1,
        title: "Atividade de desenvolvimento web",
        teacher: "Professor de Informática",
        type: "Atividade",
        subject: "Informática",
        deadline: "28/11/2026",
        description: "Desenvolver uma página utilizando HTML e CSS.",
        status: "Pendente"
    },
    {
        id: 2,
        title: "Trabalho de Marketing Digital",
        teacher: "Professor de Marketing",
        type: "Trabalho",
        subject: "Marketing",
        deadline: "30/11/2026",
        description: "Pesquisar estratégias de divulgação digital.",
        status: "Pendente"
    },
    {
        id: 3,
        title: "Videoaula: Gestão empresarial",
        teacher: "Professor de Administração",
        type: "Videoaula",
        subject: "Administração",
        deadline: "02/12/2026",
        description: "Assistir à videoaula disponibilizada pelo professor.",
        status: "Pendente"
    }
];

const initialNotifications = [
    {
        id: 1,
        title: "Nova atividade disponível",
        description: "O professor de Informática publicou uma atividade de desenvolvimento web.",
        date: "25/11/2026",
        type: "atividade",
        read: false
    },
    {
        id: 2,
        title: "Novo material didático",
        description: "Foram disponibilizados slides de Marketing Digital.",
        date: "24/11/2026",
        type: "material",
        read: false
    },
    {
        id: 3,
        title: "Comunicado escolar",
        description: "Confira as próximas datas do calendário escolar.",
        date: "23/11/2026",
        type: "aviso",
        read: false
    }
];

const initialGrades = [
    { subject: "Língua Portuguesa", grades: [8.5, 9, 8, 9] },
    { subject: "Matemática", grades: [7.5, 8, 8.5, 9] },
    { subject: "História", grades: [9, 8.5, 9, 8] },
    { subject: "Geografia", grades: [8, 8.5, 9, 8.5] },
    { subject: "Biologia", grades: [8.5, 9, 8, 9] },
    { subject: "Física", grades: [7, 8, 8.5, 8] },
    { subject: "Química", grades: [8, 8.5, 8, 9] },
    { subject: "Informática", grades: [9.5, 9, 10, 9] },
    { subject: "Marketing", grades: [8, 8.5, 9, 9] },
    { subject: "Administração", grades: [9, 8, 8.5, 9] }
];

const initialEvents = [
    {
        id: 1,
        title: "Feira de Ciências e Tecnologia",
        date: "28/11/2026",
        location: "Pátio da escola",
        description: "Apresentação de projetos científicos e tecnológicos."
    },
    {
        id: 2,
        title: "Semana de atividades culturais",
        date: "05/12/2026",
        location: "Centro Educa Mais DVF",
        description: "Atividades culturais e apresentações dos estudantes."
    },
    {
        id: 3,
        title: "Encerramento do ano letivo",
        date: "18/12/2026",
        location: "Escola",
        description: "Programação de encerramento das atividades escolares."
    }
];

const teachers = [
    { id: 1, name: "Professor de Informática", subject: "Informática", initials: "PI" },
    { id: 2, name: "Professor de Marketing", subject: "Marketing", initials: "PM" },
    { id: 3, name: "Professor de Administração", subject: "Administração", initials: "PA" },
    { id: 4, name: "Coordenação Pedagógica", subject: "Coordenação", initials: "CP" }
];

const initialMaterials = [
    {
        id: 1,
        name: "Introdução ao HTML e CSS",
        type: "pdf",
        subject: "Informática",
        date: "25/11/2026",
        size: "Material demonstrativo",
        url: ""
    },
    {
        id: 2,
        name: "Slides de Marketing Digital",
        type: "slide",
        subject: "Marketing",
        date: "24/11/2026",
        size: "Material demonstrativo",
        url: ""
    },
    {
        id: 3,
        name: "Aula de Gestão Empresarial",
        type: "video",
        subject: "Administração",
        date: "23/11/2026",
        size: "Videoaula demonstrativa",
        url: ""
    }
];

const libraryBooks = [
    {
        title: "Introdução à Informática",
        category: "Tecnologia",
        description: "Conceitos básicos de computadores, sistemas e tecnologia.",
        icon: "bi bi-pc-display"
    },
    {
        title: "Fundamentos de Administração",
        category: "Gestão",
        description: "Princípios fundamentais da gestão de organizações.",
        icon: "bi bi-building"
    },
    {
        title: "Marketing e Comunicação",
        category: "Marketing",
        description: "Estratégias de comunicação e divulgação.",
        icon: "bi bi-megaphone"
    },
    {
        title: "Lógica de Programação",
        category: "Tecnologia",
        description: "Introdução ao raciocínio lógico e algoritmos.",
        icon: "bi bi-code-slash"
    },
    {
        title: "Empreendedorismo",
        category: "Gestão",
        description: "Conceitos de negócios, planejamento e inovação.",
        icon: "bi bi-lightbulb"
    },
    {
        title: "Comunicação Empresarial",
        category: "Comunicação",
        description: "Comunicação profissional e relacionamento.",
        icon: "bi bi-chat-square-text"
    }
];

// ==========================================
// LOCAL STORAGE
// ==========================================

function loadData(key, defaultValue) {
    try {
        const saved = localStorage.getItem("dvf_" + key);

        if (saved === null) {
            return structuredClone(defaultValue);
        }

        const parsed = JSON.parse(saved);

        return parsed;
    } catch (error) {
        console.error("Erro ao carregar:", key, error);
        return structuredClone(defaultValue);
    }
}

function saveData(key, value) {
    try {
        localStorage.setItem("dvf_" + key, JSON.stringify(value));
    } catch (error) {
        showToast("Não foi possível salvar. Verifique o espaço disponível.");
    }
}

let courses = loadData("courses", initialCourses);
let activities = loadData("activities", initialActivities);
let notifications = loadData("notifications", initialNotifications);
let materials = loadData("materials", initialMaterials);
let trash = loadData("trash", []);
let messages = loadData("messages", []);
let grades = loadData("grades", initialGrades);
let events = loadData("events", initialEvents);

function persistAll() {
    saveData("courses", courses);
    saveData("activities", activities);
    saveData("notifications", notifications);
    saveData("materials", materials);
    saveData("trash", trash);
    saveData("messages", messages);
    saveData("grades", grades);
    saveData("events", events);
}

// ==========================================
// FUNÇÕES GERAIS
// ==========================================

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}

function showToast(message) {
    document.getElementById("toastMessage").textContent = message;

    const toastElement = document.getElementById("systemToast");

    bootstrap.Toast.getOrCreateInstance(toastElement, {
        delay: 3000
    }).show();
}

function formatDate() {
    return new Date().toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

function getAverage() {
    const allGrades = grades.flatMap(item => item.grades);

    if (!allGrades.length) return 0;

    return allGrades.reduce((sum, value) => sum + Number(value), 0) / allGrades.length;
}

// ==========================================
// NAVEGAÇÃO
// ==========================================

const sidebar = document.getElementById("sidebar");

function navigateTo(pageName) {
    const target = document.getElementById(pageName);

    if (!target) return;

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    target.classList.add("active");

    document.querySelectorAll(".menu-link").forEach(link => {
        link.classList.toggle(
            "active",
            link.dataset.page === pageName
        );
    });

    sidebar.classList.remove("show");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        navigateTo(link.dataset.page);
    });
});

document.querySelectorAll("[data-goto]").forEach(button => {
    button.addEventListener("click", () => {
        navigateTo(button.dataset.goto);
    });
});

document.getElementById("menuToggle").addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

// ==========================================
// DASHBOARD
// ==========================================

function renderDashboard() {
    const average = getAverage();

    document.getElementById("currentDate").textContent = formatDate();

    document.getElementById("totalCourses").textContent = courses.length;

    document.getElementById("pendingTasks").textContent =
        activities.filter(item => item.status === "Pendente").length;

    document.getElementById("certificatesCount").textContent =
        courses.filter(item => item.progress >= 100).length;

    document.getElementById("averageGrade").textContent =
        average.toFixed(1).replace(".", ",");

    const completed = courses.filter(item => item.progress >= 100).length;

    document.getElementById("ongoingCourses").textContent =
        courses.length - completed;

    document.getElementById("completedCourses").textContent = completed;

    document.getElementById("courseCertificates").textContent = completed;

    document.getElementById("reportAverage").textContent =
        average.toFixed(1).replace(".", ",");

    document.getElementById("dashboardCourses").innerHTML =
        courses.map(course => `
            <div class="activity-item">
                <div class="list-icon">
                    <i class="${escapeHTML(course.icon)}"></i>
                </div>

                <div class="list-info">
                    <strong>${escapeHTML(course.name)}</strong>
                    <small>${course.progress}% concluído</small>

                    <div class="course-progress">
                        <div style="width:${course.progress}%"></div>
                    </div>
                </div>
            </div>
        `).join("");

    document.getElementById("dashboardNotifications").innerHTML =
        notifications.slice(0, 3).map(notification => `
            <div class="notification-item">
                <div class="list-icon">
                    <i class="bi bi-bell"></i>
                </div>
                <div class="list-info">
                    <strong>${escapeHTML(notification.title)}</strong>
                    <small>${escapeHTML(notification.description)}</small>
                </div>
                ${notification.read ? "" : '<span class="status-pill">Nova</span>'}
            </div>
        `).join("") || "<p>Nenhuma notificação.</p>";

    document.getElementById("dashboardEvents").innerHTML =
        events.slice(0, 3).map(event => `
            <div class="event-item">
                <div class="list-icon">
                    <i class="bi bi-calendar-event"></i>
                </div>
                <div class="list-info">
                    <strong>${escapeHTML(event.title)}</strong>
                    <small>${escapeHTML(event.date)} • ${escapeHTML(event.location)}</small>
                </div>
            </div>
        `).join("") || "<p>Nenhum evento cadastrado.</p>";
}

// ==========================================
// CURSOS
// ==========================================

function renderCourses() {
    const grid = document.getElementById("courseGrid");

    grid.innerHTML = courses.map(course => {
        const completed = course.progress >= 100;

        return `
            <article class="course-card">

                <div class="course-cover ${escapeHTML(course.cover)}">
                    <i class="${escapeHTML(course.icon)}"></i>
                    <span>${completed ? "Concluído" : "Em andamento"}</span>
                </div>

                <div class="course-body">

                    <h4>${escapeHTML(course.name)}</h4>

                    <p>${escapeHTML(course.description)}</p>

                    <div class="progress-info">
                        <span>Progresso</span>
                        <strong>${course.progress}%</strong>
                    </div>

                    <div class="course-progress">
                        <div style="width:${course.progress}%"></div>
                    </div>

                    <div class="progress-info">
                        <span>${course.completedLessons}/${course.lessons} aulas</span>
                        <span>${escapeHTML(course.workload)}</span>
                    </div>

                    <div class="course-actions">

                        <button class="primary-button"
                            onclick="openCourse(${course.id})">
                            <i class="bi bi-eye"></i> Acessar
                        </button>

                        ${completed ? `
                            <button class="secondary-button"
                                onclick="printCertificate(${course.id})">
                                <i class="bi bi-award"></i> Certificado
                            </button>
                        ` : ""}

                    </div>

                </div>
            </article>
        `;
    }).join("");
}

function openCourse(id) {
    const course = courses.find(item => item.id === id);

    if (!course) return;

    document.getElementById("courseModalTitle").textContent =
        course.name;

    const completed = course.progress >= 100;

    document.getElementById("courseModalBody").innerHTML = `
        <p>${escapeHTML(course.description)}</p>

        <div class="course-progress">
            <div style="width:${course.progress}%"></div>
        </div>

        <p><strong>Progresso:</strong> ${course.progress}%</p>
        <p><strong>Carga horária:</strong> ${escapeHTML(course.workload)}</p>

        <h6 class="mt-4">Conteúdo do curso</h6>

        <div class="list-group mt-3">
            ${Array.from({ length: course.lessons }, (_, index) => `
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    <span>Aula ${index + 1}</span>
                    <span class="badge ${index < course.completedLessons ? "text-bg-success" : "text-bg-secondary"}">
                        ${index < course.completedLessons ? "Concluída" : "Pendente"}
                    </span>
                </div>
            `).join("")}
        </div>

        <div class="mt-3">
            ${completed
                ? `<button class="primary-button" onclick="printCertificate(${course.id})">
                    <i class="bi bi-award"></i> Emitir certificado
                   </button>`
                : `<button class="primary-button" onclick="completeNextLesson(${course.id})">
                    <i class="bi bi-check-circle"></i> Concluir próxima aula
                   </button>`
            }
        </div>
    `;

    bootstrap.Modal.getOrCreateInstance(
        document.getElementById("courseModal")
    ).show();
}

function completeNextLesson(id) {
    const course = courses.find(item => item.id === id);

    if (!course || course.progress >= 100) return;

    course.completedLessons++;

    course.progress = Math.round(
        (course.completedLessons / course.lessons) * 100
    );

    persistAll();
    renderAll();

    if (course.progress >= 100) {
        showToast("Parabéns! Você concluiu o curso. Certificado liberado!");
    } else {
        showToast("Aula concluída com sucesso!");
    }

    openCourse(id);
}

// CERTIFICADO PARA IMPRESSÃO

function printCertificate(id) {
    const course = courses.find(item => item.id === id);

    if (!course || course.progress < 100) {
        showToast("Conclua todas as aulas antes de emitir o certificado.");
        return;
    }

    const certificateWindow = window.open("", "_blank");

    if (!certificateWindow) {
        showToast("Permita a abertura de janelas para imprimir o certificado.");
        return;
    }

    const certificateHTML = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Certificado - ${escapeHTML(course.name)}</title>
            <style>
                body {
                    font-family: Georgia, serif;
                    text-align: center;
                    padding: 35px;
                    color: #292442;
                }

                .certificate {
                    border: 12px double #6546d7;
                    padding: 55px 35px;
                    min-height: 450px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                h1 {
                    color: #6546d7;
                    font-size: 34px;
                }

                h2 {
                    font-size: 27px;
                    margin: 25px 0;
                }

                p {
                    font-size: 17px;
                    line-height: 1.8;
                }

                .signature {
                    margin-top: 55px;
                }

                @media print {
                    body { padding: 0; }
                }
            </style>
        </head>
        <body>
            <div class="certificate">
                <h1>DVF PORTAL ESCOLAR</h1>
                <h2>CERTIFICADO DE CONCLUSÃO</h2>

                <p>Certificamos que</p>

                <h2>${escapeHTML(student.name)}</h2>

                <p>
                    concluiu satisfatoriamente o curso de
                    <strong>${escapeHTML(course.name)}</strong>,
                    com carga horária de
                    <strong>${escapeHTML(course.workload)}</strong>.
                </p>

                <p>Centro Educa Mais Domingos Vieira Filho</p>

                <p>Emitido em ${new Date().toLocaleDateString("pt-BR")}</p>

                <div class="signature">
                    ______________________________<br>
                    Coordenação Pedagógica
                </div>
            </div>

            <script>
                window.onload = function() {
                    window.print();
                };
            <\/script>
        </body>
        </html>
    `;

    certificateWindow.document.open();
    certificateWindow.document.write(certificateHTML);
    certificateWindow.document.close();
}

// ==========================================
// ATIVIDADES
// ==========================================

function renderActivities() {
    const container = document.getElementById("activityList");

    container.innerHTML = activities.map(activity => `
        <div class="activity-item">

            <div class="list-icon">
                <i class="bi bi-journal-text"></i>
            </div>

            <div class="list-info">
                <strong>${escapeHTML(activity.title)}</strong>
                <small>${escapeHTML(activity.subject)} • ${escapeHTML(activity.teacher)}</small>
                <small>Prazo: ${escapeHTML(activity.deadline)}</small>
                <small>${escapeHTML(activity.description)}</small>
            </div>

            <div class="d-flex flex-column gap-2">
                <span class="status-pill ${activity.status === "Concluída" ? "status-done" : "status-pending"}">
                    ${escapeHTML(activity.status)}
                </span>

                ${activity.status === "Pendente" ? `
                    <button class="secondary-button"
                        onclick="finishActivity(${activity.id})">
                        Concluir
                    </button>
                ` : ""}
            </div>

        </div>
    `).join("") || "<p>Nenhuma atividade cadastrada.</p>";
}

function finishActivity(id) {
    const activity = activities.find(item => item.id === id);

    if (!activity) return;

    activity.status = "Concluída";

    persistAll();
    renderAll();

    showToast("Atividade marcada como concluída!");
}

// ==========================================
// NOTIFICAÇÕES
// ==========================================

function renderNotifications() {
    const container = document.getElementById("notificationList");

    container.innerHTML = notifications.map(item => `
        <div class="notification-item">

            <div class="list-icon">
                <i class="bi bi-bell"></i>
            </div>

            <div class="list-info">
                <strong>${escapeHTML(item.title)}</strong>
                <small>${escapeHTML(item.description)}</small>
                <small>${escapeHTML(item.date)}</small>
            </div>

            ${item.read
                ? '<span class="status-pill status-done">Lida</span>'
                : `<button class="secondary-button" onclick="readNotification(${item.id})">Marcar como lida</button>`
            }

        </div>
    `).join("") || "<p>Nenhuma notificação disponível.</p>";
}

function readNotification(id) {
    const item = notifications.find(notification => notification.id === id);

    if (!item) return;

    item.read = true;

    persistAll();
    renderAll();
}

document.getElementById("markAllRead").addEventListener("click", () => {
    notifications.forEach(item => item.read = true);

    persistAll();
    renderAll();

    showToast("Todas as notificações foram marcadas como lidas.");
});

// ==========================================
// MATERIAIS DIDÁTICOS
// ==========================================

function renderMaterials() {
    const filter = document.getElementById("materialFilter").value;

    const filtered = materials.filter(item =>
        filter === "todos" || item.type === filter
    );

    const container = document.getElementById("materialList");

    container.innerHTML = filtered.map(item => `
        <div class="material-item">

            <div class="list-icon">
                <i class="bi ${item.type === "video" ? "bi-play-circle" : item.type === "slide" ? "bi-easel" : "bi-file-pdf"}"></i>
            </div>

            <div class="list-info">
                <strong>${escapeHTML(item.name)}</strong>
                <small>${escapeHTML(item.subject)} • ${escapeHTML(item.date)}</small>
                <small>${escapeHTML(item.size)}</small>
            </div>

            <div class="d-flex gap-2 flex-wrap">
                ${item.url ? `
                    <button class="secondary-button" onclick="openMaterial(${item.id})">
                        Abrir
                    </button>
                ` : ""}
                <button class="danger-button" onclick="deleteMaterial(${item.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>

        </div>
    `).join("") || "<p>Nenhum material encontrado.</p>";
}

document.getElementById("materialFilter").addEventListener("change", renderMaterials);

document.getElementById("materialUpload").addEventListener("change", event => {
    const files = Array.from(event.target.files);

    files.forEach(file => {
        if (file.size > 5 * 1024 * 1024) {
            showToast(`${file.name}: limite demonstrativo de 5 MB.`);
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            const extension = file.name.split(".").pop().toLowerCase();

            let type = "pdf";

            if (["mp4", "webm", "mov"].includes(extension)) {
                type = "video";
            } else if (["ppt", "pptx"].includes(extension)) {
                type = "slide";
            }

            const material = {
                id: Date.now() + Math.random(),
                name: file.name,
                type,
                subject: "Material pessoal",
                date: new Date().toLocaleDateString("pt-BR"),
                size: (file.size / 1024).toFixed(1) + " KB",
                url: reader.result
            };

            materials.unshift(material);

            persistAll();
            renderAll();

            showToast("Arquivo adicionado!");
        };

        reader.onerror = () => {
            showToast("Não foi possível ler o arquivo.");
        };

        reader.readAsDataURL(file);
    });

    event.target.value = "";
});

function openMaterial(id) {
    const material = materials.find(item => item.id === id);

    if (!material || !material.url) return;

    const fileWindow = window.open("", "_blank");

    if (!fileWindow) {
        showToast("Permita a abertura de janelas no navegador.");
        return;
    }

    if (material.type === "video") {
        fileWindow.document.write(`
            <video src="${material.url}" controls autoplay
                style="width:100%;max-height:95vh"></video>
        `);
    } else if (material.type === "pdf") {
        fileWindow.location.href = material.url;
    } else {
        const link = fileWindow.document.createElement("a");
        link.href = material.url;
        link.download = material.name;
        link.textContent = "Baixar " + material.name;
        fileWindow.document.body.appendChild(link);
    }
}

// ==========================================
// LIXEIRA
// ==========================================

function deleteMaterial(id) {
    const index = materials.findIndex(item => item.id === id);

    if (index === -1) return;

    const removed = materials.splice(index, 1)[0];

    trash.unshift({
        ...removed,
        deletedAt: new Date().toLocaleDateString("pt-BR")
    });

    persistAll();
    renderAll();

    showToast("Arquivo enviado para a lixeira.");
}

function renderTrash() {
    const container = document.getElementById("trashList");

    container.innerHTML = trash.map(item => `
        <div class="material-item">

            <div class="list-icon">
                <i class="bi bi-file-earmark"></i>
            </div>

            <div class="list-info">
                <strong>${escapeHTML(item.name)}</strong>
                <small>Excluído em ${escapeHTML(item.deletedAt || "Data desconhecida")}</small>
            </div>

            <div class="d-flex gap-2">
                <button class="secondary-button" onclick="restoreMaterial(${JSON.stringify(item.id)})">
                    Restaurar
                </button>

                <button class="danger-button" onclick="permanentlyDelete(${JSON.stringify(item.id)})">
                    Excluir
                </button>
            </div>

        </div>
    `).join("") || "<p>A lixeira está vazia.</p>";
}

function restoreMaterial(id) {
    const index = trash.findIndex(item => String(item.id) === String(id));

    if (index === -1) return;

    const item = trash.splice(index, 1)[0];

    delete item.deletedAt;

    materials.unshift(item);

    persistAll();
    renderAll();

    showToast("Arquivo restaurado!");
}

function permanentlyDelete(id) {
    trash = trash.filter(item => String(item.id) !== String(id));

    persistAll();
    renderAll();

    showToast("Arquivo excluído permanentemente.");
}

document.getElementById("emptyTrash").addEventListener("click", () => {
    if (!trash.length) {
        showToast("A lixeira já está vazia.");
        return;
    }

    if (confirm("Deseja excluir permanentemente todos os arquivos da lixeira?")) {
        trash = [];

        persistAll();
        renderAll();

        showToast("Lixeira esvaziada!");
    }
});

// ==========================================
// BIBLIOTECA
// ==========================================

function renderLibrary() {
    document.getElementById("libraryGrid").innerHTML =
        libraryBooks.map(book => `
            <div class="library-card">
                <i class="${escapeHTML(book.icon)}"></i>
                <span class="status-pill">${escapeHTML(book.category)}</span>
                <h4>${escapeHTML(book.title)}</h4>
                <p>${escapeHTML(book.description)}</p>
                <a href="#" onclick="showToast('Adicione um link de material para acessar esta obra.'); return false;">
                    Consultar material <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        `).join("");
}

// ==========================================
// BOLETIM E NOTAS
// ==========================================

function renderGrades() {
    document.getElementById("gradeTable").innerHTML =
        grades.map(item => {
            const average = item.grades.reduce((sum, value) => sum + Number(value), 0) / 4;

            return `
                <tr>
                    <td><strong>${escapeHTML(item.subject)}</strong></td>
                    ${item.grades.map(value => `<td>${Number(value).toFixed(1).replace(".", ",")}</td>`).join("")}
                    <td class="grade-value">${average.toFixed(1).replace(".", ",")}</td>
                </tr>
            `;
        }).join("");
}

// ==========================================
// HORÁRIOS
// ==========================================

function renderSchedule() {
    const schedule = [
        ["07:00 - 07:50", "Português", "Matemática", "Informática", "História", "Marketing"],
        ["07:50 - 08:40", "Matemática", "Português", "Informática", "Geografia", "Marketing"],
        ["08:40 - 09:30", "História", "Biologia", "Português", "Informática", "Administração"],
        ["09:50 - 10:40", "Geografia", "Física", "Marketing", "Matemática", "Administração"],
        ["10:40 - 11:30", "Informática", "Química", "Biologia", "Marketing", "Português"],
        ["11:30 - 12:20", "Administração", "Informática", "Física", "Biologia", "Projeto"]
    ];

    document.getElementById("scheduleTable").innerHTML =
        schedule.map(row => `
            <tr>
                ${row.map(cell => `<td>${escapeHTML(cell)}</td>`).join("")}
            </tr>
        `).join("");
}

// ==========================================
// EVENTOS
// ==========================================

function renderEvents() {
    document.getElementById("eventList").innerHTML =
        events.map(event => `
            <div class="event-item">
                <div class="list-icon">
                    <i class="bi bi-calendar-event"></i>
                </div>

                <div class="list-info">
                    <strong>${escapeHTML(event.title)}</strong>
                    <small><i class="bi bi-calendar"></i> ${escapeHTML(event.date)}</small>
                    <small><i class="bi bi-geo-alt"></i> ${escapeHTML(event.location)}</small>
                    <small>${escapeHTML(event.description)}</small>
                </div>

                <span class="status-pill">Evento</span>
            </div>
        `).join("") || "<p>Nenhum evento cadastrado.</p>";
}

// ==========================================
// PROFESSORES E MENSAGENS
// ==========================================

function renderTeachers() {
    document.getElementById("teacherList").innerHTML =
        teachers.map(teacher => `
            <div class="teacher-item">
                <div class="teacher-avatar">${escapeHTML(teacher.initials)}</div>

                <div class="list-info">
                    <strong>${escapeHTML(teacher.name)}</strong>
                    <small>${escapeHTML(teacher.subject)}</small>
                </div>
            </div>
        `).join("");

    document.getElementById("teacherSelect").innerHTML = `
        <option value="">Selecione um professor</option>
        ${teachers.map(teacher => `
            <option value="${teacher.id}">${escapeHTML(teacher.name)}</option>
        `).join("")}
    `;
}

document.getElementById("messageForm").addEventListener("submit", event => {
    event.preventDefault();

    const teacherId = Number(document.getElementById("teacherSelect").value);
    const teacher = teachers.find(item => item.id === teacherId);

    if (!teacher) {
        showToast("Selecione um professor.");
        return;
    }

    const message = {
        id: Date.now(),
        teacher: teacher.name,
        subject: document.getElementById("messageSubject").value.trim(),
        text: document.getElementById("messageText").value.trim(),
        date: new Date().toLocaleDateString("pt-BR")
    };

    if (!message.subject || !message.text) {
        showToast("Preencha todos os campos.");
        return;
    }

    messages.unshift(message);

    saveData("messages", messages);

    event.target.reset();

    renderMessages();

    showToast("Mensagem registrada no portal!");
});

function renderMessages() {
    document.getElementById("sentMessages").innerHTML =
        messages.map(message => `
            <div class="message-item">
                <div class="list-icon">
                    <i class="bi bi-envelope"></i>
                </div>

                <div class="list-info">
                    <strong>${escapeHTML(message.subject)}</strong>
                    <small>Para: ${escapeHTML(message.teacher)} • ${escapeHTML(message.date)}</small>
                    <small>${escapeHTML(message.text)}</small>
                    <small>Registro local: aguardando integração com o sistema da escola.</small>
                </div>
            </div>
        `).join("") || "<p>Nenhuma mensagem enviada.</p>";
}

// ==========================================
// CONFIGURAÇÕES
// ==========================================

const darkMode = document.getElementById("darkMode");
const notificationsEnabled = document.getElementById("notificationsEnabled");

function loadSettings() {
    const savedTheme = localStorage.getItem("dvf_darkMode") === "true";
    const savedNotifications = localStorage.getItem("dvf_notifications") !== "false";

    darkMode.checked = savedTheme;
    notificationsEnabled.checked = savedNotifications;

    document.body.classList.toggle("dark-mode", savedTheme);
}

darkMode.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", darkMode.checked);

    localStorage.setItem("dvf_darkMode", darkMode.checked);

    showToast("Aparência atualizada!");
});

notificationsEnabled.addEventListener("change", () => {
    localStorage.setItem("dvf_notifications", notificationsEnabled.checked);

    showToast("Preferências de notificações atualizadas!");
});

document.getElementById("saveProfile").addEventListener("click", () => {
    const name = document.getElementById("studentName").value.trim();

    if (!name) {
        showToast("Digite um nome válido.");
        return;
    }

    student.name = name;

    localStorage.setItem("dvf_studentName", name);

    document.querySelectorAll(".profile-sidebar strong, .top-profile strong, .settings-profile h5")
        .forEach(element => {
            element.textContent = name;
        });

    showToast("Perfil atualizado!");
});

// ==========================================
// PESQUISA GLOBAL
// ==========================================

document.getElementById("globalSearch").addEventListener("keydown", event => {
    if (event.key !== "Enter") return;

    const query = event.target.value.trim().toLowerCase();

    if (!query) return;

    const searchable = [
        ...courses.map(item => ({
            name: item.name,
            page: "cursos"
        })),
        ...activities.map(item => ({
            name: item.title,
            page: "atividades"
        })),
        ...materials.map(item => ({
            name: item.name,
            page: "materiais"
        })),
        ...events.map(item => ({
            name: item.title,
            page: "eventos"
        })),
        ...libraryBooks.map(item => ({
            name: item.title,
            page: "biblioteca"
        }))
    ];

    const result = searchable.find(item =>
        item.name.toLowerCase().includes(query)
    );

    if (result) {
        navigateTo(result.page);
        showToast("Resultado encontrado: " + result.name);
    } else {
        showToast("Nenhum resultado encontrado.");
    }
});

// ==========================================
// ATUALIZAÇÃO GERAL
// ==========================================

function renderAll() {
    renderDashboard();
    renderCourses();
    renderActivities();
    renderNotifications();
    renderMaterials();
    renderTrash();
    renderLibrary();
    renderGrades();
    renderSchedule();
    renderEvents();
    renderTeachers();
    renderMessages();
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

function initializePortal() {
    const savedName = localStorage.getItem("dvf_studentName");

    if (savedName) {
        student.name = savedName;

        document.getElementById("studentName").value = savedName;

        document.querySelectorAll(
            ".profile-sidebar strong, .top-profile strong, .settings-profile h5"
        ).forEach(element => {
            element.textContent = savedName;
        });
    }

    loadSettings();
    renderAll();

    console.log("DVF Portal Escolar iniciado com sucesso!");
}

initializePortal();
