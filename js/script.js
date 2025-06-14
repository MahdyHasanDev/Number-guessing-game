let nameInput = document.querySelector(".nameInput")
console.log(nameInput);
let startGame = document.querySelector(".startGame")
// console.log(startGame);

startGame.addEventListener("click",  function(){
    console.log(nameInput.value);
})