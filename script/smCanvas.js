$(document).ready(function () {

var canvasElement2 = document.querySelector("#smallCanvas");
var context = canvasElement2.getContext("2d");
 
// the triangle
context.beginPath();
context.moveTo(2, 0);
context.lineTo(252, 0);
context.lineTo(127, 100);
context.closePath();
 
// the outline
context.lineWidth = 6;
context.strokeStyle = '#3B788F';
context.stroke();
 
// the fill color
context.fillStyle = "#FFF";
context.fill();

});
