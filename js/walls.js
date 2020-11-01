"use strict"

class Walls {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.wallHeight = 100;
        this.wallWidth = 50;
        this.x = this.canvas.width/2;
        this.y = this.canvas.height/2;
    }

    drawWalls() {
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(this.x, this.y, this.wallHeight, this.wallWidth)
    }
}