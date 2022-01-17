class Level {

    constructor(givenMap){

        this.map = givenMap;
    }

    update(){

        for(let i = 0; i < this.map.length; i++){
            
            this.map[i].draw();
            this.map[i].collision();
            cameraPan(this.map[i], cameraStrength);
        }
    }

    //TODO Make a map reset
    reload(){

        Player.x = Player.checkPoint.x;
        Player.y = Player.checkPoint.y;
        Player.vsp = 0;
    }
}