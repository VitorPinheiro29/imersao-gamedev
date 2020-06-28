class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    exibe() {
        textAlign(RIGHT);
        fill('#fff');
        textFont(fontHomePage)
        textSize(50);
        text('score = ', width -110, 50);
        textSize(50);
        text(parseInt(this.pontos), width-30, 50);
    }

    adicionarPonto() {
        this.pontos = this.pontos + 0.2;
    } 

}