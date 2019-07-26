let red = [255, 0, 0];
let blue = [0, 17, 255];
let yellow = [246, 255, 0];
let white = [255, 255, 255];
let brown = [145, 65, 0];
let mouseColor = white;
let mouseSize = 40;

function setup() {
    createCanvas(500, 500);
    background(0, 0, 0);
}

function mouseDragged() {
        fill(mouseColor);
        noStroke();
        circle(mouseX, mouseY, mouseSize);
}

function draw() {
    fill(red);
    rect(50, 50, 40, 40);
    fill(blue);
    rect(50, 110, 40, 40);
    fill(yellow);
    rect(50, 170, 40, 40);
    fill(250, 30, 650);
    rect(50, 440, 40, 40); 
    fill(255, 255, 255);
    rect(50 , 230, 40, 40)
    // fill(255, 255, 255);
    // circle(190, 460, 40, 40);
    // fill(255, 255, 255);
    // rect(120, 440, 40, 40);
    // fill(255, 255, 255);
    // triangle(240, 440, 220, 480, 260, 480);
}

function  mouseClicked(){
    let x = mouseX;
    let y = mouseY;
        if (x > 50 && x < 90 && y > 50 && y < 90 ) {
            mouseColor = red;
        } else if (x > 50 && x < 90 && y > 110 && y < 150 ){
            mouseColor = blue;
        } else if (x > 50 && x < 90 && y > 170 && y < 210 ){
            mouseColor = yellow;
        } else if (x > 50 && x < 90 && y > 440 && y < 480) {
            background(0, 0, 0);
        } else if (x > 50  && x < 90 && y > 230 && y < 270) {
            mouseColor = white;
        }
}