"use strict"

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player = new Player(this.canvas);
        this.coin = new Coin(this.canvas, 5, 5)
        this.obstacles = new Obstacles(this.canvas, 750, 10);
        this.coinHolder = [];
        this.blades = [];
        this.isGameOver;
        this.lifeBar;
    }

    bladeLoop() {
        
    }
    updateGame() {
        this.coinHolder.push(this.coin)
        this.checkAllCollisions();
        this.updatePlayer();
        this.clearCanvas();
        this.drawCanvas();
        this.obstacles.moveObstacleX();
        this.obstacles.moveObstacleY();
        this.player.directionY = 0;
        this.player.directionX = 0;
    }

    drawCanvas() {
        this.player.drawPlayer()
        this.coin.drawCoin()
        this.obstacles.drawObstacles()
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    checkAllCollisions() {
        this.player.checkScreen();
        this.obstacles.checkScreen();
        this.coinHolder.forEach((coin) => {
            if (this.player.checkElementTouch(coin)) {
                this.player.score++;
                this.coinHolder.splice(0, 1);
                const x = Math.random() * this.canvas.width;
                const y = Math.random() * this.canvas.height;
                this.coinHolder.push(this.coin, x, y)
            }
        });
        this.blades.forEach((blades) => {
            if (this.player.checkElementTouch(blades, index)) {
                this.player.loseLife();
                this.blades.splice(index, 1);
            }
        })
    }

    updatePlayer() {
        this.player.movePlayerX();
        this.player.movePlayerY();
    }

    addLife() {
        
    }

    checkLifeBar() {
        
    }
    
}