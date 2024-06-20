import exibirPerguntas from "./exibirPergunta";

    const validarResposta = (respostaDoUsuario, pergunta) => {
        return respostaDoUsuario === pergunta.resposta;
    }

    export default validarResposta;