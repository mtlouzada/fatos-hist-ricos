import arrayPerguntas from "./data/data.js";
import selecionaPerguntasAleatorias from "./service/arrayAleatorio.js";
import exibirPerguntas from "./service/exibirPergunta.js";
import validarResposta from "./service/validarResposta.js";
import entradaDados from "readline-sync";
import exibirResultado from "./service/exibirResultado.js";

    const startQuiz = () => {
        console.log("\n------------------WELCOME TO------------------\n");
        console.log("TURING CHALLENGER");

        const nomeJogador = entradaDados.question('Digite o seu nome: ');

        console.log( "\n Bem-vindo(a) ao Turing Challenger! Responda as questões a seguir");

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

        console.log(exibirResultado(pontuacaoFinal, nomeJogador));
    }
startQuiz();