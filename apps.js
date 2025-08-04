let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let scored = 0;


let h2= document.querySelector('h2');

document.addEventListener("click", function () {
    if(started == false) {
        console.log("Game is started!");
        started = true;

        levelUp();
    }
});

//gameFlash().........................
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200)
}

//userFlash().........................
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250)
}

function levelUp(){
    userSeq = [];
    scored++;
    h2.innerText = `Score : ${scored}`;

    //random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
        // console.log(randIdx);
        // console.log(randColor);
        // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
   if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 500);
        }
   } else {
        h2.innerHTML = `Game Over! Your score was <b>${scored}</b> <br> Press any key to start...`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor="black";
        }, 150);
        reset(); // here calling to reset() function....
   }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor); //kya ye hmri gameSeq se match karta hai......[isiliye another function ->' checkAns() '].

    checkAns(userSeq.length - 1);
}
    


let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

let reset = () => {    // this is game reset function....
    started = false;
    gameSeq = [];
    userSeq = [];
    scored = 0;
}