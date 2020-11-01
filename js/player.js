"use strict"

class Player {
    constructor(canvas, life) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.playerHeight = 50;
        this.playerWidth = 50;
        this.x = this.canvas.width*0.9;
        this.y = this.canvas.height - this.playerHeight - 10;
        this.speed;
        this.directionX;
        this.directionY;
        this.life = life;
    }

    setDirectionX(directionX) {
        this.directionX = directionX;
    }

    setDirectionY(directionY) {
        this.directionY = directionY;
    }

    drawPlayer() {
        const player = new Image();
        player.src = 'https://image.flaticon.com/icons/png/128/813/813526.png';
        player.addEventListener('load',this.ctx.drawImage(player, this.x, this.y, this.playerWidth, this.playerHeight));
    }

    checkObstacleHit() {
        
    }

    checkScreen() {
        
    }

    loseLife() {
        
    }
}