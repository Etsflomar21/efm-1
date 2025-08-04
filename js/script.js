const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const rosesContainer = document.getElementById("roses-container");
const lightsContainer = document.getElementById("lights-container");
const message = document.getElementById("message");
const questionContainer = document.getElementById("question-container");

// 🌹 Fondo de rosas cayendo
function createRose() {
  const rose = document.createElement("div");
  rose.classList.add("rose");
  rose.textContent = "🌹";
  rose.style.left = Math.random() * window.innerWidth + "px";
  rose.style.animationDuration = (Math.random() * 2 + 2) + "s";
  rose.style.fontSize = (Math.random() * 40 + 40) + "px";
  rosesContainer.appendChild(rose);

  setTimeout(() => rose.remove(), 6000);
}
setInterval(createRose, 500);

// ❌ Botón "No" se desactiva al pasar el mouse
noBtn.addEventListener("mouseover", () => {
  noBtn.disabled = true;
  noBtn.textContent = "😜 No puedes!";
});
noBtn.addEventListener("mouseleave", () => {
  noBtn.disabled = false;
  noBtn.textContent = "No";
});

// ✅ Botón "Sí"
yesBtn.addEventListener("click", () => {
  alert("¡Quieres ser mi novia! 😊");

  // Ocultar la pregunta y los botones
  questionContainer.style.display = "none";

  // Mostrar luces de felicidad
  for (let i = 0; i < 100; i++) {
    const light = document.createElement("div");
    light.classList.add("light");
    light.style.left = Math.random() * window.innerWidth + "px";
    light.style.top = Math.random() * window.innerHeight + "px";
    light.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    lightsContainer.appendChild(light);
    setTimeout(() => light.remove(), 2000);
  }

  // Mostrar mensaje especial
  message.classList.remove("hidden");
});
