keyboard = {
    right: false,
    left: false,
    up: false,
    down: false,

    jump: false,
    slash: false,
    dash: false,

    interact: false,
    intReleased: true,
}

document.addEventListener("keydown", (event) => {
    
    switch (event.key){

        case "ArrowRight":
            keyboard.right = true;
            break;

        case "ArrowLeft":
            keyboard.left = true;
            break;

        case "ArrowUp":
            keyboard.up = true;
            break;

        case "ArrowDown":
            keyboard.down = true;;
            break;

        case "a":
        case "A":
            keyboard.jump = true;
            break;
            
        case "s":
        case "S":
            keyboard.slash = true;
            break;

        case "d":
        case "D":
            keyboard.dash = true;
            break;

        case "x":
        case "X":
            if (keyboard.intReleased){
                keyboard.interact = true;
                keyboard.intReleased = false;
            }
            break;
    }
});

document.addEventListener("keyup", (event) => {
    
    switch (event.key){

        case "ArrowRight":
            keyboard.right = false;
            break;

        case "ArrowLeft":
            keyboard.left = false;
            break;

        case "ArrowUp":
            keyboard.up = false;
            break;

        case "ArrowDown":
            keyboard.down = false;;
            break;

        case "a":
        case "A":
            keyboard.jump = false;
            break;
            
        case "s":
        case "S":
            keyboard.slash = false;
            break;

        case "d":
        case "D":
            keyboard.dash = false;
            break;
            
        case "x":
        case "X":
            keyboard.intReleased = true;
            keyboard.interact = false;
            break;
    }
});