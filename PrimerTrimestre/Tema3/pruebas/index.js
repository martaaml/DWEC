/**function imprimeEnConsola(error) {
    console.log(error);
}

function orden(letraA, letraB) {
    if (letraA > letraB) {
        return 1;
    } else if (letraB < letraA) {
        return -1;
    } else {
        return 0;

    }
}
//
function multiply(a, b = 1) {
    return
}

//RECURSIVIDAD
function bucleInfinito(n) {//siempre necesita un parametro

    //compruebo si estoy en el caso base
    if (n > 0) {
        bucleInfinito(n - 1);
    }
    console.log("Acaba la funcion");

}
bucleInfinito(4);

//FACTORIAL JS
function factorial(n){
if(n==1){
    return 1
}else{
    return n*factorial(n-1);
}
}
console.log(factorial(4));


//
let nombres=["Rodrigo", "Marta","Paco" ];
nombres.sort((a,b)=>{
    if(a<b){
        return -10;
    }else if(a>b){
        return 27;
    }
        else{
            return 0;
        }
    });

    //
    let numeros=[10,2,3,543,2,1,34];
    console.log(numeros.sort((num1,num2)=>{
        if(num1<num2){
            return 1;
        }else{

        }
    }))

    //ORDENA LOS NUMEROS
    let numeritos=[10,2,3,543,2,1,34];
    console.log(numeros.sort((num1,num2)=>num1-num2));

    // ORIENTACION A OBJETOS
    //declaracion
    class Rectangle{
        constructor(height,width){
            this.height=height;
            this.width=width;
        }
        muestraInfo(){
            console.log("Este rectangulo tiene de alto"+this.height);

        }
        //GETTER
        get area(){
            return this.calcArea();
        }
        //METODO
        calcArea(){
            return this.height*this.width;
        }
    }
    ay=new Rectangle(1,1);

    // para privado se pone el #*/



// function arrow

let casos = ["pepe", "juan", "ana", "Hola"]
let hola = (saludo) => {
    return saludo == "hola";
}
document.write(hola("hola"));
let casosFiltrados = casos.filter((s) => s == "hola");
console.log(casosFiltrados);

// .map
casos.map((l) => {
    document.write("<p>" + l.toUpperCase() + "</p>");
})

let numeros = [1, 4, 6, 7, 8, 1290]

let numerosDobles = numeros.map((r) => r * 2);
console.log(numerosDobles);

numerosDobles.map((a) => {
    document.write("<p>" + a + "</p>")
}
);

let numerosDivididos = numerosDobles.map((t)=> t / 2);
console.log(numerosDivididos);

numerosDivididos.map((p)=>
document.write("<br>"+p)
);

// reduce: convierte el array en un valor

let num2=[1, 4, 6, 7];
let suma=0;
let resultado = num2.reduce((sum,valor) => 
  sum+valor,suma
)
document.write("<br>"+resultado);


let letras=["h","o","l","a"];
let valorInicial="";
let palabras = letras.reduce((orden, val)=>
    orden+val, valorInicial
);
document.write("<br>"+palabras);


let desorden=[19, 29, 1, 9 , 2, 5];
desorden.sort(orden)
console.log(desorden);

casos.sort(ordenarPalabritas);
console.log(casos);