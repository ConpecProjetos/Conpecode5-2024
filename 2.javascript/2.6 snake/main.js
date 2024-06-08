const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [{ x: 10, y: 10 }];
let speed = { x: 0, y: 0 };
let food = { x: 15, y: 15 };
let score = 0;

document.addEventListener('keydown', changeSpeed);

function gameLoop() {
    update();
    draw();
    setTimeout(gameLoop, 50);
}

function update() {
    const head = { x: snake[0].x + speed.x, y: snake[0].y + speed.y };

    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount || snakeCollision(head)) {
        resetGame();
    } else {
        // Codar o que acontece com a cobra quando ela anda?
    }
}

function draw() {
    // A cada frame, limpa o canvas e redesenha as partes da cobra e a comida
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Muda de cor para verde
    context.fillStyle = 'green';
    snake.forEach(part => {
        context.fillRect(part.x * gridSize, part.y * gridSize, gridSize, gridSize);
    });

    // Muda de cor para vermelho
    context.fillStyle = 'red';
    context.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function changeSpeed(event) {
    // Função que atualiza a direção da cobrinha dado a teclad clickada
    const keyPressed = event.keyCode;
    if (keyPressed === 37 && speed.x === 0) {
        speed = { x: -1, y: 0 };
    }
    if (keyPressed === 38 && speed.y === 0) {
        speed = { x: 0, y: -1 };
    }
    if (keyPressed === 39 && speed.x === 0) {
        speed = { x: 1, y: 0 };
    }
    if (keyPressed === 40 && speed.y === 0) {
        speed = { x: 0, y: 1 };
    }
}

function snakeCollision(head) {
    // CODAR AQUI
    // verifica se para cada "pedaço" do dicionário que simboliza a cobra, a cabeça não colide
    return false;    
}

function placeFood() {
    // CODAR AQUI
    // Atualiza a posição da comida de maneira aleatória
    food = {
        x: 10,
        y: 10
    };
}

function resetGame() {
    snake = [{ x: 10, y: 10 }];
    speed = { x: 0, y: 0 };
    score = 0;
    placeFood();
}

gameLoop();
