function walk(){

    if (Player.hsp < Player.maxSpeed && Player.hsp > -Player.maxSpeed){
        Player.hsp += Player.walkSpeed * (keyboard.right - keyboard.left);
    }
    Player.hsp -= Math.sign(Player.hsp) * 2;
}

function jump(){
    
    if ((Player.onGround || Player.jumpTime > 0) && keyboard.jump){
        Player.vsp = -5;
        Player.onGround = false;
        Player.jumpTime -= 5;
    } else { Player.jumpTime = 0; }
}

function gravity(box){
    
    box.vsp += box.weight * grv;
}

function wallJump(){

}

function dash(){
    
}