var nVidas = 0;

window.onload = () => {
    inicializaColores();
    const nc = document.getElementById("ncbutton");
    nc.addEventListener("click", inicializaColores);
    const eb = document.getElementById("easybotton");
    eb.addEventListener("click", botonFacil);
    const hb = document.getElementById("hardbotton");
    hb.addEventListener("click", botonDificil);
}

// COMPRUEBA SI ACIERTO
function compruebaAcierto(e) {
    nVidas++;
    const colorBuscar = document.getElementById("colorBuscar");

    if (e.target.style.backgroundColor === colorBuscar.innerText) {
        console.log("Encontrado");
        inicializaColores(); 
    } else {
        console.log("Error");
        e.target.classList.add("fade-out");
    }
}


function meQuedanVidas() {
    if (nVidas < 3) {
        return true;
    } else {
        return false;
    }
}

function inicializaColores() {
    let guardaColor = Array.from(document.getElementsByClassName("color"));
    guardaColor.forEach(color => color.classList.remove("fade-out"));

    for (let i = 0; i < guardaColor.length; i++) {
        if (guardaColor[i].style.display != "none") {
            guardaColor[i].style.backgroundColor = generaColorAleatorio();
            guardaColor[i].addEventListener("click", compruebaAcierto);
        } else {
            guardaColor = guardaColor.filter((elemento) => elemento.style.display != "none" );
        }
    }
    let posiSolucion = Math.floor(Math.random() * guardaColor.length);
    document.getElementById("colorBuscar").innerText = guardaColor[posiSolucion].style.backgroundColor;
    nVidas = 0; 
}


function botonFacil() {
    let displayNone = document.getElementsByClassName("color");
    for (let i = 0; i < 3; i++) {
        displayNone[i].style.display = "none"
    }
    inicializaColores();
}

function botonDificil() {
    let displayBlock = document.getElementsByClassName("color");
    for (let i = 0; i < 3; i++) {
        displayBlock[i].style.display = "block"
    }
    inicializaColores();
}

function generaColorAleatorio() {
    var parteRoja = Math.floor(Math.random() * 255);
    var parteVerde = Math.floor(Math.random() * 255);
    var parteAzul = Math.floor(Math.random() * 255);
    return `rgb(${parteRoja}, ${parteVerde}, ${parteAzul})`;
}
