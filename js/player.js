"use strict"

class Player {
    constructor(canvas, life) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.playerHeight = 100;
        this.playerWidth = 50;
        this.x = this.canvas.width/2;
        this.y = this.canvas.height/2;
        // this.x = this.canvas.width*0.9;
        // this.y = this.canvas.height - this.playerHeight - 10;
        this.speed;
        this.directionX;
        this.directionY;
        this.life = life;
    }

    movePlayerX(directionX) {
        this.directionX = directionX;
    }

    movePlayerY(directionY) {
        this.directionY = directionY;
    }

    drawPlayer() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(
        this.x - this.canvas.width / 2,
        this.y - this.canvas.height / 2,
        100,
        100
        );
        const player = new Image();
        player.src = '/SurvivorGame/images/R2D2Small.jpeg';
        player.addEventListener('load',this.ctx.drawImage(player, this.x, this.y, this.playerWidth, this.playerHeight));
    }

    setDirection() {
        
    }

    checkObstacleHit() {
        
    }

    checkScreen() {
        
    }

    loseLife() {
        
    }
}