let gameSeq=[];
let userSeq=[];

let btns=['yellow','red','purple','green']

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("Game started");
    if(started==false){
        console.log("Game is started");
        started=true;

        levelup();
    }
})


function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash")
   },250);   
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash")
    },250);   
 }

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random button choose
    let ranInx=Math.floor(Math.random()*3);
    let randColor=btns[ranInx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(ranInx);
    // console.log(randColor);
    // console.log(randBtn)
    gameSeq.push(randColor);
    console.log(gameSeq)

    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("current level:",level);
    // let idx=level-1;

    if (userSeq[idx]===gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b><br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150);
        reset();
    }
}

function btnPress(){
    //  console.log(this);
    let btn=this;
    
    userFlash(btn);

    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}