const btn=document.getElementsByTagName("button");
btn[0].addEventListener("click",()=>console.log("has clickado el primer boton"));
btn[1].addEventListener("click",()=>console.log("has clickado el segundo boton"));
function saltaAlert(){
    document.body.style.backgroundColor="aquamarine";
}

btn[2].addEventListener("click",()=>document.body.style.backgroundColor="red");
btn[3].addEventListener("click",()=>document.body.style.backgroundColor="blue");

//PASAR EL RATON ENCIMA
btn[4].addEventListener("mouseover",()=>document.body.style.backgroundColor="aquamarine");
//CAMBIAR AL ORIGINAL
btn[4].addEventListener("mouseout",()=>document.body.style.backgroundColor="white");
//MANDA ALERTA
btn[1].addEventListener("click",()=>alert("has clickado el segundo boton"));
//BORRAR EL EVENTO
btn[1].addEventListener("click",()=>btn[0].removeEventListener("click",saltaAlert));