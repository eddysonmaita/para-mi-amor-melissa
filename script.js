// TEXTO QUE SE ESCRIBE
const texto = "¿Sabes lo mucho que te amo Melissa? 💖";
let i = 0;

function escribir() {
    if (i < texto.length) {
        document.getElementById("typing").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, 50);
    }
}
escribir();

// BOTONES
const si = document.getElementById("si");
const no = document.getElementById("no");
const sobre = document.getElementById("sobre");

const foto = document.getElementById("foto");

si.addEventListener("click", () => {
    sobre.classList.remove("hidden");

    setTimeout(() => {
        foto.classList.remove("hidden");
        foto.classList.add("mostrar");
    }, 1000); // aparece después de 1 segundo

    lanzarCorazones();
});
no.addEventListener("mouseover", () => {
    no.style.left = Math.random() * window.innerWidth + "px";
    no.style.top = Math.random() * window.innerHeight + "px";
});

// CORAZONES
function lanzarCorazones() {
    setInterval(() => {
        const c = document.createElement("div");
        c.innerHTML = "❤️";
        c.classList.add("corazon");

        c.style.left = Math.random() * window.innerWidth + "px";
        c.style.top = window.innerHeight + "px";

        document.body.appendChild(c);

        setTimeout(() => c.remove(), 5000);
    }, 500);
}
