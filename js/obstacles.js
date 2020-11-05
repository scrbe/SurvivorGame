"use strict"

class Obstacles {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.obstacleWidth = 40;
        this.obstacleHeight = 40;
    }

    drawObstacles() {
        const obstacle = new Image();
        obstacle.src = '/SurvivorGame/images/saw blade.png';
        obstacle.addEventListener('load',this.ctx.drawImage(obstacle, this.x, this.y, this.obstacleWidth, this.obstacleHeight));
    }
}