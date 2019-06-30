function mostrarOpiniao()
{
  let respostaEl= document.querySelector('#resposta');
  let opiniao = respostaEl.value;

  if(opiniao == 'sim') {
    alert('Você está totalmente certx. :)');
  }
  else {
    alert('Lamento, mas você esta erradx. (^_^)')
  }
}

let botaoEl = document.querySelector('#botao');

botaoEl.addEventListener('click', mostrarOpiniao);
