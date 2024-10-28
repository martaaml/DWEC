var num =prompt ("Dime un número");
var pistas=prompt("Dime un número para empezar a jugar");
var contador=1;

while (parseInt(num)!==parseInt(pistas)){
    if(parseInt(num)>parseInt(pistas)){
        pista = parseInt("Pista número: "+contador+". El número es más grande")
    }
    else if(parseInt(num)<parseInt(pistas)){
        pista = parseInt("Pista número: "+contador+". El número es más pequeño")
    }
    contador++;
}

document.write("<h1>¡Has ganado!<h1>")