let computerGuess;
let userGuess=[];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio= new Audio("ting_1-47612.mp3");
let audio1 = new Audio("success-1-6297.mp3");
const init=()=>{
    computerGuess= Math.floor(Math.random()*100);
    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";
}; 

const newGameStart = () => {
    window.location.reload();

}

const startGame = ()=>{
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block"; //for display the screen we set display as block
};

// start new game logic

const startNewGame = () =>{
    audio.play();
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled",true); // setAttribute is a method that is used to disabled the usernumber and we have to put the action and there value 
};

// main logic

const compareGuess = () =>{
    audio.play();
    const userNumber= Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess,userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    // check the values is low or high
    if(userGuess.length < maxGuess){
        if(userNumber > computerGuess){
            userGuessUpdate.innerHTML = "Your Guess is High 😬";
            userNumberUpdate.value="";
        }else if(userNumber < computerGuess){
            userGuessUpdate.innerHTML = "Your Guess is Low 😅";
            userNumberUpdate.value="";
        }else{
            audio1.play();
            userGuessUpdate.innerHTML = "🎉 It's Correct! 😀";
            userNumberUpdate.value="";
            startNewGame();
        }

    }else{
        if(userNumber > computerGuess){
            userGuessUpdate.innerHTML = `You Lose!! 😢 Correct number was ${computerGuess}`;


            userNumberUpdate.value="";
            startNewGame();
        }else if(userNumber < computerGuess){
            userGuessUpdate.innerHTML = `You Lose!! 😢 Correct number was ${computerGuess}`;
            userNumberUpdate.value="";
            startNewGame();
        }else{
            userGuessUpdate.innerHTML = "It's Correct 🥳";
            userNumberUpdate.value="";
            startNewGame();
        }

    }
    document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = ()=>{
    audio.play();
    maxGuess = 6;
    startGame();
};

const hardMode = ()=>{
    audio.play();
    maxGuess = 3;
    startGame();
};


