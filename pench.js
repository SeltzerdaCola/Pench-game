import {story} from "./ps_vanilla.js"

let p = (a)=>console.log(a);

let elist = document.getElementById("endinglist")

let dest = [], prev_dest = [],bfx = [], buttons = [], b;

const bnum = 6

let b_container = document.getElementById("buttons")
for (let i = 0; i < bnum; i++) {
    buttons.push(document.createElement("button"))
    buttons[i].innerText = "Loading..."
    b_container.appendChild(buttons[i])
}

let endings = new Set(), inventory = new Set(), cloth = "d", penchbucks = 0;
let message = document.getElementById("message");
let image = document.getElementById("pic");
let pbdisplay = document.getElementById("pbucks")
let gstyle = document.getElementById("game").style

let ecounter = document.getElementById("endingcount"), numofendings = 0;

let cnode = story.p_start, options, gonebuttons = [], cname = "";

for (let i in story) {
    if (typeof story[i][2] == "string") {
        numofendings++;
    }
}
ecounter.innerHTML = "0/" + numofendings

//UI
let closeb = document.getElementsByClassName("close");
let modals = [
document.getElementById("about").style,
document.getElementById("endings").style,
document.getElementById("credits").style,
document.getElementById("changelog").style]
let navbar = document.getElementsByClassName("navbutton")
let click = document.getElementById("click"), e_audio = document.getElementById("e_audio")

function update_endings(ending){
    endings.add(ending)
    elist.innerHTML = ""
    for(let e of [...endings]) {
        elist.innerHTML += "&#9702; " + e + " ending<br>"
    }
    ecounter.innerHTML = endings.size + "/" + numofendings
    p(ending + ": henskis")
}

function obtain(arr) {
    let inv = 0;
    for (let ob of arr) {
        inv = ob[0] == "!" ? 1 : 0;
        p("obtain: " + ob)
        switch (ob[inv]) {
            case "|": //One-timer
                p([ob, typeof ob])
                let a = ob.shift()
                a = a.join("|")
                p(a)
                p(prev_dest)
                if (gonebuttons.includes(a)) {
                    return false
                }
                gonebuttons.push(a)
                break
            case "#": //Ending
                update_endings(ob.slice(1+inv));
                break;
            case "@": //Cloth
                cloth = inv ? "d" : ob.slice(1+inv);
                break;
            case "$":
                penchbucks += inv ? -parseInt(ob.slice(2)) : parseInt(ob.slice(1));
                pbdisplay.innerHTML = "$" + penchbucks
                break;
            case ":":
                message.innerHTML = ob.slice(1+inv);
                break;
            case ";":
                image.src = ob.slice(1+inv);
                break;
            case "-":
                gstyle.backgroundColor = ob[1+inv] == "-" ? "lavenderblush" : ob.slice(1+inv);
                break;
            default:
                inv ? inventory.delete(ob.slice(1)) : inventory.add(ob);
        }
    }
}
function checkreq(arr, or){
    if (!arr) {return true}
    let ps = !or
    for (let req of arr) {
        if (typeof req == "object") {
            ps = or ? checkreq(req) : checkreq(req, true)
            continue
        }
        let inv = (req[0] == "!") ? 1 : 0, a;
        switch (req[inv]) {
            case "#": //Ending
                a = endings.has(req.slice(1 + inv))
                break
            case "@": //Cloth
                a = req.slice(1+inv) == cloth
                break
            case "$": //Penchbucks
                a = parseInt(req.slice(1+inv)) >= penchbucks
                break
            case "-":
                a = true
                break
            default:
                a = inventory.has(req.slice(inv))
        }
        ps = or ? ps || a : ps && a //TODO: figure out ts
        ps = inv ? !ps : ps
    }
    return ps;
}
function gamestep(b) {
    if (typeof dest[b][0] == "string") {
        cnode = story[dest[b][0]];
        cname = dest[b][0]
    } else if (typeof dest[b][0] == "object") {
        for (let breq of dest[b][0]) {
            if (checkreq(breq.slice(1))) {
                cnode = story[breq[0]]
                cname = breq[0]
                break;
            }
        }
    }
    
    //--Message & Image--
    message.innerHTML = cnode[0]
    image.src = cnode[1] ? cnode[1] : image.src;
    
    //--Buttons--
    options = cnode[2]
    //Reset buttons
    for (let i of buttons) {
        i.style.display = "none";
    }
    //Obtain from button
    bfx[b] ? obtain(bfx[b]) : null
    bfx = []
    //Ending node
    if (typeof options == "string") {
        update_endings(options)
        e_audio.play()
        dest[0] = ["p_start", 0]
        buttons[0].innerHTML = "<span style='color:blue;'>Restart</span>"
        buttons[0].style.display = "inline"
        message.innerHTML += "<br><b>" + options.toUpperCase() + " ENDING</b>"
        options = [];
        
        inventory.clear()
        cloth = "d"
        penchbucks = 0
        pbdisplay.innerHTML = "$0"
        gonebuttons = []
        return
    }
    prev_dest = structuredClone(dest)
    //Check reqs: for every possible button (i), button on queue (j), requirement is passed so far (passed)
    for (let i = 0, j = 0; i < options.length; i++) {
        //If length of button data is more than 2 (3rd data for reqs)
        let passed = true, tbfx = [];
        if (options[i][2]) {
            //If one-timer
            if (options[i][2].includes("--")) {
                /*
                if (gonebuttons.includes(prev_dest[b].join("|")) && prev_dest[b][1] == options[i][0] && prev_dest[b][2] == i) {
                    p("success")
                    continue
                }
                gonebuttons.push(options[i][0] + "|" + cname + "|" + i)*/
                tbfx.push(["|", ...prev_dest[b]])
                p(tbfx)
            }
            passed = checkreq(options[i][2])
        }
        if (passed) {
            //Check if theres smth to obtain
            bfx[j] = options[i][3] ? options[i][3].concat(tbfx) : undefined
            
            
            //Dest, Origin node, origin button index
            dest[j] = [options[i][0], cname, i];
            buttons[j].innerHTML = options[i][1];
            buttons[j].style.display = "inline";
            j++
        }
    }
    //--Obtain--
    if (cnode[3]) {
        obtain(cnode[3])
    }
}
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {click.play();gamestep(i);}
}


function toggle(b) {
    modals[b].display = modals[b].display == "block" ? "none" : "block";
}

for (let i = 0; i < closeb.length; i++) {
    closeb[i].onclick = () => toggle(i)
    navbar[i].onclick = () => toggle(i)
}

dest[0] = ["p_start", 0]
gamestep(0)