const projects = [
  {
    title: "Facilitador de buscador",
    url: "../plantillas/Facilitador_con buscador/index.html",
  },
  {
    title: "Facilitador de buscador versión 2",
    url: "../plantillas/Facilitador_con buscador_FIXED/index.html",
  },
  {
    title: "Facilitador de buscador por columnas",
    url: "../plantillas/facilitador_con buscador_por_columnas/index.html",
  },
  {
    title: "Glosario por temas",
    url: "../plantillas/Glosario_por_temas/index.html",
  },
  {
    title: "Glosario simple",
    url: "../plantillas/Glosario_simple/index.html",
  },
];

const viewer = document.getElementById("viewer");
const viewerFrame = document.getElementById("viewerFrame");
const viewerTitle = document.getElementById("viewerTitle");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

function openViewer(index) {
  currentIndex = index;
  const project = projects[index];
  viewerTitle.textContent = project.title;
  viewerFrame.src = project.url;
  viewer.classList.add("active");
}

backBtn.addEventListener("click", () => {
  viewer.classList.remove("active");
  viewerFrame.src = "";
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  openViewer(currentIndex);
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    openViewer(parseInt(card.dataset.index, 10));
  });
});
