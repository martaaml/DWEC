let valor=3;
if(valor > 0){
    document.write("Es mayor a 0");
}
    else{
        document.write("Es menor a 0");

}
    // VALORES QUE ASOCIA COMO FALSOS

    let resultadoOperacion = null;
    if(resultadoOperacion){
        document.write("Es verdad");
    }
    else{
        document.write("Es falso");
    }

    
    let resultadoOperaciones = promt("");
    if(resultadoOperaciones){
        document.write("Es verdad");
    }
    else{
        document.write("Es falso");
    }

    // = ASIGNA EL VALOR
    // == ES COMPARACION
    // === MISMA COMPARACION DEL MISMO TIPO Y CONTENIDO(MAS RESTRICTIVO)
    // != ES DISTINTO
    // !== ESTRICTO NO IGUAL
    // % CALCULA EL RESTO
    // **  EXPONENCIAL
    // && AND
    // || OR
    

    let nombre = prompt("Dime tu nombre");
    document.write(nombre[0]);

    document.write(nombre.length[-1]-1)//

    for(let i=0;i<nombre.length;i++){
        document.write("<p>+nombre[i]+</p>")
    }


    //FOR OF
    const arr=[3,5,7];

    for(const i of arr){
        document.write(i+"<br>")
    } //es importate

    //
    let persona={};
    persona.nombre="Jesus";
    persona.apellido="Jimenez";
    for(let miembro in persona)
        document.write(miembro); 


3