/*
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
    }, 150)
}

//userFlash().........................
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 200)
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
        h2.innerHTML = `Game Over! Your score was <b>${scored}</b> <br> Touch anywhere to start the game.`;
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
    */

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let scored = 0;

// High Score from localStorage
let highScore = localStorage.getItem("highScore") || 0;

let h2 = document.querySelector('h2');
h2.innerText = `Score: 0 | High Score: ${highScore}`;

document.addEventListener("click", function () {
    if (started == false) {
        console.log("Game is started!");
        started = true;
        scored = 0; // reset score on new game
        h2.innerText = `Score: ${scored} | High Score: ${highScore}`;
        levelUp();
    }
});

// gameFlash()
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 150);
}

// userFlash()
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp() {
    userSeq = [];
    scored++;
    h2.innerText = `Score: ${scored} | High Score: ${highScore}`;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 4); // FIXED: 4 colors total
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 500);
        }
    } else {
        // Update high score if needed
        if (scored > highScore) {
            highScore = scored;
            localStorage.setItem("highScore", highScore);
        }

        h2.innerHTML = `Game Over! Your Score: <b>${scored}</b> 
                        <br>High Score: <b>${highScore}</b> 
                        <br>Touch anywhere to start again.`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "black";
        }, 150);

        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

let reset = () => {
    started = false;
    gameSeq = [];
    userSeq = [];
    scored = 0;
};
