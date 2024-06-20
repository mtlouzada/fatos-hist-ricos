import entradaDados from 'readline-sync';
import validarResposta from './validarResposta';


const exibirResultado = (pontuacaoFinal, nomeJogador) => {
    let mensagem = '';

    if (pontuacaoFinal <=3){
        mensagem = "Se Liga! Esse é o pai da computação, estude mais!";
    } else if (pontuacaoFinal <= 6){
        mensagem = "Ta na média! Bom trabalho, mas pode melhorar..";
    } else if (pontuacaoFinal <= 8){
        mensagem = "Tirou onda! continue assim, está mandando muito bem.";
    } else {
        mensagem = "Você é diferenciado! Parabéns!!";
    }

    console.log('\nJogador(a): ${nomeJogador}');
    console.log('\nPontuação final: ${pontuacaoFinal} acertos.');
    console.log(mensagem);
}

export default exibirResultado;
