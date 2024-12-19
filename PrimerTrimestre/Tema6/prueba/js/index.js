window.onload=()=>{
document.getElementById("btn").addEventListener("click",peticionAjax);
}
function peticionAjax(){
    var xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            console.log(this.responseText);
            respuesta = JSON.parse(this.responseText);
            document.getElementById("titulo").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", usuarios.json,true);
    xhttp.send();
    }