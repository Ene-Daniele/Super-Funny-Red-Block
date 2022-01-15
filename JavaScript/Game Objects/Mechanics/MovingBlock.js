class MovingBlock extends GameObject {

    constructor(posX, posY, width, height, nodes){

        super(posX, posY, width, height, "green")

        //Speed attributes
        this.hsp = 0;

        this.nodes = nodes; //Destinations
        this.bReached = false;
        this.moveSpeed = 5;
    }

    behaviour(){

        //If node B is reached return to Node A
        if (this.x > this.nodes.b){
            this.bReached = true;
        }
        if (this.x < this.nodes.a){
            this.bReached = false;
        }
        
            if (!this.bReached){
                /*The speed of the block is equal to its move speed,
                multiplicated by the sign of the distance between the position of the block and its next destination plus its current speed*/
                this.hsp = Math.sign(this.hsp + this.nodes.b - this.x) *this.moveSpeed;
            } else {
                this.hsp = Math.sign(this.hsp + this.nodes.a - this.x) *this.moveSpeed;
            }

        this.x += this.hsp;
    }

    collision(){

        this.behaviour();
        
        if (Player.y < (this.y + this.height) & (Player.y + Player.height) > this.y){
            if ((Player.x + Player.width + Player.hsp) > this.x & Player.x + Player.hsp < (this.x + this.width)){
               
                while ((Player.x + Player.width + Math.sign(Player.hsp)) < this.x & Player.x + Math.sign(Player.hsp) < (this.x + this.width)){
                    Player.x += Math.sign(Player.hsp);
                }

                Player.hsp = this.hsp; //Push the player if on sides (minus the sign so the player doesn stick to it)

            }
        }

        if (Player.x < (this.x + this.width) & (Player.x + Player.width) > this.x){

            if ((Player.y + Player.height + Player.vsp) > this.y & Player.y + Player.vsp < (this.y + this.height)){

                while ((Player.y + Player.height + Math.sign(Player.vsp)) < this.y & Player.y + Math.sign(Player.vsp) < (this.y + this.height)){
                    Player.y += Math.sign(Player.vsp);
                }
               


                if (Player.y + Player.height < this.y){
                    
                    Player.vsp = 0; //Dont let the player fall through
                    Player.hsp = this.hsp; //Give the player the platform's speed
                    Player.hsp += (Player.walkSpeed * (keyboard.right - keyboard.left) *2) //Before letting the player move along with said speed
    
                    Player.onGround = true;
                    Player.jumpTime = 100;
                } else {
                    Player.jumpTime = 0;
                    Player.y += 1;
                }
            }
    
            if (Player.y + Player.height > this.y & Player.y < this.y + (this.height / 2)){
                Player.y -= 2;
            }
            if (Player.y < this.y + this.height & Player.y + Player.height > this.y + (this.height / 2)){
                Player.y += 2;
            }

        } else {

            if (!Player.skills.groundHop){
                Player.onGround = false;
            }
        }
    }
}