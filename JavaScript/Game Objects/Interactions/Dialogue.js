class DialogueBox extends GameObject {

    constructor(posX, posY, who, message, once){
        super(posX, posY -1, 50, 50, "rgb(0,0,0, 0.0)");

        this.repeat = true;
        this.once = once;

        this.inDialogue = false;

        this.dialogueBox = {
            x: 0,
            y: 550,
            width: 1470,
            height: 150,
            color: "rgb(0,0,0, 0.7)",

            texts: message,
            textIndex: -1,
            speaker: who,
        };
    }

    //(0, 550, 1470, 150, "rgb(0,0,0, 0.7)")

    behaviour(){

        if (this.inDialogue){

            if (keyboard.interact){

                keyboard.interact = false;

                if (this.dialogueBox.textIndex +1 < this.dialogueBox.texts.length){

                    this.dialogueBox.textIndex++;

                } else {
                    this.inDialogue = false;
                    this.dialogueBox.textIndex = -1;
                }
            }

            if (this.dialogueBox.textIndex < 0 && this.inDialogue){
                this.dialogueBox.textIndex = 0;
            }
            
            singleDraw(this.dialogueBox);
            textDraw(this.dialogueBox.texts[this.dialogueBox.textIndex], 20, 600);

            Player.hsp = 0;
            if (keyboard.jump){
                Player.vsp = 0;
            }
        }

    }

    collision(){

        this.behaviour();
        
        if ((
            Player.x + Player.width ) > this.x && 
            Player.x  < (this.x + this.width) && 
            (Player.y + Player.height ) > this.y &&
            Player.y  < (this.y + this.height)){
            
            if (this.repeat){
                
                textDraw("X", this.x + 8, Player.y - 40)        
                if (keyboard.interact){

                    this.inDialogue = true;
                    if (this.once){this.repeat = false;}
                }
            }
        }
    }
}