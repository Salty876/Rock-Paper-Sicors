let npcInput = Math.floor(Math.random()*3);

let playerInput = prompt("Rock, Paper or Sizor?")
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

let npcChoice = computerInput()



console.log(npcInput)
console.log(npcChoice)

