window.onload=()=>{
    const raton=document.getElementsByTagName("mouse");
    raton[0].addEventListener("MouseEvent.clientX",()=>console.log(MouseEvent));
}