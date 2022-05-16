var menuItem = document.getElementById("menu").getElementsByTagName("li");
var headLine = document.getElementById("text");
var btn = document.getElementById("button");
var btn2 = document.getElementById("button2");
var clear = "--> Choose Title <--";
var myMenu = document.getElementById("menu");
var counter = 1;

// for (i = 0; i<menuItem.length; i++){
//     menuItem[i].addEventListener("click", selectItem);
// }

myMenu.addEventListener("click", selectItem);

function selectItem(n){
    if (n.target.nodeName == "LI") {
        headLine.innerHTML = n.target.innerHTML;
        for (i = 0; i < menuItem.length; i++){
            menuItem[i].classList.remove("selected");
        }
        n.target.classList.add("selected");
    };
}

btn2.addEventListener("click", clearItem);
function clearItem(){
    headLine.innerHTML = clear;
}


btn.addEventListener("click", newItem);

function newItem(){
    let text;
    let line = prompt("Enter your new line:", "New Line");
    if (line == null || line == "") {
        text = "User cancelled the prompt.";
      } else {
        text = line;
      }
    myMenu.innerHTML +=  text;
}





