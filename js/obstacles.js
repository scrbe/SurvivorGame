"use strict"

class Obstacles {
    constructor(canvas, x, y) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.obstacleWidth = 40;
        this.obstacleHeight = 40;
        this.x = x;
        this.y = y;
        this.speed = 22;
        this.directionX = 0;
        this.directionY = 0;
    }

    drawObstacles() {
        const obstacle = new Image();
        obstacle.src = '/SurvivorGame/images/saw blade.png';
        obstacle.addEventListener('load',this.ctx.drawImage(obstacle, this.x, this.y, this.obstacleWidth, this.obstacleHeight));
    }

    moveObstacleX() {
        this.x = this.x + this.directionX * this.speed;
    }

    moveObstacleY() {
        this.y = this.y + this.directionY * this.speed;
    }

    obstacleDirectionX() {
        this.directionX = this.directionX;
    }

    obstacleDirectionY() {
        this.directionY = this.directionY;
    }

}