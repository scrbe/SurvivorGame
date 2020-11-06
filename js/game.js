"use strict"

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player = new Player(this.canvas);
        this.coin = new Coin(this.canvas)
        this.coinHolder = [];
        this.isGameOver;
        this.lifeBar;
    }

    updateGame() {
        this.coinHolder.push(this.coin)
        this.checkAllCollisions();
        this.updateCanvas();
        this.clearCanvas();
        this.drawCanvas();
        this.player.directionY = 0;
        this.player.directionX = 0;
    }

    drawCanvas() {
        this.player.drawPlayer()
        // this.coin.drawCoin()
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    checkAllCollisions() {
        this.player.checkScreen();
        if (this.player.checkElementTouch(coin)) {
            this.player.score++;
            this.coinHolder.splice(0, 0);

        }
        ;
    }

    updateCanvas() {
        this.player.movePlayerX();
        this.player.movePlayerY();
        
    }

    addLife() {
        
    }

    checkLifeBar() {
        
    }
    
}