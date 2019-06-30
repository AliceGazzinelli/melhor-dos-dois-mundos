const comecarEl = document.getElementById("comecar");
const quizEl = document.getElementById("quiz");
const perguntaEl = document.getElementById("pergunta");
const pImgEl = document.getElementById("pImg");
const opcaoAEl = document.getElementById("A");
const opcaoBEl = document.getElementById("B");
const opcaoCEl = document.getElementById("C");
const opcaoDEl = document.getElementById("D");
const contadorEl = document.getElementById("contador");
const indicadorTempoEl = document.getElementById("indicadorTempo");
const progressoEl = document.getElementById("progresso");
const notaDivEl = document.getElementById("containerNota");

let perguntas = [
    {
        pergunta : "De quem é esse quarto?",
        imgSrc : "quarto.jpg",
        opcaoA : "Gabriela",
        opcaoB : "Tori",
        opcaoC : "Hannah Montana",
        opcaoD : "Carly",
        certa : "D"
    },{
        pergunta : "Qual é a primeira música que Troy e Gabriela cantam juntos?",
        imgSrc : "primeira-musica.jpg",
        opcaoA : "Breaking Free",
        opcaoB : "What I've Been Looking For",
        opcaoC : "Start of Something New",
        opcaoD : "Bop to the Top",
        certa : "C"
    },{
        pergunta : "De onde é esse cenário?",
        imgSrc : "cenario.jpg",
        opcaoA : "Boa Sorte, Charlie!",
        opcaoB : "Drake & Josh",
        opcaoC : "As Visões de Raven",
        opcaoD : "Kenan & Kel",
        certa : "A"
    },{
        pergunta : "A figurinha tão procurada em Swindle era de:",
        imgSrc : "swindle.jpg",
        opcaoA : "Dragon Ball",
        opcaoB : "Basebol",
        opcaoC : "Naruto",
        opcaoD : "Basquete",
        certa : "B"
    },{
        pergunta : "Qual desssas celebridades fez uma participação especial em WWP?",
        imgSrc : "convidado.jpg",
        opcaoA : "Stan Lee",
        opcaoB : "Leonardo DiCaprio",
        opcaoC : "Meryl Streep",
        opcaoD : "Shakira",
        certa : "D"
    },{
        pergunta : "A música 'Not a love song' é de que série?",
        imgSrc : "song.jpg",
        opcaoA : "High School Musical",
        opcaoB : "Austin & Ally",
        opcaoC : "Big Time Rush",
        opcaoD : "Brilhante Victória",
        certa : "B"
    },{
        pergunta : "De que série/filme é essa chave?",
        imgSrc : "chave.jpg",
        opcaoA : "High School Musical",
        opcaoB : "Brilhante Victória",
        opcaoC : "Hannah Montana",
        opcaoD : "Zoey 101",
        certa : "D"
    },{
        pergunta : "Qual dessas cantoras já apresentou em Brilhante Victória??",
        imgSrc : "cantora.jpg",
        opcaoA : "Ke$ha",
        opcaoB : "Britney Spears",
        opcaoC : "Kelly Clarkson",
        opcaoD : "Katy Perry",
        certa : "A"
    },{
        pergunta : "Miley é convidada para participar de um filme com qual ator?",
        imgSrc : "ator.jpg",
        opcaoA : "The Rock",
        opcaoB : "Johnny Depp",
        opcaoC : "Tom Cruise",
        opcaoD : "Liam Hemsworth",
        certa : "C"
    },{
        pergunta : "Quem  celebridade Josh atropelou?",
        imgSrc : "atropelou.jpg",
        opcaoA : "Ellen",
        opcaoB : "Barack Obama",
        opcaoC : "Oprah",
        opcaoD : "Rainha Elizabeth",
        certa : "C"
    },{
        pergunta : "De que série é o hotel Palm Woods?",
        imgSrc : "hotel.png",
        opcaoA : "Gêmeos à Bordo",
        opcaoB : "Zoey 101",
        opcaoC : "Gêmeos em Ação",
        opcaoD : "Big Time Rush",
        certa : "D"
    },{
        pergunta : "Qual é o nome artístico de Cyrus em Let it Shine?",
        imgSrc : "rap.jpg",
        opcaoA : "Truth",
        opcaoB : "Limon",
        opcaoC : "Lion",
        opcaoD : "Liar",
        certa : "A"
    },{
        pergunta : "Em Starstruck, qual é música que Chris canta tocando violão?",
        imgSrc : "violao.jpg",
        opcaoA : "Starstruck",
        opcaoB : "Hero",
        opcaoC : "New Boyfriend",
        opcaoD : "Guitar",
        certa : "B"
    },{
        pergunta : "De quem é esse armário em Brilhante Victória?",
        imgSrc : "armario.jpg",
        opcaoA : "Robin",
        opcaoB : "Tori",
        opcaoC : "Jade",
        opcaoD : "Beck",
        certa : "D"
    },{
        pergunta : "De que série é esse personagem?",
        imgSrc : "personagem.jpg",
        opcaoA : "Hannah Montana",
        opcaoB : "iCarly",
        opcaoC : "True Jackson",
        opcaoD : "Big Time Rush",
        certa : "C"
    },{
        pergunta : "Quem canta a música de introdução de No Ritmo?",
        imgSrc : "abertura.jpg",
        opcaoA : "Zendaya",
        opcaoB : "Selena Gomez",
        opcaoC : "Bella Thorne",
        opcaoD : "Britney Spears",
        certa : "B"
    }
];

