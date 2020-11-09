"use strict"

class Player {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.playerHeight = 100;
        this.playerWidth = 85;
        this.x = this.canvas.width/2 - 30;
        this.y = this.canvas.height/2 - 10;
        this.speed = 25;
        this.directionX = 0;
        this.directionY = 0;
        this.score = 0;
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
        player.src = '/SurvivorGame/images/ninja2.png';
        player.addEventListener('load', () => {
            this.ctx.drawImage(player, this.x, this.y, this.playerWidth, this.playerHeight)
        });
    }

    checkScreen() {
        if (this.x<= 0) {
            this.directionX = 1;
        } else if (this.x + this.playerWidth >= this.canvas.width) {
            this.directionX = -1;
        } else if (this.y + this.playerHeight>= this.canvas.height) {
            this.directionY = -1;
        } else if (this.y<= 0) {
            this.directionY = 1;

        }
    }
    
    checkElementTouch(element) {
        const collideRight = this.x + this.playerWidth > element.x;
        const collideBottom = this.y + this.playerHeight > element.y;
        const collideLeft = this.x < element.x + element.size;
        const collideTop = this.y < element.y + element.size;

        if (collideRight && collideLeft && collideTop && collideBottom) {
            return true;
          }
          return false;
    }
}