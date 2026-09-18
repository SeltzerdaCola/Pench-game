export const story = {
    p_start: [
        "There is a pench here.",
        "pics/pench_placeholder.png",
        [
            ["p_talk", "Talk"],
            ["house", "Go to your house"]
        ]
    ],
    
    p_talk: [
        "Pench asks you: 'What is 1+1?'",
        "pics/pench_placeholder.png",
        [
            ["p_2", "Say 2"],
            ["p_11", "Say 11"],
            ["p_curse", "Curse him"]
        ]
    ],
    
    p_2: [
        "Pench is happy! :D<br><b>GOOD ENDING</b>",
        "pics/pench_placeholder.png",
        [
            ["p_start", "Restart"]
        ]
    ],
    
    p_11: [
        "Pench is angry! >:(<br><b>BAD ENDING</b>",
        "pics/pench_placeholder.png",
        [
            ["p_start", "Restart"]
        ]
    ],
    
    p_curse: [
        "Pench is REALLY angry...<br>He teleports you to the backrooms!<br><b>BACKROOMS ENDING</b>",
        "pics/pench_placeholder.png",
        [
            ["p_start", "Restart"]
        ]
    ],
    
    house: [
       "You are inside your house.",
       "pics/pench_placeholder.png",
       [
    		["h_bathroom", "Go to the bathroom"],
    		["h_room", "Go to your room"],
    		["h_kitchen", "Go to your kitchen"],
    		["p_start", "Go outside"]
       ]
    ],
    
    h_bathroom: [
    	"You are in your bathroom",
    	"pics/pench_placeholder.png",
    	[
    		["h_riamonds", "Check the shiny thing"],
    		["h_bathtub", "Go to your bathtub"],
    		["house", "Go back"]
    	]
    ],
    
    h_riamonds: [
    	"Its riamonds!! But you remembered..",
    	"pics/pench_placeholder.png",
    	[
    		["h_lapench", "What?"],
    		["h_bathroom", "Go back"]
    	]
    ],
    
    h_lapench: [
    	"In order to find riamonds,you must find <i>LA PENCH</i><br><b>LA PENCH ENDING</b>",
    	"pics/pench_placeholder.png",
    	[
    		["p_start", "Restart"]
    	]
    ],
    
    h_bathtub: [
    	"You got in the bathtub...but pool pench is already there!<br><b>POOL PENCH ENDING</b>",
    	"pics/pench_placeholder.png",
    	[
    		["p_start", "Restart"]
    	]
    ],
    
    h_room: [
    	"You are in your room.",
    	"pics/pench_placeholder.png",
    	[
    		["h_sleep", "Sleep"],
    		["house", "Go back"]
    	]
    ],
    
    h_sleep: [
    	"You slept.<br><b>SLEEP ENDING</b>",
    	"pics/pench_placeholder.png",
    	[
    		["p_start", "Restart"]
    	]
    ],
    
    h_kitchen: [
    	"You are inside your kitchen.",
    	"pics/pench_placeholder.png",
    	[
    		["h_pizza", "Eat pizza"],
    		["h_coffee", "Drink coffee"],
    		["house", "Go back"]
    	]
    ],
    
    h_pizza: [
    	"You grabbed the pizza.. But pench stole it from you and ate it!<br><b>PIZZA ENDING</b>",
    	"pics/pench_placeholder.png",
    	[
    		["p_start", "Restart"]
    	]
    ],
    
    h_coffee: [
    	"You drank the coffee!<br><b>COFFEE ENDING</b>",
    	"pics/pench_placeholder.png",
    	[
    		["p_start", "Restart"]
    	]
    ]
}

