//ator
let tamanhoAtor = 30;
let psXAtor =  0;
let psYAtor = 0;
let velocidadeAtor = 7;

function definePosicaoInicialAtor(){
  
  psXAtor =  50;
  psYAtor = alturaTela - 32;
}

function mostraAtores(ator, x, y, w, h){
  
  image(ator, x, y, w,h);
}


function moveAtor(){
    
   //subir o ator  
   if(keyIsDown(UP_ARROW)){
    
      if((psYAtor - velocidadeAtor) > 0)
        psYAtor -= velocidadeAtor;
    else
        psYAtor = 0;
    
  //descer o ator   
  }else if(keyIsDown(DOWN_ARROW)){
    
        if(((psYAtor + tamanhoAtor) + velocidadeAtor) < alturaTela)
        psYAtor += velocidadeAtor;
    else
        psYAtor = alturaTela - tamanhoAtor;
  
    
  //enviar o ator para o lado esquerdo  
  }else if(keyIsDown(LEFT_ARROW)){
    
    if((psXAtor - velocidadeAtor) > 0)
        psXAtor -= velocidadeAtor;
    else
        psXAtor = 0;  
  
  //enviar o ator para o lado direito
  }else if(keyIsDown(RIGHT_ARROW)){
    
    if(((psXAtor + tamanhoAtor) + velocidadeAtor) < larguraTela)
        psXAtor += velocidadeAtor;
    else
        psXAtor = larguraTela - tamanhoAtor;  
  }
}


function atorPassouEstrada(){
  
  if(psYAtor == 0)
    return true;
  else
    return false;
}

function atorColidiu(rectX, rectY, rectWidth, rectHeight, bolX, bolY, bolRadius){
 
  let hit = collideRectCircle(rectX, rectY, rectWidth, rectHeight, bolX, bolY, bolRadius);
  
  return hit;
  
}