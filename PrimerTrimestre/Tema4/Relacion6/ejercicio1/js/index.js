function darAltaCookie(){
    document.cookie = "colorFondo=red";
    document.body.style.backgroundColor="red";
}

window.onload = ()=>{
    if (document.cookie)
    {
        color = getCookie("colorFondo");
     //   alert(color);
        document.body.style.backgroundColor=color;
    }
       
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
