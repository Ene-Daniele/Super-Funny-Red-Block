const LVL0 = new Level(
    [
        new MovingBlock(800, 350, 150, 50, {a: 900, b: 1200}),
        new MovingBlock(500, 500, 150, 50, {a: 50, b: 1200}),

        new Spring(700, 300),

        new Block(300, 400, 150, 100, "white"),
        new Block(700, 300, 100, 100, "white"),
        new Block(350, 200, 100, 50, "white"),

        new DialogueBox(375, 150, "my mom", [
            "i am in your walls",
            "you shuoldnt look",
            "ok lmao"
        ], true),
        new DialogueBox(350, 400, "my mom", [
            "Welcome to the test level",
            "lmao",
            "alright lol im gonna go ahve dinner byeee"
        ], false)
    ]
);