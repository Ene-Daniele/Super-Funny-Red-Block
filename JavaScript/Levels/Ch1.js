const CHAPTER1 = [
    room1 = new Level( 90, {x: screen.availWidth/2, y: 300}, [
        
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
        
        new RoomTrigger(4600, 200, 50, 400, 1, {x: 1000, y:500}),
        new Block(4500, 0, 1000, 400, "white"),
        new Block(4300, 600, 1000, 200, "white"),
    ]),
    room2 = new Level(120, {x: 1500, y: 500}, [

        new Block(0, 610, 2000, 100, "white"),
        new Block(0, 0, 1000, 400, "white"),
        new Block(0, 0, 800, 1000, "transparent"),

        new MovingBlock(2000, 600, 150, 50, {a:2001,b: 2500}),
        
        new MovingBlock(3849, 500, 150, 50, {a:2500,b: 3860}),
        new Block(3000, 400, 400, 100, "white"),
        new Block(3800, 400, 400, 100, "white"),
        new Block(3500, 0, 100, 400, "white"),

        new RoomTrigger(4000, 0, 50, 400, 2, {x: 1000, y:500}),
    ]),
    room3 = new Level(30, {x: 1000, y: 500}, [

        new Block(0, 600, 1500, 100, "white"),

        new Spring(1430, 600),

        new RoomTrigger(4000, 0, 50, 400, 3, {x: 1000, y:500}),
    ]),
];