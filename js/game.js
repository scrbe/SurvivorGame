"use strict"

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player = new Player(this.canvas, 100);
        this.isGameOver;
        this.lifeBar;
    }

    updateGame() {
        // this.checkCollision();
        this.updateCanvas();
        this.clearCanvas();
        this.drawCanvas();
        this.player.directionY = 0;
        this.player.directionX = 0;
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawCanvas() {
        this.player.drawPlayer();
        // Dibujar walls
        // Dibujar lifePacks
    }

    updateCanvas() {
        this.player.movePlayerX();
        this.player.movePlayerY();
    }

    checkCollision() {
        this.player.checkScreen();
        // Verificar que el jugador no se ha chocado con la pared
        
    }

    addLife() {
        
    }

    checkLifeBar() {
        
    }
    
}