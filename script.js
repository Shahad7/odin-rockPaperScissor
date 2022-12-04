let result;
let flag=0,pc=0,user=0;
let computerSelection;

const br = document.querySelector('#rock');
const bp = document.querySelector('#paper');
const bs = document.querySelector('#scissor');

br.addEventListener('click',()=>{playRound("rock",getComputerChoice())});
bp.addEventListener('click',()=>{playRound("paper",getComputerChoice())});
bs.addEventListener('click',()=>{playRound("scissor",getComputerChoice())});
br.addEventListener('mouseover',()=>{br.style.background = 'coral'});
bp.addEventListener('mouseover',()=>{bp.style.background = 'coral'});
bs.addEventListener('mouseover',()=>{bs.style.background = 'coral'});
br.addEventListener('mouseout',()=>{br.style.background = 'khaki'});
bp.addEventListener('mouseout',()=>{bp.style.background = 'khaki'});
bs.addEventListener('mouseout',()=>{bs.style.background = 'khaki'})


function getComputerChoice(){
    let x = Math.floor(Math.random()*100);
    choice = ["Rock","Paper","Scissor"];
    computerSelection = choice[x%3];
    return computerSelection;
}

let playRound = (playerSelection,computerSelection) => {
    if(flag==1)
        return;
    if(user<5&&pc<5)
    {
        
        if(playerSelection.toLowerCase()=="rock"&&computerSelection=="Scissor")
                user++;
        else if(playerSelection.toLowerCase()=="rock"&&computerSelection=="Paper")
                pc++;
        else if(playerSelection.toLowerCase()=="paper"&&computerSelection=="Rock")
                user++;
        else if(playerSelection.toLowerCase()=="paper"&&computerSelection=="Scissor")
                pc++;
        else if(playerSelection.toLowerCase()=="scissor"&&computerSelection=="Rock")
                pc++;
        else if(playerSelection.toLowerCase()=="scissor"&&computerSelection=="Paper")
                user++;
        displayScore();
        if(user==5||pc==5)
        {
        check();    
        } 
    }
    
}
let check = ()=>{
    if(user>pc)
            result = "Damn! You Won That's Not Very Shahza-like  :)";
            else if(pc>user)
                result = "Computer Cheetheya :(";
            else
                result = "DRAW!";
            flag=1;
            announce(result);
}
function announce(result){
const res = document.createElement('div');
const h1 = document.createElement('h1');
h1.textContent = result;
res.appendChild(h1);
const end = document.querySelector('.scoreboard');
end.appendChild(res);
}

function displayScore()
{
    const computerChoice = document.querySelector('.computerChoice');
    computerChoice.textContent = `Computer chose ${computerSelection}`;
    const player = document.querySelector('.player');
    const computer = document.querySelector('.computer');
    player.textContent = `player : ${user}`;
    computer.textContent = `computer : ${pc}`;
}

