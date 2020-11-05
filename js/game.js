"use strict"

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player = new Player(this.canvas);
        this.coin = new Coin(this.canvas)
        this.isGameOver;
        this.lifeBar;
    }

    updateGame() {
        this.checkAllCollisions();
        this.updateCanvas();
        this.clearCanvas();
        this.player.drawPlayer();
        this.coin.drawCoin();
        this.player.directionY = 0;
        this.player.directionX = 0;
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    checkAllCollisions() {
        this.player.checkScreen();
        this.player.checkElementTouch(this.coin);
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