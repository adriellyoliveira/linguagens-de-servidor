// criar um arquivo areaRetangulo.js, solicitar o valor da altura e largura e entregar para ele a area e perimetro

import read from "readline-sync"

let altura = Number(read.question("Digite a altura: "))
let largura = Number(read.question("Digite a largura: "))

let area = altura * largura
let perimetro = (altura * 2) + (perimetro * 2)

console.log(typeof altura);
console.log(typeof largura);

console.log(`A área do seu retangulo é ${area} e a largura ${perimetro}`);
