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
        <h3 class='intro'>Get as many coins as you can!</h3>
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

        // Creación de la instancia del objeto game
        const game = new Game(canvasElement)
        game.player.drawPlayer();

        // Añadir función movimiento según arrows del teclado y eventListener keydown

        const updatePlayerDirectionX = (event) => {
            if (event.code === 'KeyD') {
                game.player.setDirectionX(1)
            } else if (event.code === 'KeyA') {
                game.player.setDirectionX(-1)
            }
        }

        const updatePlayerDirectionY = (event) => {
            if (event.code === 'KeyW') {
                game.player.setDirectionY(-1)
            } else if (event.code === 'KeyS') {
                game.player.setDirectionY(1)
            }
        }

        document.addEventListener('keydown', (event) => {
            updatePlayerDirectionX(event);
            updatePlayerDirectionY(event);
            game.updateGame();
        });

        const gameOverScreen = () => {
            buildDOM(`
                <section id="game-over">
                    <h1>Game Over!</h1>
                    <button>Restart</button>
                </section>
            `);
            const restartButton = document.querySelector('button');
            restartButton.addEventListener('click', buildGameScreen);
        };
        
        if (game.isGameOver) {
            gameOverScreen();
        }
    };

    

    buildInitScreen();
};

window.addEventListener('load', main)