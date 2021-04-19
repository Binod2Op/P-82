var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mevent="empty";
var raduis=20;
var last_x;
var line_width=1;
var last_y;
var line_width=2;
var color="blue";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
  line_width=document.getElementById("width_of_line").value;
  raduis=document.getElementById("rad").value;
    mevent="mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;

    if (mevent == "mouseDown"){
        ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth=line_width;
ctx.arc(current_mouse_x, current_mouse_y, raduis, 0, 2*Math.PI);
ctx.stroke();
    }
    last_x = current_mouse_x;
    last_y = current_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mevent="mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mevent="mouseleave";
}

function clearArea() { ctx.clearRect(0, 0, canvas.width, canvas.height); }