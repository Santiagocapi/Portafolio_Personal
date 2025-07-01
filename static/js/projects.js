const projects = [
  {
    titulo: "ONT INFO",
    fecha: "Septiembre 2023",
    materia: "Practicas Profesionales",
    descripcion:
      "Este proyecto consiste en una aplicación web que recupera datos de la ONT solicitada mediante una conexión SSH a la OLT que realiza la solicitud. Posteriormente, guarda la consulta en la base de datos para que, la próxima vez que se realice una similar en un periodo determinado, el sitio web utilice la consulta ya creada para mostrarla. Hecho con Flask y Python para el BackEnd, HTML, CSS y JS para el FrontEnd y MongoDB para la base de datos.",
    github: "https://github.com/MauroGuar/ONT-Info",
  },
  {
    titulo: "Juego 2D con Unity",
    fecha: "Noviembre 2023",
    materia: "Programacion",
    descripcion: "Juego 2D para movil hecho con Unity",
    github: "https://github.com/Santiagocapi/Proyecto-Unity",
  },
  {
    titulo: "Pagina de venta de Entradas",
    fecha: "Junio 2023",
    materia: "Proyecto Integrador",
    descripcion:
      "Sitio web de venta de entradas para eventos musicales, hecho con node para el BackEnd, EJS, CSS Y JS para el FrontEnd y MongoDB para la base de datos.",
    github: "https://github.com/Santiagocapi/Proyecto-Integrador",
  },
];

const contenedor = document.getElementById("project_list");

projects.forEach((projects) => {
  const card = document.createElement("div");
  card.className = "project_card";
  card.innerHTML = `
    <h3>${projects.titulo}</h3>
    <p class="project_meta">📅 ${projects.fecha} | 🧩 ${projects.materia}</p>
    <p class="project_description">${projects.descripcion}</p>
    <a class="project_github_link" href="${projects.github}" target="_blank">
      <img src="./static/img/GitHub.svg.png" alt="GitHub Repo" />
    </a>
  `;
  contenedor.appendChild(card);
});
