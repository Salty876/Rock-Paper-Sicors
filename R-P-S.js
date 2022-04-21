let npcInput = Math.floor(Math.random()*3);


function computerInput (){
    if (npcInput == 0) {
      
        return "Rock"
    }
    else if (npcInput == 1)
    {
        
        return "Paper"
    }
    else if (npcInput == 2)
    {
        
         return "Sizor"
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

console.log(finalPlayerChoice)



