var btn_red;
var btn_green;
var btn_blue;
var btn_purple;

var r = 0;
var g = 0;
var b = 0;

function setup(){
    createCanvas(400,400);
    btn_red = createButton("red");
    btn_red.position(100,50);
    btn_red.mousePressed(red_bg);

    btn_green = createButton("green");
    btn_green.position(250,50);
    btn_green.mousePressed(green_bg);

    btn_blue = createButton("blue");
    btn_blue.position(170,60);
    btn_blue.mousePressed(blue_bg);

    btn_purple = createButton("purple");
    btn_purple.position(170,90);
    btn_purple.mousePressed(purple_bg);
}

function draw(){
    background(r,g,b);
}

function red_bg(){
    r = 255;
    g = 0;
    b = 0;
}

function green_bg(){
    r = 0;
    g = 255;
    b = 0;
}

function blue_bg(){
    r = 0;
    g = 0;
    b = 255;
}

function purple_bg(){
    r = 100;
    g = 0;
    b = 100;
}