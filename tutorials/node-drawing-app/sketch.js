
var socket;

function setup() {
    createCanvas(200, 200);
    background(51);

    socket = socket.io.connect('http://localhost:3000');
    socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    noStroke();
    fill(255,0,100);
    ellipse(data.x, data.y, 60, 60);
}

function mouseDragged() {
    console.log('Sending: ' + mouseX + ',' + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', data);

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 60, 60);
}

function draw() {

}