let userScore=0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user =  document.querySelector("#user");
const comp = document.querySelector("#comp");

const genCompChoice =() => {
    const options = ["rock" , "paper" ,"scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame =() =>{
    console.log("game was draw");
    msg.innerText = "game draw. try again.";
    msg.style.backgroundColor = "rgb(43, 229, 239)";
}
const showWinner = ( userWin , userChoice , compChoice) => {
    if(userWin) {
        userScore++;
        user.innerText = userScore;
        console.log("you win!");
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{ 
        compScore++;
        comp.innerText = compScore;
console.log("you lose!");
msg.innerText = `you lost! ${userChoice} beats  your ${compChoice}`;
msg.style.backgroundColor="red"
    }
}
const playGame= (userChoice) =>{
console.log("user choice =" ,userChoice);
//generate computer choice
const compChoice = genCompChoice();
console.log("comp choice =", compChoice);

if (userChoice === compChoice){
    //draw game
    drawGame();
}
else{
    let userWin = true;
    if(userChoice === "rock"){
        //scissor,paper
        userWin = compChoice === "paper" ? false : true;
    } else if ( userChoice=== "paper"){
        //scissor,rock
        userWin = compChoice === "scissors" ? false :true ;
    }
    else{
    //rock,paper
    userWin = compChoice === "rock"? false : true;
    }
 showWinner(userWin , userChoice , compChoice);
}
};

choices.forEach((choice) =>{
    //console.log(choice);
choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
//console.log("choice was clicked" , userChoice);
playGame(userChoice);
    });
});
