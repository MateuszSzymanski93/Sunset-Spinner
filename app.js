const CHARACTER_BLUE = document.querySelector(".characters__player--blue");
const CHARACTER_ORANGE = document.querySelector(".characters__player--orange");
const PLAY = document.querySelector(".play");
const PLAYER_PINK = document.querySelector(".score__player--pink");
const PLAYER_WHITE = document.querySelector(".score__player--white");
const PLAYER_BLUE = document.querySelector(".score__player--blue");
const PLAYER_ORANGE = document.querySelector(".score__player--orange");
const POINTER = document.querySelector(".game__pointer");
const WHEEL = document.querySelector(".game__wheel");
const WINNER = document.querySelector(".winner");
const WINNER_IS = document.querySelector(".winner__is")

let players = 2
let winner 

let rot = 360;
let pink = "Pink";
let pinkScore = 0;
let white = "White";
let whiteScore = 0;
let blue = "Blue";
let blueScore = 0;
let orange = "Orange";
let orangeScore = 0;

function updateScore()
{
    PLAYER_PINK.innerHTML = pink + " : " + pinkScore
    PLAYER_WHITE.innerHTML = white + " : " + whiteScore
    PLAYER_BLUE.innerHTML = blue + " : " + blueScore
    PLAYER_ORANGE.innerHTML = orange + " : " + orangeScore
    if(players == 2)
    {
        CHARACTER_BLUE.classList.add("hidden")
        PLAYER_BLUE.classList.add("hidden")
        CHARACTER_ORANGE.classList.add("hidden")
        PLAYER_ORANGE.classList.add("hidden")
    }
    if(players == 3)
    {
        CHARACTER_BLUE.classList.remove("hidden")
        PLAYER_BLUE.classList.remove("hidden")
        CHARACTER_ORANGE.classList.add("hidden")
        PLAYER_ORANGE.classList.add("hidden")
    }
    if(players == 4)
    {
        CHARACTER_BLUE.classList.remove("hidden")
        PLAYER_BLUE.classList.remove("hidden")
        CHARACTER_ORANGE.classList.remove("hidden")
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
    setTimeout(() => 
    {
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

function disableButtons ()
{
    PLAY.disabled = true;
    PLAYER_ADD.disabled = true;
    PLAYER_REMOVE.disabled = true;
    setTimeout(() => 
    {
        PLAY.disabled = false;
        PLAYER_ADD.disabled = false;
        PLAYER_REMOVE.disabled = false;
    }, 6000);
};

PLAY.addEventListener("click", function()
{
    PLAY.classList.remove("spin-size")
    WINNER.classList.remove("show-winner")
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
            setTimeout (()=>
            {
                pinkScore += 1
            },6000);
            console.log("pink wins!!!")
            winner = pink
        }
        else  
        {
            setTimeout (()=>
            {
                whiteScore += 1
            },6000);
            console.log("white wins!!!")
            winner = white
        }
    }
    else if(players == 3)
    {
        if(result == 1 || result == 4  || result == 7 || result == 10)  
        {
            setTimeout (()=>
            {
                pinkScore += 1
            },6000);
            console.log("pink wins!!!")
            winner = pink
        }
        if(result == 2 || result == 5  || result == 8 || result == 11)  
        {
            setTimeout (()=>
            {
                whiteScore += 1
            },6000);
            console.log("white wins!!!")
            winner = white
        }
        if(result == 3 || result == 6  || result == 9 || result == 12)  
        {
            setTimeout (()=>
            {
                blueScore += 1
            },6000);
            console.log("blue wins!!!")
            winner = blue
        }
    }
    else if(players == 4)
    {
        if(result == 1 || result == 5  || result == 9)
        {
            setTimeout (()=>
            {
                orangeScore += 1
            },6000);
            console.log("orange wins!!!")
            winner = orange
        }
        if(result == 2 || result == 6  || result == 10)
        {
            setTimeout (()=>
            {
                pinkScore += 1
            },6000);
            console.log("pink wins!!!")
            winner = pink
        }
        if(result == 3 || result == 7  || result == 11)
        {
            setTimeout (()=>
            {
                whiteScore += 1
            },6000);
            console.log("white wins!!!")
            winner = white
        }
        if(result == 4 || result == 8  || result == 12)  
        {
            setTimeout (()=>
            {
                blueScore += 1
            },6000);
            console.log("blue wins!!!")
            winner = blue
        }
    }
    hideWinner()
    disableButtons()
    setTimeout(() => 
    {
        showWinner(winner)
        updateScore()
        PLAY.classList.add("spin-size")
    }, 6000);   
    return rot;
});

const SCORE = document.querySelector(".score");
const SCORE_CLOSE = document.querySelector(".score__close");
const SCORE_OPEN = document.querySelector(".navi__icon--scores");

SCORE_OPEN.addEventListener("click", function()
{
    SCORE.classList.remove("hidden")
    updateScore()
});

SCORE_CLOSE.addEventListener("click", function()
{
    SCORE.classList.add("hidden")
});

const SETTINGS = document.querySelector(".settings");
const SETTINGS_CLOSE = document.querySelector(".settings__close"); 
const SETTINGS_OPEN = document.querySelector(".navi__icon--settings");

SETTINGS_OPEN.addEventListener("click", function()
{
    SETTINGS.classList.remove("hidden")
    updateScore()
});

SETTINGS_CLOSE.addEventListener("click", function()
{
    SETTINGS.classList.add("hidden")
    loadWheel(players)
});

const PLAYER_ADD = document.querySelector(".players-num__set--add");
const PLAYER_REMOVE = document.querySelector(".players-num__set--remove");
const PLAYERS_NUMBER = document.querySelector(".players-num__number");

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
    updateScore()
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
    updateScore()
    return players
});

