let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("game start");
    if(started ==false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },400);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },400);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkans(idx){
    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b> ${level} </b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log(this);
  let btn  = this;
  userFlash(btn);

  userColor= btn.getAttribute("id");
//   console.log(userColor);
userSeq.push(userColor);

checkans(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}








