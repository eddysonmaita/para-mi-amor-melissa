// TEXTO ANIMADO
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

// ELEMENTOS
const si = document.getElementById("si");
const no = document.getElementById("no");
const sobre = document.getElementById("sobre");

// BOTÓN SÍ (CINEMÁTICO)
si.addEventListener("click", () => {

    document.body.style.transition = "2s";
    document.body.style.background = "black";

    setTimeout(() => {
        sobre.classList.remove("hidden");
        lanzarCorazones();
    }, 1500);

    // Oculta botones
    document.querySelector(".botones").style.display = "none";
});

// BOTÓN NO (SE ESCAPA)
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
    }, 200);
}
