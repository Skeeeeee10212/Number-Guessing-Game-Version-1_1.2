// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running == true){

    guess = window.prompt(`Guess a Number Between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please Enter a Valid Number");
    }
else if(guess < minNum || guess > maxNum){
    window.alert("Please Enter a Number Between 1-100");
}
else{
    attempts++;
    if(guess < answer){
        window.alert("TOO LOW! TRY AGAIN!");
    }
    else if(guess > answer){
        window.alert("TOO HIGH! TRY AGAIN!");
    }
    else{
        window.alert(`CORRECT! The Answer was ${answer}. It Took You ${attempts} attempts`);
        running = false;
    }
}
    
}
const refreshBtn = document.getElementById("refreshBtn");

refreshBtn = onclick.location.reload();