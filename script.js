function getComputerChoice(){
    let x = Math.floor(Math.random()*100);
    choice = ["Rock","Paper","Scissor"];
    return choice[x%3];
}


let playRound = (playerSelection,computerSelection) => {
    let result;
    if(playerSelection.toLowerCase()==computerSelection.toLowerCase())
    {
        result = "draw!";
        res[1]=2;
    }
    else if(playerSelection.toLowerCase()=="rock"&&computerSelection=="Scissor")
    {
            result = "you won! Rock beats Scissor";
            res[1]=1;
    }
    else if(playerSelection.toLowerCase()=="rock"&&computerSelection=="Paper")
    {
            result = "you lose! Paper beats Rock";
            res[1]=0;
    }
    else if(playerSelection.toLowerCase()=="paper"&&computerSelection=="Rock")
    {
            result = "you won! Paper beats Rock";
            res[1]=1;
    }
    else if(playerSelection.toLowerCase()=="paper"&&computerSelection=="Scissor")
    {
            result = "you lose! Scissor beats Paper";
            res[1]=0;
    }
    else if(playerSelection.toLowerCase()=="scissor"&&computerSelection=="Rock")
    {
            result = "you lose! Rock beats Scissor";
            res[1]=0;
    }
    else if(playerSelection.toLowerCase()=="scissor"&&computerSelection=="Paper")
    {
            result = "you won! Scissor beats Paper";
            res[1]=1;
    }
    res[0] = result;
    return res;
}
let res = [];
let computerSelection;
let playerSelection;

let game = () => {
    let win = 0,winpc=0;
    let result = [];
    let winner;
    for(let i=0;i<5;i++)
    {   
        playerSelection = prompt("your choice?");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection,computerSelection);
        console.log(result[0]);
        if(res[1]==1)
            win++;
        else if(res[1]==0)
            winpc++;

    }
    if(win>winpc)
    {
        winner = "you";
    }
    else if(winpc>win){
        winner = "computer";
    }
    else
        winner = "nobody";
    return winner;
}
let final = game();
console.log(`Damn son! ${final} won`);

