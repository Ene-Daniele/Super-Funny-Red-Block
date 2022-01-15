function step(){
    
    context.clearRect(0,0,canvas.width,canvas.height);

    singleDraw(Player);

    walk();
    jump();
    gravity(Player);

    LVL0.update();

    Player.x += Player.hsp;
    Player.y += Player.vsp;
}