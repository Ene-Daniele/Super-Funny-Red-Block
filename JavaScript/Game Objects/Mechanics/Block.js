class Block extends GameObject{

    constructor(posX, posY, width, height, color){

        super(posX, posY, width, height, color);
    }

    collision(){

        if (Player.y < (this.y + this.height) & (Player.y + Player.height) > this.y){
            if ((Player.x + Player.width + Player.hsp) > this.x & Player.x + Player.hsp < (this.x + this.width)){
               
                while ((Player.x + Player.width + Math.sign(Player.hsp)) < this.x & Player.x + Math.sign(Player.hsp) < (this.x + this.width)){
                    Player.x += Math.sign(Player.hsp);
                }
    
                Player.hsp = 0;
            }
        }
    
        if (Player.x < (this.x + this.width) & (Player.x + Player.width) > this.x){

            if ((Player.y + Player.height + Player.vsp) > this.y & Player.y + Player.vsp < (this.y + this.height)){
              
                while ((Player.y + Player.height + Math.sign(Player.vsp)) < this.y & Player.y + Math.sign(Player.vsp) < (this.y + this.height)){
                    Player.y += Math.sign(Player.vsp);
                }
    
                if (Player.y + Player.height < this.y + 20){
                    Player.vsp = 0;
                    Player.onGround = true;
                    Player.jumpTime = 100;
                } else {
                    Player.jumpTime = 0;
                    Player.vsp = 4;
                }
            }
    
            if (Player.y + Player.height > this.y & Player.y < this.y + 20){
                Player.y -= 2;
            }
            if (Player.y < this.y + this.height & Player.y + Player.height > this.y + 30){
                Player.y += 2;
            }

        } else {

            if (!Player.skills.groundHop){
                Player.onGround = false;
            }
        }
    }
}