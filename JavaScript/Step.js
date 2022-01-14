function step(){
    
    context.clearRect(0,0,canvas.width,canvas.height);

    singleDraw(Player);

    walk();
    jump();
    gravity(Player);

    multiDraw(LVL0.blocks);
    multiCollisionStop(LVL0.blocks);

    Player.x += Player.hsp;
    Player.y += Player.vsp;
}