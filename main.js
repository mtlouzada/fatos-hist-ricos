import arrayPerguntas from "./data/data.js";
import entradaDados from 'readline-sync';

const userName = require('readline-sync');

console.log("\n------------------WELCOME TO------------------\n");

console.log("TURING CHALLENGER")

console.log("\nBem-vindo Jogador(a)!");

let nome = userName.question("Informe seu nome: ");

console.log( nome + "\n você está no Turing Challenger! Serão selecionas 10 questões aleatórias para ver se você manja mesmo da vida do pai da computação. PRESS ENTER to start...");

getselectQuestions.forEach((Tquestion, index) => {
    console.log(`${index + 1}: $`);
});
