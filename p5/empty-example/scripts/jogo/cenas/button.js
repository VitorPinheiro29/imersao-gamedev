class ButtonManager {
    constructor(texto, x, y){
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.button = createButton(this.texto);
        this.button.mousePressed(() => this._alteraCena());
        this.button.addClass('button-homePage');
    }

    draw(){
        this.button.position(this.x, this.y);
        this.button.center('horizontal');
    }

    _alteraCena(){
        this.button.remove();
        cenaAtual = 'jogo';
    }
}