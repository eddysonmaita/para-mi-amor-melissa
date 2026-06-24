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
const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");
const sorpresa = document.getElementById("sorpresa");

botonSi.addEventListener("click", () => {
    sorpresa.classList.remove("hidden");
});

botonNo.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";
});

// corazones
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
