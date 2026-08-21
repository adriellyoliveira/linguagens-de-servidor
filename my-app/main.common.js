// npm run ... => se não criar um script chamado start, é preciso colocar o npm run.
// dev dependence => é a dependencia do desenvolvimento
//dependence => é a dependecia do projeto

// D maiusculo significa que é a dependencia do dev e chalk é a biblioteca que deixa o terminal bonito.

//NUNCA commitar o node_modules no github

const read = require("readline-sync")
const chalk = require("chalk")

let nome = read.question("Digite o seu nome: ")
let sobrenome = read.question("Digite seu sobrenome: ")

console.log(chalk.blue.bgWhite(nome));
console.log(chalk.red.bgWhite(sobrenome));
console.log(`Olá, ${nome} ${sobrenome}`); // ideal para esse caso.



