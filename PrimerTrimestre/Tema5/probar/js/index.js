window.onload=()=>{
    document.getElementById("btn").addEventListener("click",()=>{
       // document.getElementById("titulo").innerHTML="Cambio por DOM";

        contenidoInput=document.getElementById("input").value;
        document.getElementById("input").value=""
       // document.getElementById("input").innerHTML=contenidoInput;

        //CCAMBIAR IMAGEN
       /* let nuevaUrl="https://okdiario.com/look/img/2021/10/07/gemeliers-destacada.jpg";
        document.getElementsByTagName("img")[0].src=nuevaUrl;

        //CREAR IMAHEN
        let nuevaUrl="https://www.hola.com/horizon/landscape/04abb38ddf72-gemeliers-ig-t.jpg";
        let nuevaImagen = document.createElement("img");
        nuevaImagen.src=nuevaUrl;*/
        

        //Crear entradas de la lista
        let nuevaEntradaLista=document.createElement("li");
        nuevaEntradaLista.innerHTML=contenidoInput;
        nuevaEntradaLista.addEventListener("click",(e)=>{
            e.target.parentElement.removeChild(e.target);
        })
        document.getElementById("lista").appendChild(nuevaEntradaLista);

        //document.getElementById("lista").childNodes;

        /*PARA BORRAR
        nodoBorrar = document.getElementById("lista").childNodes[1];
        document.getElementById("lista").removeChild(nodoBorrar);
        */
    })
}