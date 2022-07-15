//Idea for this project came from "The Easiest Javascript Game Ever" video by KnifeCircus on YouTube.
//I used his code as a base and made modifications based on what I thought would make the game more user friendly.
var character =
document.getElementById("character");
var block =
document.getElementById("block");

//Adds jump functionality to the "up" arrow key.
window.addEventListener("keydown", function(event) {
    if(event.code === "ArrowUp"){
        jump()
    }
})

function jump (){
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

//Sets the block display to none so that the player has a moment to practice jumping without fear of death.
block.style.display = "none";

//Checks if the player is hit by the blue block, throwing an alert with instructions on how to play again.
var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("YOU DIED\n\nRefresh to play again!");
    }
}, 10);

//Sends the blue block to attack the player once they press START.
//Clicking START again after losing the game breaks it, the game can only be replayed by refreshing the page.
function playGame() {
    var x = document.getElementById("block");
    if(x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none";
    }
}