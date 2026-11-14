import {story} from "./ps_vanilla.js"

let p=(a)=>console.log(a);

const bnum = 6
let buttons = [];

const elist = document.getElementById("endinglist");
const message = document.getElementById("message");
const image = document.getElementById("pic");
const pbdisplay = document.getElementById("pbucks")
const gstyle = document.body.style
const ecounter = document.getElementById("endingcount");
const b_container = document.getElementById("buttons")
for (let i = 0; i < bnum; i++) {
    buttons.push(document.createElement("button"))
    buttons[i].innerText = "Loading..."
    b_container.appendChild(buttons[i])
}

let dest = [], bfx = [], enabled_sfx = true;
let endings = new Set(), inventory = new Set(), cloth = "d", penchbucks = 0;
let cnode = story.p_start, options, cname = "", numofendings = 0, name = "Mr guest";
let gb = {
    noticed: new Set(),
    eliminated: new Set()
}
const rgx = {
    break: /(?<!\|)\|n/g,
    name: /(?<!\|)\|m/g
}
for (let i in story) {
    if (typeof story[i][2] == "string") {
        numofendings++;
    }
}
ecounter.innerHTML = "0/" + numofendings

//UI
const closeb = document.getElementsByClassName("close");
const modals = [
document.getElementById("about").style,
document.getElementById("endings").style,
document.getElementById("credits").style,
document.getElementById("changelog").style,
document.getElementById("settings").style]
const navbar = document.getElementsByClassName("navbutton")
const cover = document.getElementById("cover").style
const sfx = {
    click: new Audio("audio/click.mp3"),
    ending: new Audio("audio/ending.mp3")
}
const name_inp = document.getElementById("name_inp")


function update_endings(ending){
    endings.add(ending)
    elist.innerHTML = ""
    for(let e of[...endings]) {
        elist.innerHTML += "&#9702; " + e + " ending<br>"
    }
    ecounter.innerHTML = endings.size + "/" + numofendings
}
let s_endings = localStorage.endings

if (s_endings) {
    for (let e of JSON.parse(s_endings)) {
        update_endings(e)
    }
}
let play_sfx = a => {
    enabled_sfx ? sfx[a].play(): null
}
function msgmd(t) {
    let nt = t
    nt.replaceAll()
}
function obtain(arr) {
    let inv = 0;
    for (let ob of arr) {
        inv = ob[0] == "!" ? 1 : 0;
        switch (ob[inv]) {
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
                message.innerHTML = ob.slice(1+inv).replaceAll(rgx.break, "<br>");
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
                if (req[inv + 1] == "#") {
                    a = parseInt(req.slice(inv + 2)) <= endings.size
                    break
                }
                a = endings.has(req.slice(1 + inv))
                break
            case "@": //Cloth
                a = req.slice(1+inv) == cloth
                break
            case "$": //Penchbucks
                a = parseInt(req.slice(1+inv)) <= penchbucks
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
    let c_ac = []
    if (typeof dest[b][0] == "string") {
        cnode = dest[b][0] ? story[dest[b][0]] : cnode;
        cname = dest[b][0]
    } else if (typeof dest[b][0] == "object") {
        for (let breq of dest[b][0]) {
            if (checkreq(breq[1])) {
                cnode = breq[0] ? story[breq[0]] : cnode
                cname = breq[0]
                c_ac = breq[2] ? breq[2] : []
                break;
            }
        }
    }
    //--Message & Image--
    message.innerHTML = cnode[0].replaceAll(rgx.break, "<br>")
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
    obtain(c_ac)
    //Ending node
    if (typeof options == "string") {
        update_endings(options)
        localStorage.setItem("endings", JSON.stringify([...endings]))
        play_sfx("ending")
        dest[0] = ["start", 0]
        buttons[0].innerHTML = "<span style='color:blue;'>Restart</span>"
        buttons[0].style.display = "inline"
        message.innerHTML += "<br><b style=\"color:mediumblue;\">" + options.toUpperCase() + " ENDING</b>"
        options = [];
        
        gstyle.backgroundColor = "lavenderblush"
        inventory.clear()
        cloth = "d"
        penchbucks = 0
        pbdisplay.innerHTML = "$0"
        gb.noticed.clear()
        gb.eliminated.clear()
        if (cnode[3]) {
            obtain(cnode[3])
        }
        return
    }
    //Check reqs: for every possible button (i), button on queue (j), requirement is passed so far (passed)
    for (let i = 0, j = 0; i < options.length; i++) {
        //If length of button data is more than 2 (3rd data for reqs)
        let passed = true
        if (options[i].length > 2) {
            //If one-timer
            if (options[i][2].includes("--")) {
                let bid = dest[b][1]
                if (gb.noticed.has(cname + i)) {
                    gb.eliminated.add(bid)
                    gb.noticed.delete(bid)
                } else {
                    gb.noticed.add(cname + i)
                }
                if (gb.eliminated.has(cname + i)) {
                    continue
                }
            }
            
            passed = checkreq(options[i][2])
        }
        if (passed) {
            //Check if theres smth to obtain
            bfx[j] = options[i][3]
            
            //Dest, Origin node, origin button index
            dest[j] = [options[i][0], cname + i];
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
    buttons[i].onclick = () => {play_sfx("click");gamestep(i);}
}

function toggle(b) {
    play_sfx("click")
    modals[b].display = modals[b].display == "block" ? "none" : "block";
    cover.display = cover.display == "block" ? "none" : "block";
}
for (let i = 0; i < closeb.length; i++) {
    closeb[i].onclick = () => toggle(i)
    navbar[i].onclick = () => toggle(i)
}
//Settings
document.getElementById("r_endings").onclick = () => {
    click.play()
    endings.clear()
    localStorage.removeItem("endings")
    elist.innerHTML = "No endings yet :P Just go press buttons or something"
    ecounter.innerHTML = "0/" + numofendings
    dest[0] = ["p_start", 0]
    gamestep(0)
}
//Dev
let dev_sn = document.getElementById("dev_setnode"), dev_act = document.getElementById("dev_action")
document.getElementById("dev_setnode_enter").onclick = () => {
    dest[0] = [dev_sn.value, 0]
    gamestep(0)
}
document.getElementById("dev_action_enter").onclick = () => {
    obtain([dev_act.value])
    dest[0] = [cname, 0]
    gamestep(0)
}
document.getElementById("name_enter").onclick = () => {
    name = name_inp.value
    name_inp.value = ""
    dest[0] = [cname, 0]
    gamestep(0)
}
document.getElementById("sfx_tg").addEventListener("change", event => {
    enabled_sfx = event.currentTarget.checked
})


dest[0] = ["start", 0]
gamestep(0)