// Drawing Basics

// Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas")
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Store images in variables
let htmlLogoImg = document.getElementById("frogimg")

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
// set drawing location
ctx.moveTo(500, 200);
// draw a line from current location to (700, 150)
ctx.lineTo(700, 150);
ctx.lineTo(600, 100);
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
// circle (0 to 2*PI) with a center of (100, 500) and radius of 50
ctx.arc(100, 500, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.fillStyle= "green";
ctx.beginPath();
// circle (0 to 2*PI) with center (250, 500) and radius 30
ctx.arc(200, 500, 30, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle= "#FFFF00";
ctx.beginPath();
// half circle (0 to PI) with center (250, 500) and radius 20
ctx.arc(200, 500, 20, 0, Math.PI);
ctx.fill();

// DRAW IMAGES
// draw image with top left corner of (200, 200)
ctx.drawImage(htmlLogoImg, 200, 200)
// draw image with top left corner of (200, 350) scale to 50 x 50
ctx.drawImage(htmlLogoImg, 200, 350, 50, 50)