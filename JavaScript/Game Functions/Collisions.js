function singleCollisionStop(box){

    if (Player.y < (box.y + box.height) & (Player.y + Player.height) > box.y){
        if ((Player.x + Player.width + Player.hsp) > box.x & Player.x + Player.hsp < (box.x + box.width)){
           
            while ((Player.x + Player.width + Math.sign(Player.hsp)) < box.x & Player.x + Math.sign(Player.hsp) < (box.x + box.width)){
                Player.x += Math.sign(Player.hsp);
            }

            Player.hsp = 0;
        }
    }

    if (Player.x < (box.x + box.width) & (Player.x + Player.width) > box.x){
        if ((Player.y + Player.height + Player.vsp) > box.y & Player.y + Player.vsp < (box.y + box.height)){
          
            while ((Player.y + Player.height + Math.sign(Player.vsp)) < box.y & Player.y + Math.sign(Player.vsp) < (box.y + box.height)){
                Player.y += Math.sign(Player.vsp);
            }

            Player.vsp = 0;

            if (Player.y + Player.height < box.y){
                Player.onGround = true;
                Player.jumpTime = 100;
            } else {
                Player.jumpTime -= 30;
            }
        }

        if (Player.y + Player.height > box.y & Player.y < box.y + (box.height / 2)){
            Player.y -= 2;
        }
        if (Player.y < box.y + box.height & Player.y + Player.height > box.y + (box.height / 2)){
            Player.y += 2;
        }
    } else {
        if (!Player.skills.groundHop){
            Player.onGround = false;
        }
    }

}

function multiCollisionStop(box){

    for(let i = 0; i < box.length; i++){

        singleCollisionStop(box[i]);
    }
}