var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let obstacles = [];
let collectibles = [];
let hazards = [];
let score = 0;
let player;
let gameOver = false;

class Obstacle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


class Collectible {
    constructor(x, y, size, color, value = 1) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.value = value;
        this.active = true;
    }

    draw() {
        if (!this.active) return;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Hazard {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Player {
    constructor() {
        this.x = 20;
        this.y = 20;
        this.size = 20;
        this.speed = 7;
    }

    draw() {
        ctx.fillStyle = "#0ccfbf";
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    move(dx, dy) {
        let newX = this.x + dx;
        let newY = this.y + dy;

        if (newX < 0 || newX + this.size > canvas.width) return;
        if (newY < 0 || newY + this.size > canvas.height) return;

        for (let obstacle of obstacles) {
            if (hasCollidedBox(newX, newY, this.size, this.size, obstacle)) {
                return;
            }
        }

        this.x = newX;
        this.y = newY;
    }
}


function hasCollidedBox(x, y, w, h, object) {
    return (
        x < object.x + object.width &&
        x + w > object.x &&
        y < object.y + object.height &&
        y + h > object.y
    );
}


function checkCollectibles(player) {
    collectibles.forEach(collect => {
        if (!collect.active) return;

        if (
            player.x < collect.x + collect.size &&
            player.x + player.size > collect.x - collect.size &&
            player.y < collect.y + collect.size &&
            player.y + player.size > collect.y - collect.size
        ) {
            collect.active = false;

            score += collect.value; 

            document.getElementById("score").textContent = score;

            if (score >= 50) {
            endGame(true);}

        }
    });
}

function checkHazards(player) {
    for (let hazard of hazards) {
        let dx = player.x + player.size / 2 - hazard.x;
        let dy = player.y + player.size / 2 - hazard.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < hazard.size + player.size / 2) {
            endGame(false);
        }
    }
}

function startGame() {
    player = new Player();

    document.addEventListener("keydown", function(event) {
        if (gameOver) return;

        if (event.key === "ArrowUp") player.move(0, -player.speed);
        if (event.key === "ArrowDown") player.move(0, player.speed);
        if (event.key === "ArrowLeft") player.move(-player.speed, 0);
        if (event.key === "ArrowRight") player.move(player.speed, 0);
    });

    gameLoop(); 
}

function gameLoop() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    obstacles.forEach(o => o.draw());
    collectibles.forEach(c => c.draw());
    hazards.forEach(h => h.draw());

    player.draw();

    checkCollectibles(player);
    checkHazards(player);

    requestAnimationFrame(gameLoop);
}

function endGame(won) {
    gameOver = true;

    if (won) {
        alert("You win!");
    } else {
        alert("You hit a hazard! Game over!");
    }

    location.reload();
}


fetch("obstacle.json")
    .then(res => res.json())
    .then(data => {
        obstacles = data.map(obstacle =>
            new Obstacle(obstacle.x, obstacle.y, obstacle.width, obstacle.height, obstacle.color)
        );
    }); //making a maze by hand was hard!! 


fetch("collect.json")
    .then(res => res.json())
    .then(data => {
        collectibles = data.map(collect =>
            new Collectible(
                collect.x,
                collect.y,
                collect.size,
                collect.color,
                collect.value
            )
        );
    });

fetch("hazard.json")
    .then(res => res.json())
    .then(data => {
        hazards = data.map(hazard =>
            new Hazard(hazard.x, hazard.y, hazard.size, hazard.color)
        );
    });

setTimeout(startGame, 500);

if (score >= 50) {
    alert("You win!");
}