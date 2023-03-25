var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    radiuscircle = 1;

    var width = screen.width;
    var height = screen.height;
    new_width = screen.width - 70;
    new_height = screen.height - 300;

    if (width < 992){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }
 
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("widthoftheline").value;
        //Addictonal Activity ends
        radiuscircle = document.getElementById("Radius").value;

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }



canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
       console.log("my_touchmove");

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_touch_x,current_position_of_touch_y,radiuscircle,0,2*Math.PI);
        ctx.stroke();
    }




function TheJantior(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}