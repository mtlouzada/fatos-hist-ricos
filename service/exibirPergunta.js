import readlineSync from 'readline-sync';

const exibirPerguntas = (pergunta, index) => {
    console.log('\n${index + 1}: ${pergunta.pergunta}');
    const respostaUsuario = readlineSync.question('Digite a resposta (ano): '); 
    return respostaUsuario.trim();
}

export default exibirPerguntas;