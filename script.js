'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

let value = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector('.score').textContent = 10;
let highscore = 0;
document.querySelector('.number').textContent = '?';

function updateScore() {
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('.number').textContent = value;
    }
}

document.querySelector('.check').addEventListener('click', 
    function() {
        const guess = Number(document.querySelector('.guess').value);
        if (!guess) {
            document.querySelector('.message').textContent = 'No Number!';
        } else if (guess === value) {
            document.querySelector('.message').textContent = 'Correct!';
            document.querySelector('.number').textContent = value;
            document.querySelector('body').style.backgroundColor = '#60b347';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } else if (guess > value) {
            document.querySelector('.message').textContent = 'Too high';
            document.querySelector('body').style.backgroundColor = '#FF0000';
            updateScore();
        } else if (guess < value) {
            document.querySelector('.message').textContent = 'Too low';
            document.querySelector('body').style.backgroundColor = '#FF0000';
            updateScore();
        } 
    }
)

document.querySelector('.again').addEventListener
('click', function () {
    value = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 10;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
})