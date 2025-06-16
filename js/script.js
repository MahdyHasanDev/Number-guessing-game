let nameInput = document.querySelector(".nameInput");
let startGame = document.querySelector(".startGame");
let homeOneError = document.querySelector(".homeOneError");
let gameScreen = document.querySelector(".gameScreen");
let playerOneScreen = document.querySelector(".playerOneScreen");
let textOne = document.querySelector(".textOne");


// ========

let playerOne = document.querySelector(".playerOne");
let letsPlay = document.querySelector(".letsPlay");
let playerOneError = document.querySelector(".playerOneError");
// =======

startGame.addEventListener("click",  function(){

    if (nameInput.value == ""){
       homeOneError.style.display="block";
    }
        
    else{
       homeOneError.style.display="none";
       gameScreen.style.display="none";
       playerOneScreen.style.display="block";
       textOne.innerHTML="Player One";


    }

})
// ==========

letsPlay.addEventListener("click",  function(){

    if (playerOne.value == ""){
       playerOneError.style.display="block";
    }
        
    else{
        console.log("playerOne.value");
        
       playerOneError.style.display="none";
    //    gameScreen.style.display="none";
    //    playerOneScreen.style.display="block";
    //    textOne.innerHTML="Player One";


    }

})
// ==========
