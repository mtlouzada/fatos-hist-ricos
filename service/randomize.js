import arrayPerguntas from "../data/data.js";

const selecionaPerguntasAleatorias = (questoes) => {
    const perguntasAleatorias = arrayPerguntas.sort(() => Math.random() - 0.5);
    return perguntasAleatorias.splice(0, 10);
}

export default selecionaPerguntasAleatorias;