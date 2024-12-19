const palabras = ["javascript", "programacion", "diseño", "daw", "juegecito"];
const palabraCorrecta = palabras[Math.floor(Math.random() * palabras.length)];
const intentosMaximos = 6;

let palabraAdivinada = Array(palabraCorrecta.length).fill("_");
let letrasUsadas = [];
let intentosRestantes = intentosMaximos;


function actualizarPantalla() {
    document.getElementById("palabra").innerText = palabraAdivinada.join(" ");
}


function verificarEstadoJuego() {
    const mensaje = document.getElementById("mensaje");

    if (palabraAdivinada.join("") === palabraCorrecta) {
        mensaje.innerText = "Exacto, esa era la palabra";
        desactivarEntrada();
    } else if (intentosRestantes === 0) {
        mensaje.innerText = `Noo, no has acertado, la palabra era: ${palabraCorrecta}`;
        desactivarEntrada();
    }
}


function desactivarEntrada() {
    document.getElementById("letra").disabled = true;
    document.querySelector("button").disabled = true;
}


function adivinarLetra() {
    const input = document.getElementById("letra");
    const letra = input.value.toLowerCase();


    if (!letra || letrasUsadas.includes(letra)) {
        input.value = "";
        return;
    }

    letrasUsadas.push(letra);
    document.getElementById("letras").innerText = letrasUsadas.join(", ");
    input.value = "";

 
    if (palabraCorrecta.includes(letra)) {
        for (let i = 0; i < palabraCorrecta.length; i++) {
            if (palabraCorrecta[i] === letra) {
                palabraAdivinada[i] = letra;
            }
        }
    }

    actualizarPantalla();
    verificarEstadoJuego();
}


actualizarPantalla();


