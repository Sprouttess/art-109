
const mazeLayout = [
    [1,0,0,1,3],
    [1,1,0,1,0],
    [0,1,1,1,0],
    [0,0,0,1,0],
    [2,1,1,1,0]
];

//maze properties
// 0 = wall
// 1 = path
// 2 = player start
// goal

const maze = document.getElementById('maze');
const numRows = mazeLayout.length;
const numCols = mazeLayout[0].length;
let playerPos = { x: 0, y:4};

function drawMaze() {
    maze.innerHTML = '';
        for (let y = 0; y < numRows; y++) {
            for (let x = 0; x < numCols; x++) {

                const cell = document.createElement('div');
                cell.classList.add('cell');
                const value = mazeLayout[y][x];

                if (value === 0) cell.classList.add('wall');
                if (x === playerPos.x && y === playerPos.y) {
                    cell.classList.add('player');
                } else if (value === 3) {
                    cell.classList.add('goal');
                }
                maze.appendChild(cell);
            }
        }
}

function movePlayer(dx, dy) {
    const newX = playerPos.x + dx;
    const newY = playerPos.y + dy;
    if (
        newX >= 0 && newX < numCols &&
        newY >= 0 && newY < numRows &&
        mazeLayout[newY][newX] !== 0
    ) {
        playerPos = { x: newX, y: newY};
        drawMaze();
        if (mazeLayout[newY][newX] === 3) {
            setTimeout(() => alert('YOUVE ESCAPED! CONGRATS!'), 100)
        }
    }
}

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w': movePlayer(0, -1); break; //up
        case 's': movePlayer(0, 1); break; //down
        case 'a': movePlayer(-1, 0); break; //left
        case 'd': movePlayer(1, 0); break; //right
    }
});

drawMaze();