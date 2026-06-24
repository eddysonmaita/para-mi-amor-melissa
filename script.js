const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");
const mensaje = document.getElementById("mensaje");

// BOTÓN SÍ 💖
botonSi.addEventListener("click", () => {
    mensaje.innerHTML = "Melissa ❤️ Te amo con todo mi corazón 💖✨ Eres lo mejor que me ha pasado 🥹";
});

// BOTÓN NO 😆
botonNo.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";

    let tamaño = Math.random() * 15 + 10;
    botonNo.style.fontSize = tamaño + "px";
});

// CORAZONES FLOTANDO ❤️
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.top = window.innerHeight + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

setInterval(crearCorazon, 300);
