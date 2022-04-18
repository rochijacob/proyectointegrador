//PRACTICA PROG 2
var subject = " math ";
var year = 3;
const favoriteSites = [
    "facebook",
    "netflix",
    "instagram"
];
favoriteSites.pop()
console.log(favoriteSites)




//PRACTICA: MAP, FILTER, DECONSTRUCTION
//1
let numeros = [1, 5, 7, 12, 89, 23];
numerosDoble = numeros.map(function(num){
    return num * 2;
})
console.log(numerosDoble)

//2
numToString = numeros.map(function(num){
    return num.toString()
})
console.log(numToString)

//3
let nombres = ['franco', 'martina', 'leonardo', 'jose', 'lucia', 'josefina'];
nomMayusc = nombres.map(function(nom){
    return nom.toUpperCase()
})
console.log(nomMayusc)

//4
let personas = [
    {
    nombre: "Angelina Jolie",
    edad: 80
    },
    {
    nombre: "Eric Jones",
    edad: 2
    },
    {
    nombre: "Paris Hilton",
    edad: 5
    },
    {
    nombre: "Kayne West",
    edad: 16
    },
    {
    nombre: "Bob Ziroll",
    edad: 100
    }
    ];

let {nombre} = personas;
console.log(nombre)