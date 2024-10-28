let mes=prompt("Dime un mes, en minuscula")
// .toLowerCase() para hacerlo en minuscula
switch(mes){
    case "enero":
    document.write("Este mes tiene 31 días")
    break;

    case "febrero":
        document.write("Si el año es bisiesto tendrá 29 dias, sino tendrá 28");
        break;

    case "marzo":
        document.write("Este mes tendrá 31 dias");
        break;
    case "abril":
        document.write("Este mes tendrá 30 dias");
        break;
    case "mayo":
        document.write("Este mes tendrá 31 dias");
        break;
    case "junio":
        document.write("Este mes tendrá 30 dias");
        break;
    case "julio":
        document.write("Este mes tendrá 31 dias");
        break;
    case "agosto":
        document.write("Este mes tendrá 31 dias");
        break;
    case "septiembre":
        document.write("Este mes tendra 30 dias");
        break;
    case "octubre":
        document.write("Este mes tendrá 31 dias");
        break;
    case "noviembre":
        document.write("Este mes tendrá 30 dias");
        break;
    case "diciembre":
        document.write("Este mes tendrá 31 dias");

        default:
            document.write("ERROR");
            break;
}