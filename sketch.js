//definição de tela
let larguraTela = 500;
let alturaTela = 400;

//pontuações
let pontos = 0;
let falhas = 0;

let hit = false;
let timer = 0;

function setup() {
  
  //inicia musica trilha do jogo
  somTrilha.loop();
  
  createCanvas(larguraTela, alturaTela);
}

function draw() {
  
  background(imgEstrada);
  
  mostraPontos();

  //Ator
  mostraAtores(imgAtor,psXAtor,psYAtor,tamanhoAtor,tamanhoAtor);
 
  if(hit == false && timer == 0){
  
  moveAtor();
    
   for(let index = 0; index < imgCarros.length; index++){

    mostraAtores(imgCarros[index],psXCarros[index],psYCarros[index],larguraCarros[index],alturaCarros[index]);
 
    psXCarros[index] = moveCarro(psXCarros[index], velocidadeCarros[index], larguraCarros[index]);


        if(atorColidiu(psXCarros[index],psYCarros[index],larguraCarros[index],alturaCarros[index], psXAtor, psYAtor, tamanhoAtor / 2)){
        hit = true;         
        falhas++;
        somColisao.play();    
        definePsXPadraoCarros();
        
   }
             
       if(psXCarros[index] == 600){

         velocidadeCarros[index] = getRndInteger(6,12);
       }    
  }
 
  if(atorPassouEstrada()){
    
    pontos++;
    definePsXPadraoCarros();
    somPontos.play();
    hit = true;
  }
    
  }else{
    
    timer++;
    
    if(timer > 10)
     definePosicaoInicialAtor(); 
    
    if(timer > 150){
      
      timer = 0;
      hit = false;
  }
  }
   
}

function mostraPontos(){
  
  textSize(32); 
  text(`${pontos} x ${falhas}`, 220, 29);
  
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
