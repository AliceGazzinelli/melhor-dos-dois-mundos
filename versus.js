function mostrarVersus(e)
{
  let imagemEl = e.currentTarget;
  let versusEl = document.querySelector('.Disney-vs-Nick');

  let mostrou = versusEl.classList.toggle('click');
}

let imagemEl = document.querySelector('#vs');

imagemEl.addEventListener('click', mostrarVersus);
