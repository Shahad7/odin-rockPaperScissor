

function getComputerChoice(){
    let x = Math.floor(Math.random()*100);
    choice = ["Rock","Paper","Scissor"];
    return choice[x%3];
}
let count =0,pc=0,user=0;
let playRound = (playerSelection,computerSelection) => {
    if()
    {
        let result;
        if(playerSelection.toLowerCase()==computerSelection.toLowerCase())
        {
            result = "draw!";
            
        }
        else if(playerSelection.toLowerCase()=="rock"&&computerSelection=="Scissor")
        {
                result = "you won! Rock beats Scissor";
                user++;
        }
        else if(playerSelection.toLowerCase()=="rock"&&computerSelection=="Paper")
        {
                result = "you lose! Paper beats Rock";
                pc++;
        }
        else if(playerSelection.toLowerCase()=="paper"&&computerSelection=="Rock")
        {
                result = "you won! Paper beats Rock";
                user++;
        }
        else if(playerSelection.toLowerCase()=="paper"&&computerSelection=="Scissor")
        {
                result = "you lose! Scissor beats Paper";
                pc++;
        }
        else if(playerSelection.toLowerCase()=="scissor"&&computerSelection=="Rock")
        {
                result = "you lose! Rock beats Scissor";
                pc++;
        }
        else if(playerSelection.toLowerCase()=="scissor"&&computerSelection=="Paper")
        {
                result = "you won! Scissor beats Paper";
                user++;
        }
        res[0] = result;
        announce(result);
        count++;
    }
    else
        {
            if(user>pc)
                 result = "YOU WON!";
            else if(pc>user)
                result = "GAME OVER!";
            else
                result = "DRAW!";
            announce(result);
        }
}
function announce(result){
const res = document.createElement('div');
const h1 = document.createElement('h1');
h1.textContent = result;
res.appendChild(h1);
const body = document.querySelector('body');
body.appendChild(res);
console.log(result);
}

const br = document.querySelector('#rock');
const bp= document.querySelector('#paper');
const bs = document.querySelector('#scissor');

br.addEventListener('click',()=>{playRound("rock",getComputerChoice())});
bp.addEventListener('click',()=>{playRound("paper",getComputerChoice())});
bs.addEventListener('click',()=>{playRound("scissor",getComputerChoice())});