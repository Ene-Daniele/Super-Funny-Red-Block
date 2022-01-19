class Level {

    constructor(panStrength, checkpointN, givenMap){

        this.map = givenMap;
        
        this.panStrength = panStrength; //Default pan strength

        this.checkPoint = checkpointN;
    }

    update(){

        for(let i = 0; i < this.map.length; i++){
            
            this.map[i].draw();
            this.map[i].collision();
            cameraPan(this.map[i], this.panStrength, this.map);
        }
    }

    //TODO Make a map reset
    reload(){

        Player.x = this.checkPoint.x;
        Player.y = this.checkPoint.y;
        Player.vsp = 0;
    }
}