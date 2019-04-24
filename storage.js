var canvasElement = document.querySelector("#myCanvas");
var context = canvasElement.getContext("2d");
var cwidth = 850;

// the triangle
context.beginPath();
context.moveTo(15, 5);
context.lineTo(cwidth, 5);
context.lineTo(cwidth*.48, 250);
context.closePath();
 
// the outline
context.lineWidth = 10;
context.strokeStyle = '#0C455B';
context.stroke();
 
// the fill color
context.fillStyle = "#FFF";
context.fill();





// https://jsfiddle.net/lannymcnie/4yy08pax/
var stage = new createjs.Stage("canvas");

var c = new createjs.Shape();
c.graphics.f("#f00").dc(0,0,50); // Drawn a 100x100 circle from the center

var t = new createjs.Text("Resize the browser/frame to redraw", "24px Arial bold", "#000");
t.x = t.y = 20;
stage.addChild(c, t);

window.addEventListener("resize", handleResize);
function handleResize() {
    var w = window.innerWidth-2; // -2 accounts for the border
    var h = window.innerHeight-2;
    stage.canvas.width = w;
    stage.canvas.height = h;
    //
    var ratio = 100/100; // 100 is the width and height of the circle content.
    var windowRatio = w/h;
    var scale = w/100;
    if (windowRatio > ratio) {
        scale = h/100;
    }
    // Scale up to fit width or height
    c.scaleX= c.scaleY = scale; 
    
    // Center the shape
    c.x = w / 2;
    c.y = h / 2;
        
    stage.update();
}
       
handleResize(); // First draw