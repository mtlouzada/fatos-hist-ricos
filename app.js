import arrayPerguntas from "./data/data.js";
import selecionaPerguntasAleatorias from "./service/arrayAleatorio.js";
import exibirPerguntas from "./service/exibirPergunta.js";
import validarResposta from "./service/validarResposta.js";
import entradaDados from "readline-sync";

    const startQuiz = () => {
        console.log("\n------------------WELCOME TO------------------\n");
        console.log("TURING CHALLENGER");

        const nomeJogador = entradaDados.question('Digite o seu nome: ');

        console.log( nomeJogador + "\n você está no Turing Challenger! Serão selecionas 10 questões aleatórias para ver se você manja mesmo da vida do pai da computação. PRESS ENTER to start...");

        let pontuacaoFinal = 0;

        const perguntasSelecionadas = selecionaPerguntasAleatorias(arrayPerguntas);

        perguntasSelecionadas.forEach((pergunta, index) => {
            const respostaUsuario = exibirPerguntas(pergunta, index);
            const resultadoValidacao = validarResposta(respostaUsuario, pergunta);

            if (resultadoValidacao) {
                console.log("BOA! Resposta correta!");
            } else {
                console.log("Que pena, você errou!");
            }
        });

        exibirResultado(pontuacaoFinal, nomeJogador);
    }
startQuiz();