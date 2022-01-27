'use strict';
// console.log(document.querySelector('.message').textContent = 'Correct Answer!!!!');
// console.log(document.querySelector('.number').textContent = 13);
// console.log(document.querySelector('.guess').value = 23);

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secreteNumber);

const displatMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

let score = 20;
let remainderTrials = 0;
let points = 0;
//when the click button is clicked
document.querySelector('.check').addEventListener(('click'), function () {
    const inputValue = Number(document.querySelector('.guess').value);
    // console.log(`${inputValue} from first dom`);

    //when there are no inputs
    if (!inputValue) {
        document.querySelector('.message').textContent = 'No Number!!!!';
    }
    //when the player wins
    else if (inputValue === secreteNumber) {
        displatMessage('Correct Number!!!!');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.guess').style.color = 'black'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secreteNumber;

        let trialCount = (document.querySelector('.score').textContent = Number(20) - score);
        console.log(`This trialCount is ${trialCount}`)
        document.querySelector('.score').textContent = trialCount;
        remainderTrials = 20 - trialCount;
        console.log(`This remainderTrials is ${remainderTrials}`)
        document.querySelector('.score').textContent = trialCount;
        points = points + 1
        document.querySelector('.highscore').textContent = points;
        secreteNumber = Math.trunc(Math.random() * 20) + 1;
        console.log(secreteNumber);
        document.querySelector('.number').textContent = '?';
        document.querySelector('body').style.backgroundColor = 'brown';
        document.querySelector('.guess').style.color = 'blue'
    }
    //when the player guesses too high
    else if(inputValue !== secreteNumber) {
            if (score > 1) {
                displatMessage(inputValue > secreteNumber ? 'Too high !!!': 'Too Low');;
                score = score - 1;
                let trialCount = (document.querySelector('.score').textContent = Number(20) - score);
                console.log(trialCount);
            } else {
                displatMessage('Nice Trials. Try Again!!!!');
                document.querySelector('body').style.backgroundColor = 'green';
            }
        //when the player guesses too low
            // if (score > 1) {
            //     score = score - 1;
            //     document.querySelector('.message').textContent = 'Too low!!!!';
            //     console.log(document.querySelector('.score').textContent = score);
            // } else {
            //     document.querySelector('.message').textContent = 'Nice Trials. Try Again!!!!!!';
            //     document.querySelector('body').style.backgroundColor = 'green';
            //     // return reloadPage;
            // } 
    }
});

//when the again button is clicked
document.querySelector('.again').addEventListener(('click'), function () {
    score = 20;
    secreteNumber = Math.trunc(Math.random() * 20) + 1;
    const inputValue = Number(document.querySelector('.guess').value);
    displatMessage('Start guessing!!!!');
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.guess').style.color = 'blue'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '20rem'
    document.querySelector('.score').textContent = score;

});

//restart the game
document.querySelector('.restart').addEventListener(('click'), function() {
    document.location.reload();
    // console.log('restart was clicked');
});
