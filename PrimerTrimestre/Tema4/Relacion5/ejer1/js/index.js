
function validarMayuscula(cadena) {
//Validar que tiene minimo una mayuscula
let expresionRegular = new RegExp("[A-Z]+");
return expresionRegular.test(cadena);
}

function validarCaracteresEspeciales(cadena){
let expresionRegular = new RegExp("[!@#$%^&]");
return expresionRegular.test(cadena);
}

function validarCorreo(cadena){
    let expresionRegular = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$")
    return expresionRegular.test(cadena);

}

function validarLonguitud(cadena){
    let expresionRegular = new RegExp("^.{8,}$")
    return expresionRegular.test(cadena);

}

function validarNumero(cadena){
    let expresionRegular = new RegExp("[0-9]+")
    return expresionRegular.test(cadena);

}