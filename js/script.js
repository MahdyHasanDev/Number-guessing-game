let nameInput = document.querySelector(".nameInput");
let startGame = document.querySelector(".startGame");
let homeOneError = document.querySelector(".homeOneError");
let gameScreen = document.querySelector(".gameScreen");
let playerOneScreen = document.querySelector(".playerOneScreen");
let playerTwoScreen = document.querySelector(".playerTwoScreen");
let playerScreen = document.querySelector(".playerScreen");
let textOne = document.querySelector(".textOne");
let textTwo = document.querySelector(".textTwo");


// ========

let playerOne = document.querySelector(".playerOne");
let letsPlay = document.querySelector(".letsPlay");
let playerOneError = document.querySelector(".playerOneError");
// =======

let playerTwo = document.querySelector(".playerTwo");
let startTwoGame = document.querySelector(".startTwoGame");
let playerTwoError = document.querySelector(".playerTwoError");
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
      playerOneError.style.display="none";
       playerOneScreen.style.display="none";
       playerTwoScreen.style.display="block";
       textTwo.innerHTML="Player - 2 Name";
    }
})
// ==========
startTwoGame.addEventListener("click",  function(){

    if (playerTwo.value == ""){
       playerTwoError.style.display="block";
    }  
    else{
      playerTwoError.style.display="none";
       playerTwoScreen.style.display="none";
       playerScreen.style.display="block";
       text.innerHTML="Game Over";
    }
})
// ==========
