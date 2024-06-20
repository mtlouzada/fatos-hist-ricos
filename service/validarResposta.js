import exibirPerguntas from "../service/exibirPergunta.js";

    const validarResposta = (respostaDoUsuario, pergunta) => {
        return respostaDoUsuario === pergunta.resposta;
    }

    export default validarResposta;