import entradaDados from 'readline-sync';

const exibirPerguntas = (pergunta, index) => {
    console.log(`\n${index + 1}; ${pergunta.pergunta}`);
    const respostaUsuario = entradaDados.question('Digite a resposta (ano): '); 
    return respostaUsuario.trim();
}

export default exibirPerguntas;