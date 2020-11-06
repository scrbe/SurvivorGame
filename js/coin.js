class Coin {
    constructor(canvas,x,y) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.size = 40;
        this.x = x;
        this.y = y;
    }

    drawCoin() {
        const coin = new Image();
        coin.src = '/SurvivorGame/images/coin.png';
        this.x = 50;
        this.y = 50;
        this.ctx.drawImage(coin, this.x, this.y, this.size, this.size)
    }
}