let boxes=document.querySelectorAll(".box");
let resetBtn =document.querySelector(".reset-btn");
let newGameBtn=document.querySelector(".new-gameBtn");
let msg=document.querySelector(".msg");
let winnerCall=document.querySelector("#mg");
let turnX=true;//playerX ,playerO;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msg.classList.add("hide");
    }
}
const showWinner=()=>{
    msg.classList.remove("hide");
    disableBoxes();
}
const resetGame=()=>{
    turnX=true;
    enableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let posi1val=boxes[pattern[0]].innerText;
        let posi2val=boxes[pattern[1]].innerText;
        let posi3val=boxes[pattern[2]].innerText;
        if(posi1val != "" && posi2val != "" && posi3val !=""){
            if(posi1val === posi2val && posi2val === posi3val){
                // console.log("winner");
                winnerCall.innerText=`Congratulations. Winner is ${posi1val}`;
                showWinner();
                // boxes.disabled=true;
            }
        }
    }
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX===true){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
    });
    
});
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);