

var canvasElement2 = document.querySelector("#smallCanvas");
var context2 = canvasElement2.getContext("2d");
 
// the triangle
context2.beginPath();
context2.moveTo(2, 0);
context2.lineTo(252, 0);
context2.lineTo(127, 100);
context2.closePath();
 
// the outline
context2.lineWidth = 6;
context2.strokeStyle = '#3B788F';
context2.stroke();
 
// the fill color
context2.fillStyle = "#FFF";
context2.fill();


