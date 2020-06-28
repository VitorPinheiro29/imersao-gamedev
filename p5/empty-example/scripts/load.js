function preload() {
    carroInimigo = loadImage('./assets/imagens/inimigos/cargo.gif')
    imagemCenario = loadImage('./assets/imagens/cenario/City2.png');
    imagemGameOver = loadImage('./assets/imagens/cenario/game_over.png');
    imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png');
    somDoJogo = loadSound('./assets/sons/trilha_jogo.mp3');
    somPulo = loadSound('./assets/sons/somPulo.mp3');
    gotaImage = loadImage('./assets/imagens/inimigos/gotinha-voadora.png');
    policeImage = loadImage('./assets/imagens/inimigos/2.png');
    imagemHomePage = loadImage('./assets/imagens/cenario/telaInicial.png');
    fontHomePage = loadFont('./assets/imagens/assets/fonteTelaInicial.otf');
    imagemVida = loadImage('./assets/imagens/assets/coracao.png');
    fita = loadJSON('fita/fita.json')
  }