# SurvivorGame

## Descripción

El objetivo del juego es no morir hasta llegar al final del laberinto. El jugador comienza con 100% de vida pero a medida que se mueve, esta va disminuyendo. Hay packs de recuperación a lo largo del camino que devuelven un % específico de la vida del jugador y los deberá obtener todos antes de salir del laberinto.

El jugador se encuentra en un grid dividido por "tiles".
El movimiento del jugador será por "tiles" respondiendo al keypress de las fechas del teclado.

## MVP

Creación del laberinto.
Creación de packs de vida.
Un jugador que se puede mover en las 4 direcciones, con una velocidad determinada.

#### Data

1. index.html
2. main.js
3. game.js
4. player.js
5. lifePack.js
6. traps.js (bonus)

### 1. index.html

* Pantalla de inicio
* Escoger tipo de jugador (bonus)

### 2. main.js

* buildDOM
* Crear InitScreen / removeInitScreen
* Crear GameScreen / removeGameScreen
* Crear GameOverScreen / removeGameScreen
* Crear YouWonScreen / remove YouWonScreen
* Go back to InitScreen
* Class game para importar toda la funcionalidad y data de las demás clases
* EventListeners de las arrows para determinar dirección del player

### 3. game.js

#### Data

* this.canvas
* this.ctx
* this.player
* this.obstacles
* this.isGameOver
* this.lifeBar

#### Functionality
* startLoop (ejecuta los métodos definidos previamente siempre y cuando isGameOver sea false)
* checkCollision (para evitar que el jugador traspase los obstáculos)
* AddLife (sumar vida cuando el player llegue a la posición del lifePack)
* checkLifeBar (revisión de la vida y se determina isGameOver)

### 4. player.js

#### Data
* this.canvas
* this.ctx
* this.playerWidth
* this.playerHeight
* this.x
* this.y
* this.size
* this.speed
* this.directionX
* this.directionY
* this.life

#### Functionality

* movePlayer (según su posición en X y Y, su dirección y su velocidad)
* drawPlayer (según la imagen en biblioteca)
* setDirection
* checkObstacleHit (cambia la dirección a 0 para que el player no pueda moverse)
* checkScreen (cambia la dirección a 0 para que el player no se salga del canvas)
* loseLife (disminuye la vida dependiendo de movimiento o del tiempo - TBD)

### 5. lifePack.js

#### Data

* this.canvas
* this.ctx
* this.lifePackWidth
* this.lifePackHeight
* this.x
* this.y

#### Functionality

* drawlifePack
* AddLife

## Tasks

* Configurar Git & GitHub
* Crear y conectar carpetas y archivos
* BuildDom en main.js
* Crear 3 pantallas en main.js
* Crear la transición de las pantallas
* Constructor lifePack 
* Constructor player
* Constructor game
* Methods lifePack
* Methods player
* Methods game

## Backlog

* Bonus
* Crear monedas para que el jugador gane la partida con un score
* añadir animaciones al player, al movimiento del player, a los lifepacks y a las traps del bonus