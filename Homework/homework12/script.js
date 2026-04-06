class Square{
    constructor(x, y, height, width, color)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;

        this.speedx = 0;
        this.speedy = 0;
    }
  
    get theX() { return this.x; }
    get theY() { return this.y; }
    get theHeight() { return this.height; }
    get theWidth() { return this.width; }
    get theColor() { return this.color; }
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = 50;
var y = 50;


var square1 = new Square(x, y, 20, 20, "#21523d");
var square2 = new Square(100, 100, 50, 50, "#989fe0");

square2.speedx = 3;
square2.speedy = 3;

setInterval(update, 1000 / 60);

function update() {

    square1.x = x;
    square1.y = y;

    square2.x += square2.speedx;
    square2.y += square2.speedy;

    if (square2.x <= 0 || square2.x + square2.width >= canvas.width) {
        square2.speedx *= -1;
    }
    if (square2.y <= 0 || square2.y + square2.height >= canvas.height) {
        square2.speedy *= -1;
    }

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + square1.width > canvas.width)
        x = canvas.width - square1.width;
    if (y + square1.height > canvas.height)
        y = canvas.height - square1.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (hasCollided(square1, square2)) {

        ctx.fillStyle = "#414a52";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        square1.width = 40;
        square1.height = 40;

        square2.width = 80;
        square2.height = 80;
    } else {
        square1.width = 20;
        square1.height = 20;

        square2.width = 50;
        square2.height = 50;
    }
  
    ctx.fillStyle = square1.color;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);

    ctx.fillStyle = square2.color;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "w") moveUp();
    if (event.key === "s") moveDown();
    if (event.key === "a") moveLeft();
    if (event.key === "d") moveRight();
});

function moveUp() { y -= 10; }
function moveDown() { y += 10; }
function moveLeft() { x -= 10; }
function moveRight() { x += 10; }

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < object2.y) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function playMusic() {
    document.getElementById("gameMusic").play();
}
    