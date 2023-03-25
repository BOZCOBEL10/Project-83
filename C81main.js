canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,60,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){
    color =document.getElementById("color").value;
    console.log("The color is "+color);
    mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    mouse_y = e.touches[0].clientY - canvas.offsetTop;
    console.log("x = " + mouse_x+", y = " + mouse_y);
    circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x,mouse_y,60,0,2*Math.PI);
    ctx.stroke();
}

function ClearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}