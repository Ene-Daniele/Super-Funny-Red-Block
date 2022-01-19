let levelIndex = 0;

function step(){
    
    context.clearRect(0,0,canvas.width,canvas.height);

    singleDraw(Player);

    walk();
    jump();
    gravity(Player);

    CHAPTER1[levelIndex].update();

    //TODO Make an actual death function

    Player.x += Player.hsp;
    Player.y += Player.vsp;

}