let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelectorAll("#reset-btn");
let newGameBtn=document.querySelectorAll("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO=true;//playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    let turnO=true; 
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO==true){//playerO
            box.innerText="O";
            turnO =false;
        }else{//playerX
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();

    });
});

const disableBoxes=()=>{//when game is over all boxes is disable
    for(let box of boxes){   
    box.disabled=true;
    }
};

const enableBoxes=()=>{//when game is over all boxes is enable
    for(let box of boxes){   
    box.disabled=false;
    box.innerText="";//inner text dissable  
    }
    
};

const showWinner = (winner)=>{//show the winner with the player name
    msg.innerText = `Congratulations, Winner is ${winner}`;//here is use (``operator) not-> (''operator)
    msgContainer.classList.remove("hide"); //hide
    disableBoxes();
}

const checkWinner =()=>{//pattern calculation
    for(pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);//show fact
            }
        }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
//resetGame function triger in reset button