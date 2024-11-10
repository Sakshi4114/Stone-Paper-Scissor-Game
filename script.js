let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=> {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    
    msg.innerText = "Game was Draw. play again.";
    msg.style.backgroundColor = "#081b31"; 
}

const showWinner = (userWin,userChoice,CompChoice) =>{
    if(userWin) {
      userScore++;
      userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "Green"; 
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
       
        msg.innerText = `You Lose ${CompChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"; 
    }
}


const playGame = (userChoice) =>{
   
   const CompChoice = genCompChoice();

   if(userChoice === CompChoice){
    drawGame();
   }
   else{
    let userWin = true;
    if(userChoice === "rock"){
        // scissors,paper
       userWin = CompChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        // rock,scissors
        userWin =  CompChoice === "scissor"? flase:true;
    }else{
        // Rock,paper
        userWin = CompChoice === "rock" ? false :true;
    }
    showWinner(userWin,userChoice,CompChoice);
   };

}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })

})