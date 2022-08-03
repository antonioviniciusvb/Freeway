let larguraCarros = [130, 60, 100, 70, 80, 90];
let alturaCarros = [40, 40, 40, 40, 40 ,40];
let psXCarros =  [600,600,600,600,600,600];
let psYCarros = [40, 100, 150, 210, 265, 315];
let velocidadeCarros = [9,8,10,7,8,5,6];


function moveCarro(xCarro, vCarro, wCarro){
  
  xCarro -= vCarro;
  
  if(xCarro + wCarro < 0){
    
    xCarro = 600;
  }
  
  return xCarro;
  
}


function definePsXPadraoCarros(){
  
  for(let i = 0; i < psXCarros.length; i++){
    psXCarros[i] = 600;
  }
  
}





