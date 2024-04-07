let listaNumerosSorteados = [];
let numeroMaxinoNaLista = 3;
let numeroSecreto = sortearNumero();
let tentativas = 1;


function textosDoJogo (tag, texto){
let campos = document.querySelector(tag);
campos.innerHTML = texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemIncial(){

  textosDoJogo('h1', 'Jogo do número secreto');
  textosDoJogo('p', 'Escolha um número entre 1 e 10');
  
}

mensagemIncial();

function verificarChute(){
  let chute = document.querySelector('input').value;
  let palavraTentativa = tentativas > 1 ? 'tentativas !' : 'tentativa !'; 

  if ( chute == numeroSecreto) {
   textosDoJogo('h1','Acertou !!!');
   textosDoJogo('p', `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`);
   document.getElementById('reiniciar').removeAttribute('disabled');
   limparJogo();
  }

  else {
  
  if (chute<numeroSecreto){
  textosDoJogo('h1','Errou');
  textosDoJogo('p','Número secreto é maior ');
  }
  else{
  textosDoJogo('h1', 'Errou');
  textosDoJogo('p','Número secreto é menor');
  }

  tentativas++;
  limparJogo();
}

}

function sortearNumero(){
  let numeroEscolhido =  parseInt(Math.random() * numeroMaxinoNaLista + 1);
  let quantidadeDeNumerosNaLista = listaNumerosSorteados.length;

  if (quantidadeDeNumerosNaLista == numeroMaxinoNaLista){
    listaNumerosSorteados = [];

  }

  if (listaNumerosSorteados.includes(numeroEscolhido)){
    return sortearNumero();
  } else {
    listaNumerosSorteados.push(numeroEscolhido)
    console.log(listaNumerosSorteados)
    return numeroEscolhido;
  }
 
}


function limparJogo(){

  chute = document.querySelector('input');
  chute.value = '';

}

function reiniciarJogo(){
  numeroSecreto = sortearNumero(); 
  limparJogo();
  mensagemIncial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
  tentativas = 1;
 

}



