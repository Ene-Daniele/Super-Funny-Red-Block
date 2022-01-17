class Trigger extends GameObject {
    constructor(posX, posY, width, height){
        super(posX, posY, width, height, "blue")
    }

    collision(){

        if ((
        Player.x + Player.width + Player.hsp) > this.x && 
        Player.x + Player.hsp < (this.x + this.width) && 
        (Player.y + Player.height + Player.vsp) > this.y &&
        Player.y + Player.vsp < (this.y + this.height)){
            
            this.action();
        }
    }
}