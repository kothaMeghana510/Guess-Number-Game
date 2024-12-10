'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const winning = document.querySelector('.winningmodel');
const loosing = document.querySelector('.losingmodel');
const overlay = document.querySelector('.overlay');

const closebutton = function (){
    winning.classList.add('hidden');
    loosing.classList.add('hidden');
    overlay.classList.add('hidden');
}

const closemodel = document.querySelectorAll('.closemodel');
console.log(closemodel);
for(let i = 0; i < closemodel.length; i++ ){
    closemodel[i].addEventListener('click', closebutton);
    
}

const outSideClose = function(){
    winning.classList.add('hidden');
    loosing.classList.add('hidden');
    overlay.classList.add('hidden');
}

overlay.addEventListener('click', outSideClose);

document.querySelector('.check').addEventListener('click', function() {
    // Assainging user input to a variable 
    const guessNumber = Number(document.querySelector('.userinput').value);
    console.log(guessNumber);
    // output for not a number
    if(!guessNumber) {
        document.querySelector('.message').textContent = "Not a Number!";
    }
    if(guessNumber < randomNumber){
        //when -ve numbers are entered
        if(guessNumber < 0){
            document.querySelector('.message').textContent = "Number Should Between 0 to 20!";
        // the process should be done only when we have score above 100 otherwise user lost the game
        }else if(score > 1){
            document.querySelector('.message').textContent = "📉 Too Low!";
            score = score - 1;
            document.querySelector('.value').textContent = score;
        // user lost the game as the score is 0
        }else{
            document.querySelector('.message').textContent = "😔 You Lost Game!";
            document.querySelector('.value').textContent = 0;

            loosing.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }
     // if guessed number is greater than secret number
    }else if(guessNumber > randomNumber){
        //when  numbers greater than 20 are entered
        if(guessNumber > 20){
            document.querySelector('.message').textContent = "Number Should Between 0 to 20!";
            }else if(score > 1){
            document.querySelector('.message').textContent = "📈 Too High!";
            score = score - 1;
            document.querySelector('.value').textContent = score;
        }else{
            document.querySelector('.message').textContent = "😔 You Lost Game!";
            document.querySelector('.value').textContent = 0;

            loosing.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }
    }else if(guessNumber === randomNumber){
        document.querySelector('.message').textContent = " 😁Congratulations You Won!!";
        document.querySelector('.secretnumber').textContent = randomNumber;

        //Implementing High scores
        if (score > highScore){
            highScore = score;
            document.querySelector('.high').textContent = highScore;
        }
        overlay.classList.remove('hidden');
        winning.classList.remove('hidden');
        document.querySelector('.winningscore').textContent = score;

    }
});


const playAgain = document.querySelectorAll('.reset');
console.log(playAgain);

const reset = function(){

    winning.classList.add('hidden');
    loosing.classList.add('hidden');
    overlay.classList.add('hidden');

    randomNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('.message').textContent = "Start Guessing...";

    document.querySelector('.userinput').value = "";
    document.querySelector('.secretnumber').textContent = "Guess Me!!"
    document.querySelector('.value').textContent = score;


    document.querySelector('.message').style.fontWeight = "normal";
    document.querySelector('body').style.backgroundColor = "#1c1c1c";
    document.querySelector('body').style.color = "WhiteSmoke";

}

for(let j = 0; j < playAgain.length; j++){
    playAgain[j].addEventListener('click', reset);
}

/*
document.querySelector('.reset').addEventListener('click', function(){
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('.message').textContent = "Start Guessing...";

    document.querySelector('.userinput').value = "";
    document.querySelector('.secretnumber').textContent = "Guess Me!!"
    document.querySelector('.value').textContent = score;


    document.querySelector('.message').style.color = "black";
    document.querySelector('.message').style.fontWeight = "normal";
    document.querySelector('body').style.backgroundColor = "MintCream";
    document.querySelector('body').style.color = "black";
    document.querySelector('.again').style.color = "black";
    
});*/