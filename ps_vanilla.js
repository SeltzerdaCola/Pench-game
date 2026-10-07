export const story = {
    p_start: [
        "There is a pench outside your house.",
        "pics/pench_placeholder.png",
        [
            [[["_clone", "@penchsuit"], ["_love", "@dress"], ["p_talk"]], "Talk"],
            ["house", "Go to your house", [["#good", "#bad", "#backrooms"]] ],
            ["_wheel", "Go to your motorcycle", ["carkey"]]
        ]
    ],
    
    
    _wheel: [
    	"You went on a ride! (pench also had a motorcycle and overtook you)<br><b>WHEEL ENDING</b>",
    	"pics/wheel.jpeg",
    	"wheel"
    ],
    
    p_talk: [
        "Pench asks you: 'What is 1+1?'",
        "pics/pench_placeholder.png",
        [
            ["_2", "Say 2"],
            ["_11", "Say 11"],
            ["_coffee", "Give him coffee", ["coffee"], ["!coffee"]],
            ["_guitar", "Give him the guitar", ["guitar"], ["!guitar"]],
            ["p_run", "Slap him with hanger and run", ["hanger"], ["!hanger"]],
            ["_curse", "Ragebait him"]
        ],
    ],
    
    _love: [
    	"Pench.. fell in love with you??!!",
    	"pics/love.jpeg",
    	"love"
    ],
    
    _clone: [
    	"Pench.. is confused with your suit?<br>",
    	"pics/pench_placeholder.png",
    	"clone"
    ],
    
    _2: [
        "Pench is happy! :D",
        "pics/pench_placeholder.png",
        "good"
    ],
    
    _11: [
        "Pench is angry! >:(",
        "pics/pench_placeholder.png",
        "bad"
    ],
    
    _coffee: [
    	"Pench likes the coffee!<br>You became friends!",
    	"pics/pench_placeholder.png",
    	"friends"
    ],
    
    _guitar: [
    	"Pench..started playing the guitar! (It was only 3 notes but meh)",
    	"pics/pench_placeholder.png",
    	"guitar pench"
    ],
    
    p_run: [
    	"The hanger broke on impact. Pench is now chasing you!",
    	"pics/pench_placeholder.png",
    	[
    		["r_sewers", "Hide in the sewers"],
    		["dian", "Go to the mysterious man"],
    		["_surrender", "Surrender"]
    	]
    ],
    
    r_sewers: [
    	"You are inside the sewers. There are a group of creatures deeper down the sewer.",
    	"pics/pench_placeholder.png",
    	[
    		["_penchlings", "Inspect"]
    	]
    ],
    
    _penchlings: [
    	"It turns out they were penchlings!",
    	"pics/pench_placeholder.png",
    	"penchlings"
    ],
    
    dian: [
    	"Pench seems to be afraid of the mysterious man.",
    	"pics/pench_placeholder.png",
    	[
    		[[["_dissapointed", "@dress"], ["_mistook", "@penchsuit"], ["_dian"]], "Talk"]
    	]
    ],
    
    _dian: [
    	"The mysterious man.. is Dian??!!<br>'Watcha doing kid.'",
    	"pics/pench_placeholder.png",
    	"dian"
    ],
    
    _dissapointed: [
    	"The mysterious man.. is Dian??!!<br>'A dress?! Son, I am dissapointed of you.'",
    	"pics/pench_placeholder.png",
    	"dissapointed"
    ],
    
    _mistook: [
    	"The mysterious man.. mistook you for pench??!! (You got head trauma)",
    	"pics/pench_placeholder.png",
    	"mistook"
    ],
    
    _surrender: [
    	"You surrendered to pench. I guess this is it.",
    	"pics/pench_placeholder.png",
    	"doomed"
    ],
    
    _curse: [
        "Pench is REALLY angry...<br>He teleports you to the backrooms!",
        "pics/pench_placeholder.png",
        "backrooms"
    ],
    
    house: [
       "You are inside your house.",
       "pics/pench_placeholder.png",
       [
    		["h_bathroom", "Go to the bathroom"],
    		["h_room", "Go to your room"],
    		["h_couch", "Go to the couch area"],
    		["h_kitchen", "Go to your kitchen"],
    		["p_start", "Go outside"]
       ],
       ["-#FFD490"]
    ],
    
    h_bathroom: [
    	"You are in your bathroom.",
    	"pics/pench_placeholder.png",
    	[
    		["h_riamonds", "Check the shiny thing"],
			[[["_fling", "@dress", "coffee", "#good", "#sleep"], ["_bathtub"]], "Go to your bathtub"],
    		["house", "Go back"]
    	]
    ],
    
    h_riamonds: [
    	"Its riamonds!! But you remembered..",
    	"pics/pench_placeholder.png",
    	[
    		["_lapench", "What?"],
    		["h_bathroom", "Go back"]
    	]
    ],
    
    _lapench: [
    	"In order to find riamonds,you must find <i>LA PENCH</i>",
    	"pics/pench_placeholder.png",
    	"la-pench"
    ],
    
    _bathtub: [
    	"You got in the bathtub...but pool pench is already there!",
    	"pics/pench_placeholder.png",
    	"pool pench"
    ],
    
    _fling: [
    	"You somehow performed a really niche game glitch and got flinged!",
    	"pics/fling.jpeg",
    	"fling"
    ],
    
    h_room: [
    	"You are in your room.",
    	"pics/pench_placeholder.png",
    	[
    		["_sleep", "Sleep"],
    		["h_closet", "Check your closet"],
    		["h_room", "$20 on your desk", ["--"], ["$20", ":Ka-ching!"]],
    		["house", "Go back"],
    		["h_room", "Random button tgat does nothimg"]
    	]
    ],
    
    _sleep: [
    	"You slept.",
    	"pics/pench_placeholder.png",
    	"sleep"
    ],
    
    h_closet: [
    	"You have a closet??!!",
    	"pics/pench_placeholder.png",
    	[
    		["h_closet", "Wear dress", ["!@dress"], ["@dress", ":You wore a... dress?"]],
    		["h_closet", "Wear pench suit", ["!@penchsuit"], ["@penchsuit", ":You wore something identical to pench's suit."]],
    		["h_closet", "Wear your cloth", ["!@d"], ["@d", ":You wore your cloth.. comfy."]],
    		["h_closet", "Get hanger", ["--"], ["hanger", ":Hanger acquired!"]],
    		["h_room", "Close closet"]
    	]
    ],
    
    h_couch: [
    	"You are in the living room, specifically, the couch area.",
    	"pics/pench_placeholder.png",
    	[
    		["c_tv", "Go to the tv"],
    		[[["sh_fin", "sh-fin"], ["c_shance"]], "Talk to shance"],
    		["house", "Go back"]
    	]
    ],
    
    c_tv: [
    	"The tv is off.",
    	"pics/pench_placeholder.png",
    	[
    		["_news", "Turn on"],
    		["h_couch", "Go back"]
    	]
    ],
    
    _news: [
    	"You turned on the tv. To no surprise, news pench is reporting!",
    	"pics/pench_placeholder.png",
    	"news pench"
    ],
    
    c_shance: [
    	"He is practising his guitar.<br>'What do you want?'",
    	"pics/pench_placeholder.png",
    	[
    		[[["sh_guitar", "coffee"], ["sh_noguitar", "!coffee"]], "I want your guitar"],
    		["h_couch", "Nothing (Go back)"]
    	]
    ],
    
    sh_guitar: [
    	"Okay, here you go. But i need that coffee. (yoink)",
    	"pics/pench_placeholder.png",
    	[
    		["h_couch", "Go back"]
    	],
    	["guitar", "sh-fin"]
    ],
    
    sh_noguitar: [
    	"I need something in return.",
    	"pics/pench_placeholder.png",
    	[["h_couch", "Okay (Go back)"]]
    ],
    
    sh_fin: [
    	"Arent you gonna practise with my guitar or something?",
    	"pics/pench_placeholder.png",
    	[["h_couch", "Go back"]]
    ],
    
    h_kitchen: [
    	"You are inside your kitchen.",
    	"pics/pench_placeholder.png",
    	[
    		["_pizza", "Eat pizza"],
    		["h_kitchen", "Get coffee", ["--"], ["coffee", ":Acquired coffee!"]],
    		["h_kitchen", "Get keys", ["!carkey", "#friends"], ["carkey", ":Key acquired!"]],
    		["house", "Go back"]
    	]
    ],
    
    _pizza: [
    	"You grabbed the pizza.. But pench stole it from you and ate it!",
    	"pics/pench_placeholder.png",
    	"pizza"
    ]
}

