function  getComputerChoice(){
    const num = Math.floor(Math.random() * 3);
    return num;
}

function getHumanChoice(){
let humanChoice=prompt("Enter Your Choice (In Capital): ")
 if(humanChoice=='ROCK'){
        return 0;
    }
    else if(humanChoice=='PAPER'){
        return 1;
    }
    else{
        return 2;
    }
}


// const human=getHumanChoice();
// const computer=getComputerChoice();


function playRound(human,comp){
if(human == comp){
    return 0;
}
else if(comp==0 && human ==1 ||comp==1 && human ==2||comp==2 && human ==0){
    return 1;
}
else {
    return 2;
}
}

function playGame(){
    let x=0;
let y=0;
    for(let i=0;i<=4;i++){
const choices = ["ROCK", "PAPER", "SCISSORS"];
const human=getHumanChoice();
const computer=getComputerChoice();
 console.log(`Human choose: ${choices[human]}`);
        console.log(`Computer choose: ${choices[computer]}`);

        const result=playRound(human,computer);
        if(result == 0){
        console.log("It's a tie!\n");
    } else if(result == 1){
        console.log("Human wins this round!\n");
        x += 1;
    } else {
        console.log("Computer wins this round!\n");
        y += 1;
    }
}
   if(x>y){
    console.log("Human Wins");
   }
   else{
    console.log("Computer Wins")
   }

}

playGame();