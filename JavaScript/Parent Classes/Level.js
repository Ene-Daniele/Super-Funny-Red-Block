class Level {

    constructor(givenMap){

        this.map = givenMap;
    }

    //Make a camera instance here

    update(){

        for(let i = 0; i < this.map.length; i++){
            
            this.map[i].draw();
            this.map[i].collision();
        }
    }

    reload(){

        Player.x = Player.checkPoint.x;
        Player.y = Player.checkPoint.y;
        Player.vsp = 0;
    }
}