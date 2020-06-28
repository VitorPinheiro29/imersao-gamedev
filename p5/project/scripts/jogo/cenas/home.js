class HomePage {
    constructor(){
    }

    draw(){
        this._imagemDeFundo();
        this._texto();
        this._button();
    }

    _imagemDeFundo(){
        image(imagemHomePage, 0, 0, width, height);
    }

    _texto(){
        textFont(fontHomePage);
        textAlign(CENTER);
        textSize(50);
        text('As aventuras de', width/2, height/3.25);
        textSize(150);
        text('Hipsta', width/2, height/1.9);
    }

    _button(){
        button.y = height/7 * 4;
        button.draw();
    }
}