let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;//playerX ,playerO
//arrays  of array 
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() =>{
    turnO = true;
    enableBoxes();
msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was clicked");
       // box.innerText ="hfgdh";
       if(turnO){
        box.innerText = "O"; //playerO
        turnO = false;
        box.style.color = "red";
        }
       else{
        box.innerText = "X"; //playerX
        turnO = true;
        box.style.color = "blue";
       }
       box.disabled = true;
    
       checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText =`congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes=() =>{
    for (let box of boxes){
        box.disabled= true;
    }
};
const enableBoxes=() =>{
    for (let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
};

const checkWinner =() =>{
    for( let pattern of winPatterns){
       /* console.log(pattern [0] , pattern[1], pattern[2]);
        console.log(
                    boxes[pattern [0]].innerText , 
                    boxes[pattern[1]].innerText, 
                    boxes[pattern[2]].innerText
                );*/
               let pos1Val= boxes[pattern [0]].innerText;
               let pos2Val = boxes[pattern[1]].innerText;
              let pos3Val = boxes[pattern[2]].innerText;

              if(pos1Val != "" &&  pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                   // console.log("winner" , pos1Val);
                    showWinner(pos1Val);
                }
              }
    }
};
 newGamebtn.addEventListener("click" ,resetGame);
 resetbtn.addEventListener("click" ,resetGame);