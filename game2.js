let userScore=0;
let comScore=0;
let myScore=document.querySelector(".my-score");
let compScore=document.querySelector(".Computer-score");
let msg =document.querySelector("#msg");
let choices=document.querySelectorAll(".choice");
const getComChoice= ()=>{
    const options=["rock","paper","scissors"];
    const randomChoice= Math.floor(Math.random()*3);
    return options[randomChoice];
}
const matchDraw=()=>{
    msg.innerText="This match has a draw !";
} 
const checkUserwin=(userWin)=>{
    if(userWin===true){
        msg.innerText="You won";
        userScore++;
        myScore.innerText= userScore;
        msg.style.background="green";
    }else{
        msg.innerText="You lose. Computer won";
        comScore++;
        compScore.innerText=comScore;
        msg.style.background="red";
    }
}
const playGame = (userChoice)=>{
    console.log(userChoice);
    const comChoice =getComChoice();
    console.log(comChoice);
    let userwin=true;
    if(userChoice===comChoice){
       matchDraw(); 
    }
    if(userChoice==="rock"){
        userwin = comChoice ==="paper"? false:true;
    }else if(userChoice==="paper"){
        //scissors,rock
        userwin = comChoice === "scissors" ? false:true;

    }else{
        userwin = comChoice==="rock"? false:true;
    }
    checkUserwin(userwin);
}
choices.forEach((choiceVal) =>{
    choiceVal.addEventListener("click", () =>{
        const choiceId=choiceVal.getAttribute("id");
        console.log("choice was clicked",choiceId);
        playGame(choiceId);
    })
});