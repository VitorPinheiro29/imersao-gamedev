let imagemCenario;
let cenario;
let imagemGameOver;

let jogo;
let somDoJogo;
let somPulo;

let homePage;
let imagemHomePage;
let fontHomePage;

let button;

let personagem;
let imagemPersonagem;
const alturaPersonagem = 135;

let carroInimigo;
let inimigo;
const inimigos = [];
let gota;
let gotaImage;
let police;
let policeImage;

let pontuacao;

let cenaAtual = 'homePage';
let cenas;

let vida;
let imagemVida;

let fita;
let linhaAtual;

const matrizInimigo = [
  [0, 0],
  [111,0]
]

const matrizPersonagem = [
    [0,0],
    [220,0],
    [440,0],
    [660,0],
    [0,270],
    [220,270],
    [440,270],
    [660,270],
    [0,540],
    [220,540],
    [440,540],
    [660,540],
    [0,810],
    [220,810],
    [440,810],
    [660,810]
]

const matrizGota = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750]
]
const matrizPolice = [
  [0,0],
]
