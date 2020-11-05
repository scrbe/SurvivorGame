class Coin{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.size = 40;
        this.x;
        this.y;
    }

    drawCoin() {
        const coin = new Image();
        coin.src = '/SurvivorGame/images/coin.png';
        this.x = Math.floor(Math.random() * this.canvas.width) - this.size;
        this.y = Math.floor(Math.random() * this.canvas.height) - this.size;
        coin.addEventListener('load',this.ctx.drawImage(coin, this.x, this.y, this.size, this.size));
    }
}