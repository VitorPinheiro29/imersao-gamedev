function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(48);
  /*somDoJogo.loop();*/
  jogo = new Jogo();
  homePage = new HomePage();
  jogo.setup();
  cenas = {
    jogo,
    homePage
  };
  button = new ButtonManager('Iniciar', width/2, height/2); 
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}