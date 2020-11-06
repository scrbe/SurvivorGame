"use strict"

class Obstacles {
    constructor(canvas, x, y) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.size= 40
        this.x = x;
        this.y = y;
        this.speed = 22;
        this.directionX = 1;
        this.directionY = 1;
    }

    drawObstacles() {
        const obstacle = new Image();
        obstacle.src = '/SurvivorGame/images/saw blade.png';
        obstacle.addEventListener('load',this.ctx.drawImage(obstacle, this.x, this.y, this.size, this.size));
    }

    moveObstacleX() {
        this.x = this.x + this.directionX * this.speed;
    }

    moveObstacleY() {
        this.y = this.y + this.directionY * this.speed;
    }

    checkScreen() {
        if (this.x<= 0) {
            this.directionX = 1;
        } else if (this.x + this.size >= this.canvas.width) {
            this.directionX = -1;
        } else if (this.y + this.size>= this.canvas.height) {
            this.directionY = -1;
        } else if (this.y<= 0) {
            this.directionY = 1;

        }
    }
}