const RENAME_PLAYERS = document.querySelector(".settings__rename-player");
const RENAME_CLOSE = document.querySelector(".rename__close");
const RENAME_SETTINGS = document.querySelector(".rename");
const RENAME_INPUT = document.querySelectorAll(".player__new");
const RENAME_PINK = document.querySelector(".player__new--pink");
const RENAME_PINK_CONFIRM = document.querySelector(".player__confirm--pink");
const RENAME_WHITE = document.querySelector(".player__new--white");
const RENAME_WHITE_CONFIRM = document.querySelector(".player__confirm--white");
const RENAME_BLUE = document.querySelector(".player__new--blue");
const RENAME_BLUE_CONFIRM = document.querySelector(".player__confirm--blue");
const RENAME_ORANGE = document.querySelector(".player__new--orange");
const RENAME_ORANGE_CONFIRM = document.querySelector(".player__confirm--orange");

function renamePlayer(color)
{
    if(color === "pink")
    {
        pink = RENAME_PINK.value
        return pink
    }
    if(color === "white")
    {
        white = RENAME_WHITE.value
        return white
    }
    if(color === "blue")
    {
        blue = RENAME_BLUE.value
        return blue
    }
    if(color === "orange")
    {
        orange = RENAME_ORANGE.value
        return orange
    }
};

RENAME_PLAYERS.addEventListener("click", function()
{
    RENAME_SETTINGS.classList.remove("hidden")
    SETTINGS.classList.add("hidden")
});

RENAME_PINK_CONFIRM.addEventListener("click", function()
{
    renamePlayer("pink")
    RENAME_PINK_CONFIRM.innerHTML = ""
    RENAME_PINK_CONFIRM.classList.add("icon-ok", "mint")
});

RENAME_PINK.addEventListener("click", function()
{
    RENAME_PINK_CONFIRM.innerHTML = "Save"
    RENAME_PINK_CONFIRM.classList.remove("icon-ok", "mint")
});

RENAME_WHITE_CONFIRM.addEventListener("click", function()
{
    renamePlayer("white")
    RENAME_WHITE_CONFIRM.innerHTML = ""
    RENAME_WHITE_CONFIRM.classList.add("icon-ok", "mint")
});

RENAME_WHITE.addEventListener("click", function()
{
    RENAME_WHITE_CONFIRM.innerHTML = "Save"
    RENAME_WHITE_CONFIRM.classList.remove("icon-ok", "mint")
});

RENAME_BLUE_CONFIRM.addEventListener("click", function()
{
    RENAME_BLUE_CONFIRM.innerHTML = ""
    RENAME_BLUE_CONFIRM.classList.add("icon-ok", "mint")
    renamePlayer("blue")
});

RENAME_BLUE.addEventListener("click", function()
{
    RENAME_BLUE_CONFIRM.innerHTML = "Save"
    RENAME_BLUE_CONFIRM.classList.remove("icon-ok", "mint")
});

RENAME_ORANGE_CONFIRM.addEventListener("click", function()
{
    RENAME_ORANGE_CONFIRM.innerHTML = ""
    RENAME_ORANGE_CONFIRM.classList.add("icon-ok", "mint")
    renamePlayer("orange")
});

RENAME_ORANGE.addEventListener("click", function()
{
    RENAME_ORANGE_CONFIRM.innerHTML = "Save"
    RENAME_ORANGE_CONFIRM.classList.remove("icon-ok", "mint")
});

RENAME_CLOSE.addEventListener("click", function()
{
    RENAME_SETTINGS.classList.add("hidden")
    SETTINGS.classList.remove("hidden")
});