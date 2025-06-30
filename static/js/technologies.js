const technologies = [
    { name: "HTML", image: "../static/img/html.png" },
    { name: "CSS", image: "../static/img/css.png" },
    { name: "JavaScript", image: "../static/img/js.png" },
    { name: "React", image: "../static/img/React.svg.png" },
    { name: "Node", image: "../static/img/nodejs.png" },
    { name: "Vue", image: "../static/img/Vue.js_Logo_2.svg.png" },
    { name: "Java", image: "../static/img/Java.svg.png" },
    { name: "Python", image: "../static/img/Python.svg.png" },
    { name: "Django", image: "../static/img/django.png" },
    { name: "Flask", image: "../static/img/Flask_logo.svg.png" },
    { name: "MongoDB", image: "../static/img/mongo.png" },
    { name: "MySQL", image: "../static/img/mysql.png" },
    { name: "GO", image: "../static/img/GO.png" },
    { name: "Unity", image: "/static/img/Unity_2021.svg.png"},
    { name: "Git", image: "/static/img/git.png"}
];

const techContainer = document.getElementById("techContainer");

technologies.forEach(tech => {
    const div = document.createElement("div");
    div.className = "technology_card";
    div.innerHTML = `
        <img src="${tech.image}" alt="${tech.name}" />
        <h3>${tech.name}</h3>
    `;
    techContainer.appendChild(div);
});