const ultimaPergunta = perguntas.length - 1;
let perguntaAtual = 0;
let cont = 0;
const perguntaTempo = 10; // 10s
const larguraIndicador = 150; // 150px
const unidadeIndicador = larguraIndicador / perguntaTempo;
let CRONOMETRO;
let nota = 0;

function renderizarPergunta(){
    let p = perguntas[perguntaAtual];

    perguntaEl.innerHTML = "<p>"+ p.pergunta +"</p>";
    pImgEl.innerHTML = "<img src="+ p.imgSrc +">";
    opcaoAEl.innerHTML = p.opcaoA;
    opcaoBEl.innerHTML = p.opcaoB;
    opcaoCEl.innerHTML = p.opcaoC;
    opcaoDEl.innerHTML = p.opcaoD;
}

comecar.addEventListener("click",comecarQuiz);

function comecarQuiz(){
    comecar.style.display = "none";
    renderizarPergunta();
    quiz.style.display = "block";
    renderizarProgresso();
    renderizarContador();
    CRONOMETRO = setInterval(renderizarContador,1000); // 1000ms = 1s
}

function renderizarProgresso(){
    for(let pIndex = 0; pIndex <= ultimaPergunta; pIndex++){
        progressoEl.innerHTML += "<div class='prog' id="+ pIndex +"></div>";
    }
}

function renderizarContador(){
    if(cont <= perguntaTempo){
        contadorEl.innerHTML = cont;
        indicadorTempoEl.style.width = cont * unidadeIndicador + "px";
        cont++
    }else{
        cont = 0;
        respostaErrada();
        if(perguntaAtual < ultimaPergunta){
            perguntaAtual++;
            renderizarPergunta();
        }else{
            clearInterval(CRONOMETRO);
            renderizarNota();
        }
    }
}

function conferirResposta(resposta){
    if( resposta == perguntas[perguntaAtual].certa){
        nota++;
        respostaCerta();
    }else{
        respostaErrada();
    }
    cont = 0;
    if(perguntaAtual < ultimaPergunta){
        perguntaAtual++;
        renderizarPergunta();
    }else{
        clearInterval(CRONOMETRO);
        renderizarNota();
    }
}

function respostaCerta(){
    document.getElementById(perguntaAtual).style.backgroundColor = "#0f0";
}

function respostaErrada(){
    document.getElementById(perguntaAtual).style.backgroundColor = "#f00";
}

function renderizarNota(){
      notaDivEl.style.display = "block";

    const porcentagemNota = Math.round(100 * nota/perguntas.length);

    let img = (porcentagemNota >= 80) ? "5.png" :
              (porcentagemNota >= 60) ? "4.png" :
              (porcentagemNota >= 40) ? "3.png" :
              (porcentagemNota >= 20) ? "2.png" :
              "1.png";

    notaDivEl.innerHTML = "<img src="+ img +">";
    notaDivEl.innerHTML += "<p>"+ porcentagemNota +"%</p>";
}
