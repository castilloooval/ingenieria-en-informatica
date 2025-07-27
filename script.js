const materias = [
  { id: "3621", name: "Matemática Discreta", correls: [] },
  { id: "3622", name: "Análisis Matemático I", correls: [] },
  { id: "3623", name: "Programación Inicial", correls: [] },
  { id: "3624", name: "Introducción a los Sistemas de Información", correls: [] },
  { id: "3625", name: "Sistemas de Numeración", correls: [] },
  { id: "3626", name: "Principios de Calidad de Software", correls: [] },
  { id: "3627", name: "Álgebra y Geometría Analítica I", correls: [] },
  { id: "3628", name: "Física I", correls: ["3622"] },
  { id: "3629", name: "Programación Estructurada Básica", correls: ["3623"] },
  { id: "3630", name: "Introducción a la Gestión de Requisitos", correls: ["3624"] },
  { id: "3631", name: "Fundamentos de Sistemas Embebidos", correls: ["3625"] },
  { id: "3632", name: "Introducción a los Proyectos Informáticos", correls: [] },
  { id: "3633", name: "Análisis Matemático II", correls: ["3622"] },
  { id: "3634", name: "Física II", correls: ["3628"] },
  { id: "3635", name: "Tópicos de Programación", correls: ["3629","3621"] },
  { id: "3636", name: "Bases de Datos", correls: ["3629","3621"] },
  { id: "3637", name: "Análisis de Sistemas", correls: ["3630"] },
  { id: "3638", name: "Arquitectura de Computadoras", correls: ["3631"] },
  { id: "3676", name: "Responsabilidad Social Universitaria", correls: ["3626"] },
  { id: "3639", name: "Análisis Matemático III", correls: ["3633"] },
  { id: "3640", name: "Algoritmos y Estructuras de Datos", correls: ["3635"] },
  { id: "3641", name: "Bases de Datos Aplicadas", correls: ["3636"] },
  { id: "3642", name: "Principios de Diseño de Sistemas", correls: ["3637","3626"] },
  { id: "3643", name: "Redes de Computadoras", correls: ["3638","3634"] },
  { id: "3644", name: "Gestión de las Organizaciones", correls: ["3632"] },
  { id: "3680", name: "Taller de Integración", correls: ["3638","3636","3635","3632","3630","3626","3625","3624","3623","3621"] },
  { id: "3645", name: "Álgebra y Geometría Analítica II", correls: ["3627"] },
  { id: "3646", name: "Paradigmas de Programación", correls: ["3640","3633"] },
  { id: "3647", name: "Requisitos Avanzados", correls: ["3642"] },
  { id: "3648", name: "Diseño de Software", correls: ["3642","3636"] },
  { id: "3649", name: "Sistemas Operativos", correls: ["3638"] },
  { id: "3650", name: "Seguridad de la Información", correls: ["3643","3638","3635"] },
  { id: "3675", name: "Práctica Profesional Supervisada", correls: ["3642"] },
  { id: "3651", name: "Probabilidad y Estadística", correls: ["3645","3639","3621"] },
  { id: "3652", name: "Programación Avanzada", correls: ["3641","3646"] },
  { id: "3653", name: "Arquitectura de Sistemas Software", correls: ["3648"] },
  { id: "3654", name: "Virtualización de Hardware", correls: ["3649","3645","3640"] },
  { id: "3655", name: "Auditoría y Legislación", correls: ["3650"] },
  { id: "3656", name: "Estadística Aplicada", correls: ["3651","3641"] },
  { id: "3657", name: "Autómatas y Gramáticas", correls: ["3646"] },
  { id: "3658", name: "Programación Concurrente", correls: ["3654","3646"] },
  { id: "3659", name: "Gestión Aplicada al Desarrollo de Software I", correls: ["3653","3647","3644"] },
  { id: "3660", name: "Sistemas Operativos Avanzados", correls: ["3654"] },
  { id: "3661", name: "Gestión de Proyectos", correls: ["3651","3650","3644"] },
  { id: "3668", name: "Inteligencia Artificial Aplicada", correls: ["3664","3656"] },
  { id: "3669", name: "Innovación y Emprendedorismo", correls: ["3661"] },
  { id: "3670", name: "Ciencia de Datos", correls: ["3664","3656"] },
  { id: "3671", name: "Proyecto Final de Carrera", correls: ["3667","3661","3660","3659","3656"] },
  { id: "3672", name: "Electiva I", correls: ["3658","3661","3663"] },
  { id: "3662", name: "Matemática Aplicada", correls: ["3651"] },
  { id: "3663", name: "Lenguajes y Compiladores", correls: ["3657"] },
  { id: "3664", name: "Inteligencia Artificial", correls: ["3651","3646"] },
  { id: "3665", name: "Gestión Aplicada al Desarrollo de Software II", correls: ["3659","3652"] },
  { id: "3666", name: "Seguridad Aplicada y Forensia", correls: ["3655","3652","3649"] },
  { id: "3667", name: "Gestión de la Calidad en Procesos de Sistemas", correls: ["3647"] },
  { id: "3677", name: "Electiva I: Lenguaje Orientado a Negocios", correls: [] },
  { id: "3678", name: "Tecnologías en Seguridad (Electiva II)", correls: [] },
  { id: "3679", name: "Visión Artificial (Electiva III)", correls: [] },
  { id: "901", name: "Inglés Nivel I", correls: [] },
  { id: "902", name: "Inglés Nivel II", correls: ["901"] },
  { id: "903", name: "Inglés Nivel III", correls: ["902"] },
  { id: "904", name: "Inglés Nivel IV", correls: ["903"] },
  { id: "911", name: "Computación Transversal I", correls: [] },
  { id: "912", name: "Computación Transversal II", correls: ["911"] },
];

const cont = document.getElementById("malla-container");

function renderMaterias() {
  cont.innerHTML = "";
  materias.forEach(m => {
    const div = document.createElement("div");
    div.className = "materia disabled";
    div.dataset.id = m.id;
    div.dataset.correls = m.correls.join(",");
    div.textContent = m.name;
    cont.appendChild(div);
  });
}

function cargarProgreso() {
  const aprobadas = JSON.parse(localStorage.getItem("materiasAprobadas") || "[]");
  document.querySelectorAll(".materia").forEach(div => {
    const id = div.dataset.id;
    if (aprobadas.includes(id)) {
      div.classList.add("aprobada");
      div.classList.remove("disabled");
    }
  });
}

function actualizarHabilitadas() {
  document.querySelectorAll(".materia.disabled").forEach(materia => {
    const correls = materia.dataset.correls?.split(",") || [];
    const habilitada = correls.every(id => document.querySelector(`[data-id="${id}"]`)?.classList.contains("aprobada"));
    if (habilitada) {
      materia.classList.remove("disabled");
    }
  });
}

function guardarProgreso() {
  const aprobadas = Array.from(document.querySelectorAll(".materia.aprobada")).map(div => div.dataset.id);
  localStorage.setItem("materiasAprobadas", JSON.stringify(aprobadas));
}

cont.addEventListener("click", e => {
  const m = e.target;
  if (!m.classList.contains("materia")) return;
  if (m.classList.contains("aprobada")) return;
  if (m.classList.contains("disabled")) return;

  m.classList.add("aprobada");
  guardarProgreso();
  actualizarHabilitadas();
});

renderMaterias();
cargarProgreso();
actualizarHabilitadas();
