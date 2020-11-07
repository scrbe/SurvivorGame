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
        this.isGameOver = false;
        this.lifeBar;
        this.coinTouch = false;
    }

    bladeLoop() {
        const loop = () => {
            
        // si el player toca una moneda, que se genere un nuevo blade
            if (this.coinTouch = true) {
                this.blades.push(new Obstacles(this.canvas, this.coin.x, this.coin.y))
                this.checkAllCollisions()
                // this.obstacles.moveObstacleX();
                // this.obstacles.moveObstacleY();
                // this.obstacles.drawObstacles();
                this.clearCanvas()
                this.drawCanvas()
    
                if (!this.isGameOver) {
                    window.requestAnimationFrame(loop);
                    this.score++;
                };
            }
            this.coinTouch = false;
        }

        window.requestAnimationFrame(loop);
    }

    updateGame() {
        this.coinHolder.push(this.coin)
        this.checkAllCollisions();
        this.updatePlayer();
        this.clearCanvas();
        this.drawCanvas();
        // temporarily moving obstacles here, but the movement needs to be based on a frame loop not on a keypress
        this.obstacles.moveObstacleX();
        this.obstacles.moveObstacleY();
        this.player.directionY = 0;
        this.player.directionX = 0;
    }

    drawCanvas() {
        this.player.drawPlayer()
        this.coin.drawCoin()
        this.coinHolder.push(new Coin(this.canvas, 100, 100))
        // temporarily drawing the obstacle here, but it needs to be drawn when a coin is touched.
        this.obstacles.drawObstacles() 
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    checkAllCollisions() {
        this.player.checkScreen();
        this.obstacles.checkScreen();
        this.coinTouch();
        this.bladeCollision();
    }

    coinTouch() {
        this.coinHolder.forEach((coin) => {
            if (this.player.checkElementTouch(coin, 0)) {
                this.player.score++;
                console.log(this.player.score);
                this.coinTouch = true;
                this.coinHolder.splice(index, 1);
                const x = Math.random() * this.canvas.width;
                const y = Math.random() * this.canvas.height;
                this.coinHolder.push(this.coin, x, y)
            }
        });
    }

    bladeCollision() {
        this.blades.forEach((blade) => {
            if (this.player.checkElementTouch(blade, index)) {
                this.player.loseLife();
                this.blades.splice(index, 1);
            }
        })
    }

    updatePlayer() {
        this.player.movePlayerX();
        this.player.movePlayerY();
    }
}