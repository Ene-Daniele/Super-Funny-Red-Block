let canvas;
let context;

window.onload = function(){
    canvas = document.getElementById("GameCanvas");
    context = canvas.getContext("2d");

    setInterval(step, 1000/50)
}