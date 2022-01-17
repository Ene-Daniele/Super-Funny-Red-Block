//Why are all "how to make a camera in a 2d game with javascript" videos like "uuh uuh you gotta move the background xdxdxd"
//I mean it works for games that have a png as a bg and thats it, but come on i had to figure out this all on my own, AGAIN
//I couldnt get relevant help from google ONCE during this endeavor

function cameraPan(box, strength){

    /*
    TODO Add a camera strength parameter wich is mutliplied by that 30 over there, so like ok so like right
    TODO so what i was thinking was like << distanceX = ((screen.availWidth / 2 - Player.x) / (30 * strength)) >>
    TODO and then also << Player.x += distanceX / (8.942854 * strength); >>
    TODO and then like strength is either 1, or 2, or 3, etc depending on how strong it must be. (1 is the default)
    */

    distanceX = ((screen.availWidth / 2 - Player.x) / (30)); // ? sceen.availWidth is AMAZING <3<3<3
    // * I need this variable because it changes overtime, very slightly but it does, so i need the value once every function.

    box.x += distanceX;
    
    Player.x += distanceX / 8.942854;
    Player.checkPoint.x += distanceX / (8.942854 * 2);
    Player.checkPoint.x += distanceX / (8.942854 * 2);

    try {
        box.nodes.a += distanceX;
        box.nodes.b += distanceX;
    } catch(error){
        //The only error its gonna throw is "i dont have nodes blah blah" i need this for special objects like moving platforms
    }

    // Its gonna keep changing the players X value with minuscule values so when it reaches this, i round it up.
    //TODO Do one for the bigger value aswell, like the right side, this is only for the left side
    if (Player.x == 767.311861849626){ 
        Player.x = 768;
    }
}   