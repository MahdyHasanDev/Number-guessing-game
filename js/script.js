let nameInput = document.querySelector(".nameInput")
console.log(nameInput);
let startGame = document.querySelector(".startGame")
let homeOneError = document.querySelector(".homeOneError")
// console.log(startGame);

startGame.addEventListener("click",  function(){

    if (nameInput.value == ""){
       homeOneError.style.display="block";
    }
        
    else{
        console.log(nameInput.value);
       homeOneError.style.display="none";
    }

})