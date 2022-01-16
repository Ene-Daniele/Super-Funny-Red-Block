function singleDraw(box){

    context.fillStyle = box.color;
    context.fillRect(box.x, box.y, box.width, box.height);
}

function textDraw(text, x, y){

    context.fillStyle = "white";
    context.font = '48px serif';
    context.fillText(text, x, y);
}