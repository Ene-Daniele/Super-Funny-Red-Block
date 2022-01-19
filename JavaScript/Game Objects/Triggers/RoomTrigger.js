class RoomTrigger extends GameObject {

    constructor(posX, posY, width, height, roomID, spawn){

        super(posX, posY, width, height, "pink")
        this.roomID = roomID;
        this.spawn = spawn;
    }

    collision(){
        
        if ((
        Player.x + Player.width + Player.hsp) > this.x && 
        Player.x + Player.hsp < (this.x + this.width) && 
        (Player.y + Player.height + Player.vsp) > this.y &&
        Player.y + Player.vsp < (this.y + this.height)){

            levelIndex = this.roomID;
            Player.x = this.spawn.x;
            Player.y = this.spawn.y;
        }
    }
}