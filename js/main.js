"use strict"

const main = () => {
    // Función para construir pantallas
    const buildDOM = (html) => {
        const main = document.querySelector('main')
        main.innerHTML = html
    }

    // Función para construir Pantalla de inicialización del juego
    // <h2 class='intro'>What's your name Ninja?</h2>
    //     <label for="name"></label>
    //     <input type="text" id='name'></input>
    const buildInitScreen = () => {
        buildDOM(`
        <section class='init-screen'>
        <h1 class='intro'>Survivor Game</h1>
        <img src = '/SurvivorGame/images/shogun.png'>
        <h3 class='intro'>Get me as many coins as you can !</h3>
        <button>Start Game!</button>
        </section>
        `);

        const startButton = document.querySelector('button');
        const nameInput = document.getElementById("name");
        startButton.addEventListener('click', buildGameScreen)
    };

    // Función para construir la pantalla del juego
    const buildGameScreen = (name) => {
        buildDOM(`
        <section id='game-screen'>
            <canvas id='canvas'></canvas>
            <div class="score">Your Ninja Score is : 0</div>
        </section>
        `);

        const width = document.querySelector('#game-screen').offsetWidth;
        const height = document.querySelector('#game-screen').offsetHeight;
        const canvasElement = document.querySelector('canvas');
        canvasElement.setAttribute('width', width);
        canvasElement.setAttribute('height', height);

        // Creación de la instancia del objeto game
        const game = new Game(canvasElement)

        // Funcionalidad game over
        game.gameOverCallback(gameOverScreen)

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
    };

    const gameOverScreen = () => {
        buildDOM(`
            <section class='init-screen'>
                <h1>Game Over!</h1>
                <img src = '/SurvivorGame/images/shogun.png'>
                <h3 class='intro'>You have disappointed me Ninja...</h3>
                <h3 class='score'>Your Ninja Score is:</h3>
                <button>Restart</button>
            </section>
        `);
        const restartButton = document.querySelector('button');
        restartButton.addEventListener('click', buildGameScreen);
    };

    buildInitScreen();
};

function backgroundSound() {
    const background = document.getElementById('background-sound');
    background.play();
}

window.addEventListener('load', main)
setInterval(() => {
    backgroundSound();
},1000)
