class HomingThing extends GameObject {
    constructor(posX, posY){
        super(Player.x, Player.y, 50, 50, "blue")
        this.hsp = 0;
        this.vsp = 0;

        this.flyingSpeed = 1;
    }

    collision(){
        this.hsp = Math.sign(Player.x - this.x) * this.flyingSpeed;
        this.vsp = Math.sign(Player.y - this.y) * this.flyingSpeed;

        console.log(this.vsp);
        console.log(this.hsp);
        this.x += this.hsp;
        this.y += this.vsp;
    }
}