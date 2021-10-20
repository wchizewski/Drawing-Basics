// Drawing Basics

// Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas")
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// let's draw some stuff using the graphics context (ctx)

// DRAW RECTANGLES
// Set the outline(stroke) and fill colors
// Use any valid css colors: name, rgb(), rgba(), hex #FF0033

// Draw an outlined rectangle
ctx.strokeStyle = "purple";
ctx.strokeRect(50, 20, 150, 50); 
// Draw a filled square
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(225, 50, 50, 50);

// DRAW TEXT
// Filled Text
ctx.font = "42px Comic Sans MS";
ctx.fillStyle = "red";
ctx.fillText("Hello Canvas!", 300, 50); 

// Outlined Text
ctx.font = "30px Arial";
ctx.strokeStyle = "blue";
ctx.strokeText ("Hello Canvas!", 350, 100); 

// DRAW LINES
ctx.lineWidth = 4;
ctx.strokeStyle = "orange";
ctx.beginPath()
ctx.moveTo(500, 200);
ctx.lineTo(700, 150)
ctx.lineTo(600, 100)
// Draw the specified path
ctx.stroke(); 

// DRAW POLYGON
ctx.fillStyle = "cyan";
ctx.beginPath()
ctx.moveTo(500, 400);
ctx.lineTo(700, 350)
ctx.lineTo(600, 300)
ctx.closePath();
// Draw the specified path
ctx.fill(); 

// CIRCLES
ctx.lineWidth = 5;
ctx.strokeStyle= "#0000FF";
ctx.beginPath();
ctx.arc(100, 500, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.lineWidth = 2;
ctx.strokeStyle= "#FFFF00";
ctx.beginPath();
ctx.arc(200, 500, 20, 0, 2 * Math.PI);
ctx.fill();