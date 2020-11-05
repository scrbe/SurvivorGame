"use strict"

const main = () => {
    // Función para construir pantallas
    const buildDOM = (html) => {
        const main = document.querySelector('main')
        main.innerHTML = html
    }

    // Función para construir Pantalla de inicialización del juego
    const buildInitScreen = () => {
        buildDOM(`
        <section id='init-screen'>
        <h1 class='intro'>Survivor Game</h1>
        <h3 class='intro'>Exit the maze before your lifebar runs out.</h3>
        <button>Start Game!</button>
        </section>
        `);
        const startButton = document.querySelector('button');
        startButton.addEventListener('click', buildGameScreen)
    };

    // Función para construir la pantalla del juego
    const buildGameScreen = () => {
        buildDOM(`
        <section id='game-screen'>
            <canvas></canvas>
        </section>
        `);

        const width = document.querySelector('#game-screen').offsetWidth;
        const height = document.querySelector('#game-screen').offsetHeight;
        const canvasElement = document.querySelector('canvas');
        canvasElement.setAttribute('width', width);
        canvasElement.setAttribute('height', height);

        // Creación de la instancia del objeto coin
        const coin = new Coin(canvasElement)
        // Dibujar la coin
        coin.drawCoin();

        // Creación de la instancia del objeto game
        const game = new Game(canvasElement)

        // Añadir función movimiento según arrows del teclado y eventListener keydown

        const updatePlayerDirectionX = (event) => {
            if (event.code === 'ArrowRight') {
                game.player.setDirectionX(1)
            } else if (event.code === 'ArrowLeft') {
                game.player.setDirectionX(-1)
            }
        }

        const updatePlayerDirectionY = (event) => {
            if (event.code === 'ArrowUp') {
                game.player.setDirectionY(-1)
            } else if (event.code === 'ArrowDown') {
                game.player.setDirectionY(1)
            }
        }

        document.addEventListener('keydown', (event) => {
            updatePlayerDirectionX(event);
            updatePlayerDirectionY(event);
            game.updateGame();
        });
        
        // funcionalidad GameOver

    };

    const gameOverScreen = () => {
        buildDOM(`
            <section id="game-over">
                <h1>Game Over Screen</h1>
                <button>Restart</button>
            </section>
        `);
        const restartButton = document.querySelector('button');
        restartButton.addEventListener('click', buildGameScreen);
    };

    // if (player.life === 0) {
    //     gameOverScreen();
    // }

    buildInitScreen();
};

window.addEventListener('load', main)