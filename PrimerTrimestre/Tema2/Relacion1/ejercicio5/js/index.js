function fechass(){
    let relojito = new Date();
    hora.innerHTML=`${relojito.getHours()} : ${relojito.getMinutes()} : ${relojito.getSeconds()}`
    fecha.innerHTML=`${relojito.getDate()}/${relojito.getMonth()+1}/${relojito.getFullYear()}`;
    setTimeout(fechass,1000);

}

let hora= document.getElementById("hora");
let fecha= document.getElementById("fecha");
fechass()