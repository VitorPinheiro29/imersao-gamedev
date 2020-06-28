class Inimigo extends Animacao { /**Extends significa "Pega tudo oq tiver naquela outra classe". Inimigo tem tudo da classe Animacao */
    constructor(matriz, imagem, x, variacaoY, largura, altura, 
        larguraSprite, alturaSprite, velocidade) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite,)

        this.velocidade = velocidade;
        this.x = width;
    }
    move() {
        this.x = this.x - this.velocidade;

    }

    reaparece() {
        this.x = width;
    }
}   