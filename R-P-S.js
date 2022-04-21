let npcInput = Math.floor(Math.random()*3);


function computerInput (){
    if (npcInput == 0) {
      
        return "rock"
    }
    else if (npcInput == 1)
    {
        
        return "paper"
    }
    else if (npcInput == 2)
    {
        
         return "scissors"
    }
}
computerInput()
let npcChoice = computerInput()

function playerChoice (){
    guyChoose = prompt("What are you going to play?")
    let miniscule = guyChoose.toLowerCase()
    let finalizedChoice = miniscule.trim()
    return finalizedChoice

}

let finalPlayerChoice = playerChoice()

function theGame(){
   
   
    if (finalPlayerChoice === npcChoice ){
    return "tie"
    } else if (finalPlayerChoice == "rock" && npcChoice == "paper") {
        return "Paper beats Rock. You lose!"
    } else if (finalPlayerChoice == "paper" && npcChoice == "rock") {
        return "Paper beats Rock. You win!"
    } else if (finalPlayerChoice == "rock" && npcChoice == "scissors") {
        return "Rock beats Scissors. You win!"
    } else if (finalPlayerChoice == "scissors" && npcChoice == "rock") {
        return "Rock beats Scissors. You lose!"
    } else if (finalPlayerChoice == "scissors" && npcChoice == "paper") {
        return "Scissors beats paper. You win!"
    } else if (finalPlayerChoice == "paper" && npcChoice == "scissors") {
        return "Scissors beats paper. You lose!"
    } 
   
}

let gameResult = theGame()
console.log(gameResult)

let playerPoints = 0
let npcPoints = 0

function fullGame(){
for (let round = 0; round < 5; round++ ){
    theGame()
if (gameResult == "Scissors beats paper. You win!" ||gameResult == "Rock beats Scissors. You win!"||gameResult == "Paper beats Rock. You win!" ){
    return playerPoints+1
}
else if (gameResult == "Scissors beats paper. You lose!" || gameResult == "Rock beats Scissors. You lose!" || gameResult == "Paper beats Rock. You lose!" ){
return npcChoice+1}

console.log(npcPoints, "for computer and", playerPoints, "for you")

}

}



