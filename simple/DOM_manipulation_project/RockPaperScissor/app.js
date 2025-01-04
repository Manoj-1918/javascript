let paper=document.getElementById('paper');
let rock=document.getElementById('rock');
let scissor=document.getElementById('scissor');
let ResetBtn=document.getElementById('Reset');
let userchoice;
let userscore=0;
let compscore=0;

paper.addEventListener('click',()=>{
    userchoice="paper";
    playGame(userchoice);
});
rock.addEventListener('click',()=>{
    userchoice="rock";
    playGame(userchoice);
});
scissor.addEventListener('click',()=>{
    userchoice="scissor";
    playGame(userchoice);
});

function playGame(userchoice){
    let choicesAvai=["paper","rock","scissor"];
    let compChoice=choicesAvai[Math.floor(Math.random() *3)];
    console.log("computer choosed:"+compChoice);
    console.log('user choice is :'+userchoice);

    let userwin;

    if(compChoice===userchoice){
        document.getElementById('msg').innerText="Game is Draw";
        console.log("Match Draw");
    }
    else{
        if(userchoice=="paper" && compChoice=="rock"){
            userwin=true;
            console.log("user wins");
        }
        else if(userchoice=="paper" && compChoice=="scissor"){
            userwin=false;
            console.log("comp wins");
        }
        else if(userchoice=="rock" && compChoice=="scissor"){
            userwin=true;
            console.log("user wins");

        }
        else if(userchoice=="rock" && compChoice=="paper"){
            userwin=false;
            console.log("comp wins");
        }
        else if(userchoice=="scissor" && compChoice=="rock"){
            userwin=false;
            console.log("comp wins");
        }
        else if(userchoice=="scissor" && compChoice=="paper"){
            userwin=true;
            console.log("user wins");
        }

    }
    if(userwin==true){
        userscore++;
        document.getElementById('user-score').innerText=userscore.toString();
        document.getElementById('msg').innerText="user wins this game";
    }
    else{
        compscore++;
        document.getElementById('computer-score').innerText=compscore.toString();
        document.getElementById('msg').innerText="computer wins this game";
    }
        console.log("user score: "+ userscore+" "+"computer score :"+compscore);
        
    ResetBtn.addEventListener('click',()=>{
        userscore=0;
        compscore=0;
        document.getElementById('computer-score').innerText=compscore.toString();
        document.getElementById('user-score').innerText=userscore.toString();
        document.getElementById('msg').innerText="Your move first";
        
})
}
