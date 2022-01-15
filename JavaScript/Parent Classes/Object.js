class GameObject {

    constructor(posX, posY, width, height, color){

        this.x = posX;
        this.y = posY;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}