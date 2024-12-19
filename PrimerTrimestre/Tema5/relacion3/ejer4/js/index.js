window.onload = () => {
    document.getElementById("btn").addEventListener("click", () => {
        listaCompra();
    });

    document.getElementById("hola").addEventListener('keypress', e => {
        if (e.code === "Enter") {
            listaCompra();
        }
    });

}

function listaCompra() {
    contenidoInput = document.getElementById("hola").value;
    document.getElementById("hola").value = "";


    let nuevaEntradaLista = document.createElement("li");
    nuevaEntradaLista.innerHTML = contenidoInput;
    nuevaEntradaLista.addEventListener("click", (e) => { 
        e.target.parentElement.removeChild(e.target); 
    });

    document.getElementById("lista").appendChild(nuevaEntradaLista);
}; 

function almacenarLista(){
    
}

limpiar.addEventListener('click', function() {
    lista.innerHTML = ''; 
});
