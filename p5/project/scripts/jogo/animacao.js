class Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        this.matriz = matriz;
        this.imagem = imagem;
        this.largura = largura;
        this.altura = altura;
        this.x = x;/**posição x da tela */ 
        this.variacaoY = variacaoY;
        this.y = height - this.altura - variacaoY; /**posição y da tela */
        this.larguraSprite = larguraSprite; /**tamanho das sprites na imagem total */
        this.alturaSprite = alturaSprite;

        this.frameAtual = 0;
    }

    exibe(){
        image(this.imagem, this.x, this.y, this.largura, this.altura,
            this.matriz[this.frameAtual][0],
            this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);

        this.anima()
    }   

    /**Looping da personagem */

    anima() {
        this.frameAtual++;

        this.frameAtual >= this.matriz.length-1 ? this.frameAtual = 0 : null;
    } 
}