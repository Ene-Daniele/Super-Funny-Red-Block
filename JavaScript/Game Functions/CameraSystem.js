//Why are all "how to make a camera in a 2d game with javascript" videos like "uuh uuh you gotta move the background xdxdxd"
//I mean it works for games that have a png as a bg and thats it, but come on i had to figure out this all on my own, AGAIN
//I couldnt get relevant help from google ONCE during this endeavor

function cameraPan(box){

    distanceX = ((screen.availWidth / 2 - Player.x) / 30); // ? sceen.availWidth is AMAZING <3<3<3
    // * Also i need this variable because it changes overtime, very slightly but it does, so i need the value once every function.

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
    if (Player.x == 767.311861849626){ 
        Player.x = 768;
    }
}   

/*
? This is full of funny numbers and you might ask, how did i get to those? You wouldnt understand.
? The amount of sheer intelligence requiered for those mathematical calculations is beyond your comprehension
? and i truly-

? TRIAL AND ERROR. I KEPT TRYING TIL I GOT CLOSER AND CLOSER AND CLOSER FOR 3 HOURS JESUS CHRIST 
*/