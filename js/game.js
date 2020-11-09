"use strict"

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player = new Player(this.canvas);
        this.coin = new Coin(this.canvas, 50, 50)
        this.obstacleHolder = [];
        this.obstacles = new Obstacles(this.canvas, 750, 10);
        this.isGameOver = false;
        this.coinSound = document.getElementById('coin-sound');
        this.gameOverSound = document.getElementById('game-over-sound')
    }

    updateGame() {
        this.checkAllCollisions();
        this.updatePlayer();
        this.clearCanvas();
        this.drawBackground();
        this.drawCanvas();
        this.coinTouch();
        this.bladeCollision();
        this.updateObstacles();
        this.player.directionY = 0;
        this.player.directionX = 0;
    }

    drawCanvas() {
        this.player.drawPlayer()
        this.coin.drawCoin()
        this.obstacleHolder.forEach((blade) => {
            blade.drawObstacles();
        })
    }

    drawBackground() {
        const background = new Image();
        background.src = '/SurvivorGame/images/bamboo1.jpg';
        this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    checkAllCollisions() {
        this.player.checkScreen();
        this.obstacleHolder.forEach((blade) => {
            blade.checkScreen();
        })
        this.bladeCollision();
    }

    coinTouch() {
        if (this.player.checkElementTouch(this.coin)) {
            this.coinSound.play();
            this.player.score++
            console.log(this.player.score);
            const x = Math.random() * this.canvas.width - 20;
            const y = Math.random() * this.canvas.height - 20;
            this.coin = new Coin(this.canvas, x, y)
            this.obstacleHolder.push(new Obstacles(this.canvas, x, y))
            this.obstacles = new Obstacles(this.canvas, x, y);
        }        
    }

    bladeCollision() {
        this.obstacleHolder.forEach((blade) => {
            if (this.player.checkElementTouch(blade)) {
                this.coinSound.pause();
                this.gameOverSound.play();
                this.coinSound.currentTime = 0;
                this.onGameOver();
            }
        })
    }

    updatePlayer() {
        this.player.movePlayerX();
        this.player.movePlayerY();
    }

    updateObstacles() {
        this.obstacleHolder.forEach((blade) => {
            blade.moveObstacleX();
            blade.moveObstacleY();
        })
    }

    gameOverCallback(callback) {
        this.onGameOver = callback;
        this.updateGame();
        this.obstacleHolder = []
        this.player.score = 0;
        console.log(this.obstacleHolder)
    }


    // bladeLoop() {
    //     const loop = () => {
    //     // si el player toca una moneda, que se genere un nuevo blade
    //         if (a=a) {
    //             this.obstacleHolder.push(new Obstacles(this.canvas, this.coin.x, this.coin.y));
    //         }

    //         this.obstacleHolder.forEach(() => {
    //             this.obstacles.moveObstacleX();
    //             this.obstacles.moveObstacleY();
    //         })

    //         this.clearCanvas()
    //         this.drawCanvas()

    //         this.obstacleHolder.push(this.obstacles)
    //         this.obstacleHolder.forEach(() => {
    //             this.obstacles.drawObstacles();
    //         })
    //         console.log(this.obstacleHolder)
    //         console.log(this.obstacles)
                
    //         if (!this.isGameOver) {
    //             window.requestAnimationFrame(loop);
    //             this.score++;
    //         };
    //     }

    //     window.requestAnimationFrame(loop);
    // }
}