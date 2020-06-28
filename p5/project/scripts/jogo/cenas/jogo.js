class Jogo {
    constructor(){
        this.indiceAtual = 0;

        this.mapa = fita.mapa;
    }
     setup() {
        cenario = new Cenario(imagemCenario, 5);
        pontuacao = new Pontuacao();
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 20, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, carroInimigo, width - 222, 50, 120, 80, 111, 40, 8);
        const gota = new Inimigo(matrizGota, gotaImage, width - 52, 200, 100, 75, 200, 150, 8);
        const police = new Inimigo(matrizPolice, policeImage, width, 5, 120, 80, 1518, 642, 15);
        vida = new Vida(fita.configuracoes.totalVidas, fita.configuracoes.vidaInicial);

        inimigos.push(inimigo);
        inimigos.push(gota);
        inimigos.push(police);
        
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            personagem.pula();
            somPulo.play();
        }
    }

    draw(){
        cenario.exibe();
        cenario.move();

        vida.draw();
        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        /**0, height -135 é as coordenadas e 110, 135 é o tamanho dela. Os outros 4 parâmetros é pra pegar 1 sprite só*/
        const linhaAtual = this.mapa[this.indiceAtual];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.velocidade = parseInt(random(10, 30));

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel){
            this.indiceAtual++;
            inimigo.reaparece();

            if (this.indiceAtual > this.mapa.length -1){
            this.indiceAtual = 0;
            }
        }

        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();

            if(vida.vidas === 0) {
                image(imagemGameOver, width/2 - 250, height/8);
                noLoop();
            }
        }
    }
}
