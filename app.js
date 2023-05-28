const PLAY = document.querySelector(".play");
const PLAYER_ADD = document.querySelector(".players-num__set--add");
const PLAYER_REMOVE = document.querySelector(".players-num__set--remove");
const PLAYERS_NUMBER = document.querySelector(".players-num__number");
const PLAYER_PINK = document.querySelector(".score__player--pink");
const PLAYER_WHITE = document.querySelector(".score__player--white");
const PLAYER_BLUE = document.querySelector(".score__player--blue");
const PLAYER_ORANGE = document.querySelector(".score__player--orange");
const POINTER = document.querySelector(".game__pointer");
const SCORE = document.querySelector(".score");
const SCORE_CLOSE = document.querySelector(".score__close");
const SCORE_OPEN = document.querySelector(".navi__icon--scores");
const SETTINGS = document.querySelector(".settings");
const SETTINGS_CLOSE = document.querySelector(".settings__close"); 
const SETTINGS_OPEN = document.querySelector(".navi__icon--settings");
const WHEEL = document.querySelector(".game__wheel");
const WINNER = document.querySelector(".winner");
const WINNER_IS = document.querySelector(".winner__is")

let players = 2
let winner 

let rot = 360;
let pink = "pink";
let pinkScore = 0;
let white = "white";
let whiteScore = 0;
let blue = "blue";
let blueScore = 0;
let orange = "orange";
let orangeScore = 0;

function updateScore()
{
    PLAYER_PINK.innerHTML = "PINK : " + pinkScore
    PLAYER_WHITE.innerHTML = "WHITE : " + whiteScore
    PLAYER_BLUE.innerHTML = "BLUE : " + blueScore
    PLAYER_ORANGE.innerHTML = "ORANGE : " + orangeScore
    if(players == 2)
    {
        PLAYER_BLUE.classList.add("hidden")
        PLAYER_ORANGE.classList.add("hidden")
    }
    if(players == 3)
    {
        PLAYER_BLUE.classList.remove("hidden")
        PLAYER_ORANGE.classList.add("hidden")
    }
    if(players == 4)
    {
        PLAYER_BLUE.classList.remove("hidden")
        PLAYER_ORANGE.classList.remove("hidden")
    }
}

function showWinner(winner)
{
    if(winner == pink)
    {
        WINNER_IS.classList.add("pink")
    }
    if(winner == white)
    {
        WINNER_IS.classList.add("white")
    }
    if(winner == blue)
    {
        WINNER_IS.classList.add("blue")
    }
    if(winner == orange)
    {
        WINNER_IS.classList.add("orange")
    }
    WINNER.classList.add("show-winner")
    WINNER_IS.innerHTML = (winner + " wins !!!")
};

function hideWinner()
{
    setTimeout(() => {
       WINNER_IS.classList.remove("pink")
       WINNER_IS.classList.remove("white")
       WINNER_IS.classList.remove("blue")  
       WINNER_IS.classList.remove("orange")  
    }, 3000);   
}

function loadWheel(players)
{
    if(players == 2)
    {
        WHEEL.classList.add("game__wheel--two-players")
        WHEEL.classList.remove("game__wheel--three-players")
        WHEEL.classList.remove("game__wheel--four-players")
    }
    if(players == 3)
    {
        WHEEL.classList.add("game__wheel--three-players")
        WHEEL.classList.remove("game__wheel--four-players")
    }
    if(players == 4)
    {
        WHEEL.classList.add("game__wheel--four-players")
        WHEEL.classList.remove("game__wheel--five-players")
    }
    if(players == 5)
    {
        WHEEL.classList.add("game__wheel--five-players")
    }
};

PLAY.addEventListener("click", function()
{
    PLAY.disabled = true;
    SCORE_OPEN.disabled = true;
    PLAYER_ADD.disabled = true;
    PLAYER_REMOVE.disabled = true;
    PLAY.classList.remove("spin-size")
    let num = (Math.random() * 1440);
    rot += num; 
    WHEEL.setAttribute("style", "rotate:" + (rot + 360) + "deg")
    let rotations = Math.floor(rot / 360) 
    let oneMove = (rotations * 360) 
    let fullrot = (rot - oneMove)
    let result = Math.ceil(fullrot / 30)
    if(players == 2)
    {
        if(result % 2 == 0)
        {
            pinkScore += 1
            console.log("pink wins!!!")
            winner = pink
        }
        else  
        {
            whiteScore += 1
            console.log("white wins!!!")
            winner = white
        }
    }
    else if(players == 3)
    {
        if(result == 1 || result == 4  || result == 7 || result == 10)  
        {
            pinkScore += 1
            console.log("pink wins!!!")
            winner = pink
        }
        if(result == 2 || result == 5  || result == 8 || result == 11)  
        {
            whiteScore += 1
            console.log("white wins!!!")
            winner = white
        }
        if(result == 3 || result == 6  || result == 9 || result == 12)  
        {
            blueScore += 1
            console.log("blue wins!!!")
            winner = blue
        }
    }
    else if(players == 4)
    {
        if(result == 1 || result == 5  || result == 9)
        {
            orangeScore += 1
            console.log("orange wins!!!")
            winner = orange
        }
        if(result == 2 || result == 6  || result == 10)
        {
            pinkScore += 1
            console.log("pink wins!!!")
            winner = pink
        }
        if(result == 3 || result == 7  || result == 11)
        {
            whiteScore += 1
            console.log("white wins!!!")
            winner = white
        }
        if(result == 4 || result == 8  || result == 12)  
        {
            blueScore += 1
            console.log("blue wins!!!")
            winner = blue
        }
    }
    hideWinner()
    WINNER.classList.remove("show-winner")
    setTimeout(() => {
        showWinner(winner)
        PLAY.disabled = false;
        SCORE_OPEN.disabled = false;
        PLAYER_ADD.disabled = false;
        PLAYER_REMOVE.disabled = false;
        PLAY.classList.add("spin-size") 
    }, 6000);   
    return rot;
});

SCORE_OPEN.addEventListener("click", function()
{
    SCORE.classList.remove("hidden")
    updateScore()
});

SCORE_CLOSE.addEventListener("click", function()
{
    SCORE.classList.add("hidden")
    loadWheel(players)
});

SETTINGS_OPEN.addEventListener("click", function()
{
    SETTINGS.classList.remove("hidden")
});

SETTINGS_CLOSE.addEventListener("click", function()
{
    SETTINGS.classList.add("hidden")
    loadWheel(players)
});

PLAYER_ADD.addEventListener("click", function()
{
    if(players < 4)
    {
        players += 1
    }
    else
    {
        players = 4
    }
    PLAYERS_NUMBER.innerHTML = players
    return players
});

PLAYER_REMOVE.addEventListener("click", function()
{
    if(players > 2)
    {
        players -= 1
    }
    else
    {
        players = 2
    }
    PLAYERS_NUMBER.innerHTML = players
    return players
});
