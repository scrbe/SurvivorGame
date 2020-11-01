"use strict"

class Player {
    constructor(canvas, life) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.playerHeight = 50;
        this.playerWidth = 50;
        this.x = this.canvas.width*0.9;
        this.y = this.canvas.height - this.playerHeight - 10;
        this.speed = 5;
        this.directionX = 0;
        this.directionY = 0;
        this.life = life; 
    }

    setDirectionX(directionX) {
        this.directionX = directionX;
    }

    setDirectionY(directionY) {
        this.directionY = directionY;
    }

    movePlayerX() {
        this.x = this.x + this.directionX * this.speed;
    }

    movePlayerY() {
        this.y = this.y + this.directionY * this.speed;
    }

    drawPlayer() {
        const player = new Image();
        player.src = 'https://image.flaticon.com/icons/png/128/813/813526.png';
        player.addEventListener('load',this.ctx.drawImage(player, this.x, this.y, this.playerWidth, this.playerHeight));
    }

    checkObstacleHit() {
        
    }

    checkScreen() {
        if (this.x - this.playerWidth / 2 <= 0) {
            this.direction = 0;
        } else if (this.x + this.playerWidth / 2 >= this.canvas.width) {
            this.direction = 0;
        }
    }

    loseLife() {
        
    }
}