let npcInput = Math.floor(Math.random()*3);
let npcChoice
let playerInput = prompt("Rock, Paper or Sizor?")
function computerInput (){
    if (npcInput == 0) {
        let npcChoice = ("Rock")
        return npcChoice
    }
    else if (npcInput == 1)
    {
        let npcChoice = ("Paper")
        return npcChoice
    }
    else if (npcInput == 2)
    {
         let npcChoice = ("Sizor")
         return npcChoice
    }
}



console.log(npcInput)
console.log(npcChoice)
