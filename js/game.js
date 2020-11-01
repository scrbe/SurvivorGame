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
        // const loop = () => {
            // Call functions to loop over



        // }
        // Call loop según condición 
    }

    checkCollision() {
        
    }

    addLife() {
        
    }

    checkLifeBar() {
        
    }
    
}