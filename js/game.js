"use strict"

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.isGameOver;
        this.lifeBar;
    }

    startLoop() {
        this.player = new Player(this.canvas, 100);
        this.player.drawPlayer();
        this.drawCanvas();
        // const loop = () => {
            // Call functions to loop over



        // }
        // Call loop según condición 
    }

    drawCanvas() {
        const background = new Image();
        background.src = '/SurvivorGame/images/background.png';
        this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
    }

    checkCollision() {
        
    }

    addLife() {
        
    }

    checkLifeBar() {
        
    }
    
}