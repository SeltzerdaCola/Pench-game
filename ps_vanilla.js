const ph_pic = "pics/pench_placeholder.png"

export const story = {
    start: [
        "Pench is outside your house.",
        ph_pic,
        [
            [[["_clone", ["@penchsuit"]], ["_love", ["@dress"]], ["p_talk"]], "Confront"],
            ["house", "Go to your house", [["#good", "#bad", "#backrooms"]] ],
            ["neighborhood", "Walk away", ["##4"]],
            ["roof", "Float up to the roof", ["balloon"], ["!balloon"]],
            ["_wheel", "Go to your motorcycle", ["carkey"]]
        ],
        ["--"]
    ],
    
    
    _wheel: [
    	"You went on a ride! (pench also had a motorcycle and overtook you)",
    	"pics/wheel.jpeg",
    	"wheel"
    ],
    
    p_talk: [
        "Pench asks you: 'What is 1+1?'",
        ph_pic,
        [
            ["_2", "Say 2"],
            ["_11", "Say 11"],
            ["_coffee", "Give him coffee", ["coffee"], ["!coffee"]],
            ["_guitar", "Give him the guitar", ["guitar"], ["!guitar"]],
            ["p_run", "Slap him with hanger and run", ["hanger"], ["!hanger"]],
            ["_curse", "Ragebait him"]
        ]
    ],
    
    _love: [
    	"Pench.. fell in love with you??!!",
    	"pics/love.jpeg",
    	"love",
    	["-#f578c7"]
    ],
    
    _clone: [
    	"Pench.. is confused with your suit?<br>",
    	ph_pic,
    	"clone"
    ],
    
    _2: [
        "Pench is happy! :D",
        ph_pic,
        "good"
    ],
    
    _11: [
        "Pench is angry! >:(",
        ph_pic,
        "bad"
    ],
    
    _coffee: [
    	"Pench likes the coffee!|nYou became friends!",
    	ph_pic,
    	"friends"
    ],
    
    _guitar: [
    	"Pench..started playing the guitar! (It was only 3 notes but meh)",
    	ph_pic,
    	"guitar pench"
    ],
    
    p_run: [
    	"The hanger broke on impact. Pench is now chasing you!",
    	ph_pic,
    	[
    		["r_sewers", "Hide in the sewers"],
    		["dian", "Go to the mysterious man"],
    		["_surrender", "Surrender"]
    	]
    ],
    
    r_sewers: [
    	"You are inside the sewers. There are a group of creatures deeper down the sewer.",
    	ph_pic,
    	[
    		[0, "Lure with cheese", ["cheese"], ["penchlings", "!cheese", ":It was penchlings!<br>They happily ate the cheese and are now following you."]],
    		["_penchlings", "Inspect"],
    		[[ ["_reunion", ["penchlings"]], ["_surrender", [], [":Pench was waiting outside. I guess this is it."]] ], "Go back"]
    	]
    ],
    
    _reunion: [
    	"Pench was waiting outside..<br>He saw the penchlings following you! They have finally reunited and had a happily ever after!!<br>(The penchlings still tickled you to unconsiousness)",
    	ph_pic,
    	"reunion"
    ],
    
    _penchlings: [
    	"It turns out they were penchlings!<br>They tickled you to unconsiousness.",
    	ph_pic,
    	"penchlings"
    ],
    
    dian: [
    	"Pench seems to be afraid of the mysterious man.",
    	ph_pic,
    	[
    		[[["_penzo", ["coffee"]], ["_dissapointed", ["@dress"]], ["_mistook", ["@penchsuit"]], ["_dian"]], "Talk"]
    	]
    ],
    
    _penzo: [
    	"The mysterious man.. is.. Penzo??!!!<br>Why you take my coffee...",
    	ph_pic,
    	"penzo"
    ],
    
    _dian: [
    	"The mysterious man.. is Dian??!!<br>'Watcha doing kid.'",
    	ph_pic,
    	"dian"
    ],
    
    _dissapointed: [
    	"The mysterious man.. is Dian??!!<br>'A dress?! Son, I am dissapointed of you.'",
    	ph_pic,
    	"dissapointed"
    ],
    
    _mistook: [
    	"The mysterious man.. mistook you for pench??!! (You got head trauma)",
    	ph_pic,
    	"mistook"
    ],
    
    _surrender: [
    	"You surrendered to pench. I guess this is it.",
    	ph_pic,
    	"doomed"
    ],
    
    _curse: [
        "Pench is REALLY angry...<br>He teleports you to the backrooms!",
        ph_pic,
        "backrooms"
    ],
    
    house: [
       "You are inside your house.",
       ph_pic,
       [
    		["h_bathroom", "Go to the bathroom"],
    		["h_room", "Go to your room"],
    		["h_couch", "Go to the couch area"],
    		["h_kitchen", "Go to your kitchen"],
    		["start", "Go outside"]
       ],
       ["-#FFD490"]
    ],
    
    h_bathroom: [
    	"You are in your bathroom.",
    	ph_pic,
    	[
    		["h_riamonds", "Check the shiny thing"],
			[[["_fling", ["@dress", "coffee", "#good", "#sleep"]], ["_bathtub"]], "Go to your bathtub"],
			["br_toilet", "Inspect toilet"],
			[0, "$10 on the cabinet", ["--"], ["$10", ":Ka-ching!"]],
    		["house", "Go back"]
    	],
    	["-#D4FBFF"]
    ],
    
    h_riamonds: [
    	"Its riamonds!! But you remembered..",
    	ph_pic,
    	[
    		["_lapench", "What?"],
    		["h_bathroom", "Go back"]
    	]
    ],
    
    _lapench: [
    	"In order to find riamonds,you must find <i>LA PENCH</i>",
    	ph_pic,
    	"la pench"
    ],
    
    _bathtub: [
    	"You got in the bathtub...but pool pench is already there!",
    	ph_pic,
    	"pool pench"
    ],
    
    br_toilet: [
    	"It's the toilet you clogged from your last session.",
    	ph_pic,
    	[
    		["_poop", "Flush"],
    		["_megapoop", "Unclog", ["plunger"]]
    		["h_bathroom", "Step away"]
    	]
    ],
    
    _poop: [
    	"You flushed it.. your 'prevoius session' splashed all over the bathroom! (Some also got all over you)",
    	ph_pic,
    	"poop"
    ],
    
    _megapoop: [
    	"You tried to unclog it.. The plunger breaks as a large behemoth swallows you from the toilet!",
    	ph_pic,
    	"mega poop"
    ],
    
    _fling: [
    	"You somehow performed a really niche game glitch and got flinged!",
    	"pics/fling.jpeg",
    	"fling"
    ],
    
    h_room: [
    	"You are in your room.",
    	ph_pic,
    	[
    		["_sleep", "Sleep"],
    		["h_closet", "Check your closet"],
    		["computer", "Open your computer"],
    		["h_room", "$10 on your desk", ["--"], ["$10", ":Ka-ching!"]],
    		["house", "Go back"]
    	],
    	["-#b8cdff"]
    ],
    
    _sleep: [
    	"You slept.",
    	ph_pic,
    	"sleep"
    ],
    
    h_closet: [
    	"You have a closet??!!",
    	ph_pic,
    	[
    		[0, "Wear dress", ["!@dress"], ["@dress", ":You wore a... dress?"]],
    		[0, "Wear pench suit", ["!@penchsuit"], ["@penchsuit", ":You wore something identical to pench's suit."]],
    		[0, "Wear your cloth", ["!@d"], ["@d", ":You wore your cloth.. comfy."]],
    		[0, "Get hanger", ["--"], ["hanger", ":Hanger acquired!"]],
    		["closet_sc", "???", ["hamncheese"]],
    		["h_room", "Close closet"]
    	],
    	["-#b36d4b"]
    ],
    
    closet_sc: [
    	"There is someone here.<br>It looked at your ham amd cheese dead in the eye.",
    	ph_pic,
    	[
    		["_sc", "Give him ham and cheese"],
    		["_sc_angry", "Eat ham and cheese in front of it"],
    		["h_closet", "Go back"]
    	]
    ],
    
    _sc: [
    	"You gave him the ham and cheese.. It was S.C.?!<br>You became best friends bonded together by ham and cheese.",
    	ph_pic,
    	"S.C."
    ],
    
    _sc_angry: [
    	"You ate the ham and cheese in front of him..<br>It was S.C.??! (He jumped you)",
    	ph_pic,
    	"angry s.c."
    ],
    
    computer: [
    	"You opened your computer. There are (1) apps in the home screen.",
    	ph_pic,
    	[
    		["cmp_store", "Open store"],
    		["h_room", "Shut down", [], [":You shut your computer down."]]
    	],
    	["-#acb5c2"]
    ],
    
    cmp_store: [
    	"Its the delivery store. You can order something here.",
    	ph_pic,
    	[
    		[[ [0, ["hamncheese"], [":You already have one."]], [0, ["!$15"], [":You dont have enough money."]], [0, 0, ["!$15", "hamncheese", ":You got your order from your chimney."]] ], "Order ham & cheese ($15)"],
    		[[ [0, ["balloon"], [":You already have one."]], [0, ["!$10"], [":You dont have enough money."]], [0, 0, ["!$10", "balloon", ":You got your order from your chimney."]] ], "Order inflated balloon ($10)"],
    		["computer", "Close app"]
    	]
    ],
    
    h_couch: [
    	"You are in the living room, specifically, the couch area.",
    	ph_pic,
    	[
    		["c_tv", "Go to the tv"],
    		[[ ["h_basement", ["bm_key"]], [0, [], [":Its a trapdoor to something underground. It wont budge."]] ], "Check trapdoor"],
    		[[["sh_angry", ["!guitar", "sh-fin"]], ["sh_fin", ["sh-fin"]], ["c_shance"]], "Talk to shance"],
    		["house", "Go back"]
    	]
    ],
    
    c_tv: [
    	"The tv is off.",
    	ph_pic,
    	[
    		["_news", "Turn on"],
    		["h_couch", "Go back"]
    	]
    ],
    
    _news: [
    	"You turned on the tv. To no surprise, news pench is reporting!",
    	ph_pic,
    	"news pench"
    ],
    
    c_shance: [
    	"He is practising his guitar.<br>'What do you want?'",
    	ph_pic,
    	[
    		[[["sh_guitar", ["coffee"]], ["sh_noguitar", ["!coffee"]]], "I want your guitar"],
    		["h_couch", "Nothing (Go back)"]
    	]
    ],
    
    sh_guitar: [
    	"Okay, here you go. But i need that coffee. (yoink)",
    	ph_pic,
    	[
    		["h_couch", "Go back"]
    	],
    	["!coffee", "guitar", "sh-fin"]
    ],
    
    sh_noguitar: [
    	"I need something in return.",
    	ph_pic,
    	[["h_couch", "Okay (Go back)"]]
    ],
    
    sh_fin: [
    	"Arent you gonna practise with my guitar or something?",
    	ph_pic,
    	[["h_couch", "Go back"]]
    ],
    
    sh_angry: [
    	"'Where is it.'",
    	ph_pic,
    	[
    		["sh_angry1", "The what?"]
    	]
    ],
    
    sh_angry1: [
    	"'WHERE IS IT??'<br>He shakes you angrily.",
    	ph_pic,
    	[
    		["sh_angry2", "YOUR GUITAR??"]
    	]
    ],
    
    sh_angry2: [
    	"'YOU WILL TELL ME RIGHT NOW.'",
    	ph_pic,
    	[
    		["_sh_angry", "I SOLD IT IM SORRY!!"]
    	]
    ],
    
    _sh_angry: [
    	"You was then shot 87 times.",
    	ph_pic,
    	"angry shance"
    ],
    
    h_kitchen: [
    	"You are inside your kitchen.",
    	ph_pic,
    	[
    		["_pizza", "Eat pizza"],
    		[0, "$10 on the counter", ["--"], ["$10", ":Ka-ching!"]],
    		[0, "Get coffee", ["--"], ["coffee", ":Acquired coffee!"]],
    		[0, "Get keys", ["!carkey", "#friends"], ["carkey", ":Key acquired!"]],
    		["house", "Go back"]
    	]
    ],
    
    _pizza: [
    	"You grabbed the pizza.. But pench stole it from you and ate it!",
    	ph_pic,
    	"pizza"
    ],
    
    h_basement: [
    	"You are im your basement (You had one?!). It's so dark here. There's a person at the corner.",
    	ph_pic,
    	[
    		["dage", "Talk to the guy", ["!dage_phn"]],
    		[0, "$20 on the ground", ["--"], ["$20"], [":Ka-ching!"]],
    		["h_couch", "Climb back"]
    	]
    ],
    
    dage: [
    	"I have been locked up here for so many years.. now i'm FREE!!",
    	ph_pic,
    	[
    		["h_basement", "What?", [], ["penchcoin", ":He gave you a special coin as his token of appreciation as he ran away."]]
    	]
    ],
    
    neighborhood: [
    	"You walked away.<br>You see a man with a hoodie and sunglasses beside the shop corner.",
    	ph_pic,
    	[
    		["crossroad", "Walk further"],
    		["broker", "Talk"],
    		["start", "Go back"]
    	],
    	["-#B1D9FF"]
    ],
    
    broker: [
    	"'Hey kid. Want quick bucks? Give me anything for 'em.'",
    	ph_pic,
    	[
    		[0, "Give him guitar", ["guitar"], ["!guitar", ":This would go for a lot.. thanks kid. Here's some cash.", "$70"]],
    		[0, "Give him coffee", ["coffee"], ["!coffee", ":Really? Well, atleast I didnt get sleep last night.. heres some cash kid.", "$2"]],
    		[0, "Give him hanger", ["hanger"], ["!hanger", ":Usually hangers are sold in bulk, but meh.. Here's some pocket change kid.", "$0.5"]],
    		["neighborhood", "Go back"]
    	],
    	["-#46718F"]
    ],
    
    roof: [
    	"You are at the top of your roof. Your balloon popped.<br>Wow, there were so many stuff here!",
    	ph_pic,
    	[
    		["rf_cat", "Inspect cat"],
    		[0, "$10 lying", ["--"], [":Ka-ching! (What's it doing here?)", "$10"]],
    		[0, "Pick up cheese", ["--"], ["cheese", ":Cheese acquired!"]],
    		["h_room", "Go down the chimney", [], [":You fell down the chimney.|nYou are in your room."]],
    		["_fall", "Go back"]
    	],
    	["-#e36f6f"]
    ],
    
    rf_cat: [
    	"Its an orange cat. With a perfect loaf position. He has something in its mouth.I think he doesnt want to be disturbed.",
    	ph_pic,
    	[
    		[0, "Give ham and cheese", ["hamncheese"], ["!hamncheese", "bm_key", ":He gladly accepted your offer. You got a key in return!"]],
    		["roof", "Go back"]
    	]
    ],
    
    _fall: [
    	"You got bac-AAAAAAHHHHHHH",
    	ph_pic,
    	"fallen"
    ],
    
    crossroad: [
    	"You proceeded forward. It is a crossroad.|n To left leads to the town center, forward leads to the city border, and to the right leads to the forest.",
    	ph_pic,
    	[
    		[0, "$10 on the ground", ["--"], ["$10", ":Ka-ching!"]],
    		["forest", "Go right"],
    		["neighborhood", "Go back"]
    	],
    	["-#F3FFA3"]
    ],
    
    forest: [
    	"You decided to venture out to the forest.",
    	ph_pic,
    	[
    		["forest1", "Go deeper"],
    		["crossroad", "Go back"]
    	],
    	["-#028724"]
    ],
    
    forest1: [
    	"You are even deeper in the forest.",
    	ph_pic,
    	[
    		[0, "Pick up plunger", [], ["plunger", ":You picked up the plunger from out of ANYWHERE in the world, a forest."]],
    		["forest2", "Go even deeper"],
    		["forest", "Go back", [], [":You went back to the forest entrance."]]
    	],
    	["-#4A682C"]
    ],
    
    forest2: [
    	"You are really deep in the forest.",
    	ph_pic,
    	[
    		["_lost", "Go even deeper"],
    		["forest1", "Go back", [], [":You are deep the forest."]]
    	],
    	["-#254A00"]
    ],
    
    _lost: [
    	"You got lost in the forest. Ohhh no..",
    	ph_pic,
    	"lost",
    	["-#132600"]
    ]
}

