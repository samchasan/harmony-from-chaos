function preload() {
    connectKinect();
}


function setup() {
    createCanvas(800, 600);
    background(0);
    makeParticles();
    makeYoyos();
}


function draw() {
   background(0, 15)
   drawSprings();
   // drawBodylines();
   drawParticles()
   
}


