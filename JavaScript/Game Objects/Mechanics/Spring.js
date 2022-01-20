class Spring extends GameObject {

    //TODO Make the spring able to be put on other stuff like moving blocks

    constructor(posX, posY, base){

        super(posX +10, posY -15, 40, 15, "orange");
        this.base = base;
        this.hsp = 0;
    }

    collision(){

        try{
            this.hsp = this.base.hsp;
        } catch (error){}

        this.x -= Math.sign(Player.hsp) / (cameraStrength * CHAPTER1[levelIndex].map.length);
        
        if ((
        Player.x + Player.width + Player.hsp) > this.x && 
        Player.x + Player.hsp < (this.x + this.width) && 
        (Player.y + Player.height + Player.vsp) > this.y &&
        Player.y + Player.vsp < (this.y + this.height)){
            
            while ((Player.x + Player.width + Math.sign(Player.hsp)) < this.x & Player.x + Math.sign(Player.hsp) < (this.x + this.width)){
                Player.x += Math.sign(Player.hsp);
            }
            while ((Player.y + Player.height + Math.sign(Player.vsp)) < this.y & Player.y + Math.sign(Player.vsp) < (this.y + this.height)){
                Player.y += Math.sign(Player.vsp);
            }

            Player.vsp = -13;
            Player.hsp += Math.sign(Player.hsp) * 5;

        }


        this.x += this.hsp;
    }
}