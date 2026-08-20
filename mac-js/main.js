import read from "readline-sync"
import chalk from "chalk"

//descobrir o tipo da variavel, é preciso criar um console log e por o typeof e o nome da variavel

let nome = read.question("Digite seu nome: ");
let idade = parseInt(read.question("Digite sua idade: "));
let altura = parseFloat(read.question("Digite sua altura: "));
let peso = parseFloat(read.question("Digite seu peso: "));

let imc = peso / (altura ** 2);

if (imc <= 18.5) {
    console.log("Magreza");
} else if (imc <= 24.5) {
    console.log("Ideal");
} else if (imc <= 29.9) {
    console.log("Sobrepeso");
} else if (imc <= 34.9) {
    console.log("Obesidade moderada");
} else if (imc <= 39.9) {
    console.log("Obesidade severa");
}

//console.log(typeof idade);
//console.log(typeof peso);
//console.log(typeof altura);

console.log(imc.toFixed(2), "aqui");

console.log(`Olá, ${nome}! Vejo que você tem ${idade} anos. Você tem a altura de ${altura}m e o seu peso é ${peso}kg`);
