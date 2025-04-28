//Ejercicio 1

console.log("Ejercicio 1:")

const nombre = 'Fabián';
var edad = 20;
var tengoMascota = 'True'

console.log("Su nombre es:" + nombre)
console.log("Usted tiene " + edad + " años")

if(tengoMascota === 'True')
{
    console.log("Usted tiene mascotas")
}else{
    console.log("Usted no tiene mascotas")
}



//Ejercicio 2

console.log("\n\nEjercicio 2:")


var valor1 = 20;
var valor2 = 4;
var result;

result = valor1 + valor2;
console.log("El resultado de la suma es: " + result)
result = valor1 - valor2;
console.log("El resultado de la resta es: " + result)
result = valor1 * valor2;
console.log("El resultado de la multiplicacion es: " + result)
result = valor1 / valor2;
console.log("El resultado de la division es: " + result)


//Ejercicio 3

console.log("\n\nEjercicio 3:")

function saludo(nombre2)
{
    console.log("Hola " + nombre2)
}

const nombre2 = prompt("Cual es su nombre? ")
saludo(nombre2)

//Ejercicio 4

console.log("\n\nEjercicio 4:")

var frutas = ["Manzana", "Pera", "Naranja", "Frutilla", "Mora"]

for (var i=0; i<frutas.length; i++)
{
    console.log(frutas[i])
}

//Ejercicio 5

console.log("\n\nEjercicio 5:")

const numeros = [12, 3, 4]

const multpor2 = numeros.map(numero => numero * 2)

console.log(numeros)

console.log(multpor2)


//Ejercicio 6

console.log("\n\nEjercicio 6:")

const datos = [{
    "nombre3": "Fabian",
    "edad": "20"
},
{
    "nombre3": "Francisco",
    "edad": "19"
}
];

datos.forEach(function(dato){
    console.log("Nombre: " + dato.nombre3)
})

//Ejercicio 7

console.log("\n\nEjercicio 7:")

const numeros2 = [2, 3, 4, 5, 7, 9, 10]

const mayoresqueCinco = numeros2.filter(function(num){
    return num > 5
})

console.log (mayoresqueCinco)


//Ejercicio 8

console.log("\n\nEjercicio 8:")

const numeros3 = [2, 3, 4, 5, 7, 9, 10]

const resultado = numeros3.reduce(function(suma1, suma2){
    return suma1 + suma2;
}, 0);

console.log(resultado)


//Ejercicio 9

console.log("\n\nEjercicio 9:")

function resolverdepoisde2Seconds(x){
     return new Promise((resolver) =>{
        setTimeout(() => {
            resolver(x);
        }, 2000);
     });
}

async function e9() {
    var x = await resolverdepoisde2Seconds("Hola mundo");
    console.log(x);
}

e9();