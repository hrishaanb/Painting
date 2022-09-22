var last_position_of_x, last_position_of_y;
var width = screen.width;
var height = screen.height;
new_width = screen.width - 70;
new_height = screen.height - 300;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    if (width < 992) {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown (e) {
        color = "black";
        width_of_line = 2;
        mouseevent = "mousedown"
    }
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup (e) {
        mouseevent = "mouseup"
    }
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave (e) {
        mouseevent = "mouseleave"
    }
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove (e) {
        mouseevent = "mousemove"
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        if (mouseevent == "mousedown") {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        canvas.moveTo();
        }
    }
    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart (e) {
        console.log("my_touchstart");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + ", y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + ", y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
    function clearArea () {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
