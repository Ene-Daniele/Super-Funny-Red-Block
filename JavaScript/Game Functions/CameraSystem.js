//Why are all "how to make a camera in a 2d game with javascript" videos like "uuh uuh you gotta move the background xdxdxd"
//I mean it works for games that have a png as a bg and thats it, but come on i had to figure out this all on my own, AGAIN
//I couldnt get relevant help from google ONCE during this endeavor
//EDIT: I simplified it down to 2 lines, lmao im genuinely reatarded, more actually, the funny try & catch 

function cameraPan(box, panStrength, mapArray){

    box.x += (((screen.availWidth / 2) - Player.x) / panStrength) * mapArray.length;

    try {
        box.nodes.a += (((screen.availWidth / 2) - Player.x) / panStrength) * mapArray.length;
        box.nodes.b += (((screen.availWidth / 2) - Player.x) / panStrength) * mapArray.length;
    } catch (error) {
        //! I need this for special objects such as the Moving Blocks
    }

    Player.x += ((screen.availWidth / 2) - Player.x) / panStrength;
}   