class CameraTrigger extends Trigger {
    
    constructor(posX, posY, width, height, strength){
        super(posX, posY, width, height)
        this.strength = strength;
    }

    action(){
        cameraStrength = this.strength;
    }
}