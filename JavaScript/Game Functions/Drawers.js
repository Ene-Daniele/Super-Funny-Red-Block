function singleDraw(box){

    context.fillStyle = box.color;
    context.fillRect(box.x, box.y, box.width, box.height);
}

function multiDraw(box){
    
    for(let i = 0; i < box.length; i++){
        context.fillStyle = box[i].color;
        context.fillRect(box[i].x, box[i].y, box[i].width, box[i].height);
    }
}