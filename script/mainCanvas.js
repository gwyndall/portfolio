
// Basic code for responsive canvas triangle:
// https://stackoverflow.com/questions/54805017/how-to-draw-triangle-programmatically-on-canvas-in-javascript
var canvasWidth = document.documentElement.clientWidth/2;
var canvasElement = document.querySelector("#myCanvas");
var context = canvasElement.getContext("2d");
// the width of the canvas
let cwidth = (canvasElement.width = canvasWidth),
    cx = cwidth / 2;
//the height of the canvas
let cheight = (canvasElement.height = cwidth/2.5),
    cy = 5;
//your data
let a = 30,
    b = 30;
// In this case you have an isosceles triangle since a = b = 30
// this triangle is circumscribed in a circle with a radius = 30
let R = canvasWidth/2 - 15;
// calculate the angle between the two sides of equal length
let angle = 120;

//draw the circumscribed circle:
// context.beginPath();
// context.arc(cx, cy, R, 0, 2 * Math.PI);
// context.stroke();


var triangle = {
    //the first vertex is in the left edge of the circle
    x1: cx - R,
    y1: cy,
    //the second vertex is on the circumscribed circle at 0 radians where R is the radius of the circle ( a = 30, b=30 )
    //you may decide to change this.
    x2: cx + R,
    y2: cy,
    //calculate the 3-rd vertex
    x3: cx,
    y3: 1.5 *  cheight * Math.sin(angle) 
};

context.beginPath();
context.moveTo(triangle.x1, triangle.y1);
context.lineTo(triangle.x2, triangle.y2);
context.lineTo(triangle.x3, triangle.y3);
context.closePath();
// the outline
context.lineWidth = 10;
context.strokeStyle = '#0C455B';
context.stroke();
 
// the fill color
context.fillStyle = "#FFF";
context.fill();

document.getElementById("logo").setAttribute('height', cheight/1.65);
document.getElementById("logo").setAttribute('width', cheight/1.65);

var lmargin = canvasWidth/2 - cheight/3.3 ;

document.getElementById("logo").style.marginTop = cheight/8 +'px';
document.getElementById("logo").style.marginLeft = lmargin+'px';
document.getElementsByClassName("whole").innerHTML = "fontSize = '1rem'";
