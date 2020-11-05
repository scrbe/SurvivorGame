"use strict"

class Player {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.playerHeight = 50;
        this.playerWidth = 50;
        this.x = this.canvas.width/2 - 30;
        this.y = this.canvas.height/2 - 10;
        this.speed = 20;
        this.directionX = 0;
        this.directionY = 0;
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
        player.src = '/SurvivorGame/images/iconR2D2.png';
        player.addEventListener('load',this.ctx.drawImage(player, this.x, this.y, this.playerWidth, this.playerHeight));
    }

    checkScreen() {
        if (this.x - this.playerWidth / 2 <= 0) {
            this.directionX = 1;
        } else if (this.x + this.playerWidth / 2 >= this.canvas.width) {
            this.directionX = -1;
        } else if (this.y + this.playerHeight / 2 >= this.canvas.height) {
            this.directionY = -1;
        } else if (this.y - this.playerHeight / 2 <= 0) {
            this.directionY = 1;
        }
    }
    
    checkElementTouch(element) {
        const collideRight = this.x + this.width / 2 > element.x - element.size / 2;
        const collideBottom = this.y + this.height / 2 < element.y - element.size / 2;
        const collideLeft = this.x - this.width / 2 < element.x + element.size / 2;
        const collideTop = this.y - this.height / 2 < element.y + element.height / 2;

        if (collideRight && collideLeft && collideTop && collideBottom) {
            return true;
          }
          return false;
    }

    

    loseLife() {
        
    }
}