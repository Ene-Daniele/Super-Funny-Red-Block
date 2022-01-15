function solidCollision(Object, box){ //If i later want to add like, other objects (ahem, Celeste jelly-)

    if (Object.y < (box.y + box.height) & (Object.y + Object.height) > box.y){
        if ((Object.x + Object.width + Object.hsp) > box.x & Object.x + Object.hsp < (box.x + box.width)){
           
            while ((Object.x + Object.width + Math.sign(Object.hsp)) < box.x & Object.x + Math.sign(Object.hsp) < (box.x + box.width)){
                Object.x += Math.sign(Object.hsp);
            }

            Object.hsp = 0;
        }
    }

    if (Object.x < (box.x + box.width) & (Object.x + Object.width) > box.x){
        if ((Object.y + Object.height + Object.vsp) > box.y & Object.y + Object.vsp < (box.y + box.height)){
          
            while ((Object.y + Object.height + Math.sign(Object.vsp)) < box.y & Object.y + Math.sign(Object.vsp) < (box.y + box.height)){
                Object.y += Math.sign(Object.vsp);
            }

            Object.vsp = 0;
        }

        if (Object.y + Object.height > box.y & Object.y < box.y + (box.height / 2)){
            Object.y -= 2;
        }
        if (Object.y < box.y + box.height & Object.y + Object.height > box.y + (box.height / 2)){
            Object.y += 2;
        }
    }
}