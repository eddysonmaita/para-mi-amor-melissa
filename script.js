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

// BOTONES
const si = document.getElementById("si");
const no = document.getElementById("no");
const sobre = document.getElementById("sobre");

// BOTON SI
si.addEventListener("click", () => {

    // efecto cinematico
    document.body.style.transition = "1s";
    document.body.style.background = "black";

    setTimeout(() => {
        sobre.classList.remove("hidden");
        lanzarCorazones();
    }, 800);
});

// BOTON NO (se escapa)
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
