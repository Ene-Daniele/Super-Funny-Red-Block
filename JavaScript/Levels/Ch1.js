const CHAPTER1 = [
    new Level( 90, {x: screen.availWidth/2, y: 300}, [
        
        new MovingBlock(-301, 600, 150, 50, {a:-800,b: -300}),
        birdNest = new Block(-1600, 600, 400, 300, "white"),
        new DialogueBox(-1400, 600, "Hatchlings", ["Chip! chip! chip!", "Chip-chirip!"], false),

        new Block(450, 400, 400, 300, "white"),
        new Block(400, 500, 400, 200, "white"),
        new Block(750, 500, 500, 200, "white"),
        new Block(0, 610, 1470, 100, "white"),
        
        new MovingBlock(1600, 600, 150, 50, {a:1601,b: 2000}),
        new Block(2400, 500, 500, 200, "white"),
        new MovingBlock(3200, 600, 150, 50, {a:3201,b: 3800}),
        new Block(4400, 600, 500, 200, "white"),

        new RoomTrigger(4600, 400, 50, 400, 1, {x: 300, y:300}),
    ]),
    new Level(90, {x: screen.availWidth/2, y: 300}, [

        new Block(0, 610, 1470, 100, "white"),
    ]),
];