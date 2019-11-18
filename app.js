let cols = 5;
let rows = 5;
let grid = new Array(cols);

function setup() {
    createCanvas(400, 400);
    console.log('A*');

    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }

    console.log(grid);
}

function draw() {
    background(0);
}