let canvas;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style("z-index",-2);
    //background(125);
    createCanvas(400,400,WEBGL);
    angleMode(DEGREES);

}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

function draw(){
    background(30)
    rotateX(60)
    noFill()
    stroke(255,255,50)

for (var i = 0; i < 50; i++){

    var r = map(sin(frameCount/2),-1,1,100,200)
    var g = map(i,0,50,100,200)
    var b  = map(cos(frameCount),1,1,200,100)

    rotate(frameCount/20)

    beginShape()
    for (var j = 0; j < 360; j += 60){
        var rad = i * 3
        var x = rad * cos(j)
        var y = rad * sin(j)
        var z = sin(frameCount * 2 + i * 5) * 50

        vertex(x,y,z)
    }
    endShape(CLOSE)
}

}

//function mouseMoved(){
    //drawThing(mouseX,mouseY);
    //drawThing(mouseX-50,mouseY+75);
//}

//function drawThing(_x,_y){
    //strokeWeight(0);
    //fill(random(200,255),random(200,255),random(200,255));
   //ellipse(_x,_y,30,30);
//}