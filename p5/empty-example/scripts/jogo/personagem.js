class Personagem extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.variacaoY = variacaoY;
        this.yInicial = height -  this.altura - this.variacaoY;
        this.y = this.yInicial;

        this.jump = 0;

        this.velocidadeDoPulo = 0;
        this.gravidade = 3;
        this.alturaDoPulo = -30;
        this.invencivel = false;
    }   
    pula() {
        if (this.jump < 3) {
            this.velocidadeDoPulo = this.alturaDoPulo;
            this.jump++;
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if(this.y > this.yInicial) {
            this.y = this.yInicial;
            this.jump = 0
        }
    }

    tornarInvencivel(){
        this.invencivel = true;

        setTimeout(() => {
            this.invencivel = false
        }, 1000);
    }

    estaColidindo(inimigo) {
        if (this.invencivel) {
            return false;
        }

        const precisao = .7;
        const colisao = collideRectRect(
            this.x, 
            this.y, 
            this.largura*precisao, 
            this.altura*precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura*precisao,
            inimigo.altura*precisao,
        );

        return colisao;
    }

    estaColidindoBird(bird) {
        const precisao = .7;
        const colisaoBird = collideRectRect(
            this.x, 
            this.y, 
            this.largura*precisao, 
            this.altura*precisao,
            bird.x,
            bird.y,
            bird.largura*precisao,
            bird.altura*precisao,
        );

        return colisaoBird;
    }
}