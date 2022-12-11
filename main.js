canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width_of_line=3;
mouseEvent='empty';
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("Color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mousedown";
}
    

    if(mouseEvent=my_mousedown){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        moveTo(new_height, new_width)


canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
    
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e){
        mouseEvent="mouseleave";
    }

        canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth= width_of_line;
         ctx.moveTo(last_postion_of_x, last_postion_of_y);
        ctx.lineTo (current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_postion_of_x=current_position_of_mouse_x;
    last_postion_of_y=current_position_of_mouse_y;
    mouseEvent="mousemove"
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth= width_of_line;
    console.log ("last_postion of x and y corritons = ");
    console.log ("x = " + last_postion_of_x + "y =" + last_postion_of_y);
    ctx.moveTo(last_postion_of_touch_x, last_postion_of_touch_y);
    console.log("current position of x and y corritons = ");
    console.log("x = "+ current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo (current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
last_postion_of_touch_x = current_position_of_touch_x;
last_postion_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
 width_of_line=document.getElementById("Width").value;
 color=document.getElementById("Color").value;
 console.log(touchstart);
last_postion_of_x = e.touches[0].clientX-canvas.offsetLeft
last_postion_of_y= e.touches[0].clientY-canvas.offsetTop
}