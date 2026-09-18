let closeb = document.getElementsByClassName("close");
let navbar = [
document.getElementById("about"),
document.getElementById("endings"),
document.getElementById("credits"),
document.getElementById("changelog")]


function show(b) {
    navbar[b].style.display = "block";
}

function close(b) {
    navbar[b].style.display = "none";
}

closeb[0].onclick = () => close(0)
closeb[1].onclick = () => close(1)
closeb[2].onclick = () => close(2)
closeb[3].onclick = () => close(3)
