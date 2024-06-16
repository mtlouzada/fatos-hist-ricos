import turingQuestions from "./data/data.js";

const userName = require('readline-sync');

console.log("\n------------------WELCOME TO------------------\n");

console.log("TURING CHALLENGER")

console.log("\nBem-vindo Jogador(a)!");

let nome = userName.question("Informe seu nome: ");



console.log(turingQuestions);
console.log(nome);