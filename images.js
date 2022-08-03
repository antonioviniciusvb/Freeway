let imgAtor;

//musicas do jogo
let somColisao;
let somPontos;
let somTrilha;

let totalCarros = 6;
let imgCarros = [];

//fundo do jogo
let imgEstrada;

function preload(){

  definePosicaoInicialAtor();
  defineImagensDosCarros();
  somColisao = loadSound("sounds/colidiu.mp3");
  somPontos = loadSound("sounds/pontos.wav");
  somTrilha = loadSound("sounds/trilha.mp3");
  
  imgEstrada = loadImage("images/estrada.png");
  imgAtor = loadImage("images/ator-1.png");
  
}

function defineImagensDosCarros(){
  
    for(let i = 0; i < totalCarros; i++){
    
    let random = Math.round(Math.random() * 3);
    
    if(random == 0){
      
      imgCarros[i] = loadImage("images/carro-1.png");
      
    }else if(random == 1){
      
      imgCarros[i] = loadImage("images/carro-2.png");
      
    }else{
      
      imgCarros[i] = loadImage("images/carro-3.png");
    }
  }
    
}

