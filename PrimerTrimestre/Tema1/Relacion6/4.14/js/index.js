var ncolumna=parseInt(prompt("Numero de columnas"));
var altitud=parseInt(prompt("Alto de columnas"));
var anchura=parseInt(prompt("Dime la anchura"));

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200');
    document.write('<tr bgcolor="white" height="$(alto)"></tr>')
    while(ncolumna!=0){
        document.write('td width="$(ancho)">&nbsp;</td>')
    }
document.write("</tr>");
document.write("</table>");