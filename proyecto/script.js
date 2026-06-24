const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");
const mensaje = document.getElementById("mensaje");

// Cuando dice "Sí"
botonSi.addEventListener("click", () => {
    mensaje.innerHTML = "Te amo más de lo que las palabras pueden explicar 💖✨ Eres lo mejor que me ha pasado, Melissa ❤️";
});

// Cuando intenta decir "No"
botonNo.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";

    let tamaño = Math.random() * 15 + 10;
    botonNo.style.fontSize = tamaño + "px";
});