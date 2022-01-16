function step(){
    
    context.clearRect(0,0,canvas.width,canvas.height);

    singleDraw(Player);

    walk();
    jump();
    gravity(Player);

    LVL0.update();

    //TODO Make an actual death function
    if (Player.y > LVL0.map[5].y){LVL0.reload();}

    Player.x += Player.hsp;
    Player.y += Player.vsp;
}