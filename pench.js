import {story} from "./ps_vanilla.js"

let dest = [];
let buttons = [
    document.getElementById("b1"),
    document.getElementById("b2"),
    document.getElementById("b3"),
    document.getElementById("b4"),
    document.getElementById("b5")
]
let inventory = [];
let cloth = "";
let message = document.getElementById("message");
let image = document.getElementById("pic");

function setbuttons(options) {
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
    }
    //Checl reqs
    for (let i = 0, j = 0; i < options.length; i++) {
        if (options[i].length != 2) {
            let passed = false;
            for (req = 0; i < options[i][2].length; i++) {
                passed = inventory.includes(options[i][2][req])
            }
            if(!passed) {
                continue;
            }
        }
        
        dest[j] = options[i][0];
        buttons[j].innerHTML = options[i][1];
        buttons[j].style.display = "inline";
        j += 1;
        continue;
    }
}

let cnode = story.p_start;
//Text
message.innerHTML = cnode[0];
//Image
if (typeof cnode[1] == "string") {
    image.src = cnode[1];
}
//Buttons
setbuttons(cnode[2]);

function gamestep(b) {
    cnode = story[dest[b]];
    
    //Text
    message.innerHTML = cnode[0];
    //Image
    if (typeof cnode[1] == "string") {
        image.src = cnode[1];
    }
    //Buttons
    setbuttons(cnode[2]);
    //Obtain
    if (cnode.length == 4) {
        inventory = [...new Set(inventory.concat(cnode[3]))];
    }
}
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => gamestep(i));
}