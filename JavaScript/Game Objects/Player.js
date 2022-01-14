let grv = 0.4;

var Player = {

    color: "red",

    x: 300,
    y: 300,
    width: 50,
    height: 50,

    hsp: 0,
    vsp: 0,
    walkSpeed: 4,
    maxSpeed: 12,
    weight: 1,

    jumpTime: 100,
    onGround: false,

    skills: {
        doubleJump: false,
        dash: false,
        wallJump: false,
        groundHop: false
    },

}