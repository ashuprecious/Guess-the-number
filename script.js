'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore=0;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);


  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🤷‍♀️ No Number';
  } else if (guess === secretNumber) {
    //when player wins

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '✌ Correct Number !';
    document.querySelector('body').style.backgroundColor = "green";
    document.querySelector('.number').style.width = '30rem';
    if(score > highscore)
    highscore=score;
    document.querySelector('.highscore').textContent = highscore;

  }
  //when guess is too high

  else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretNumber? 'Too High !' :'Too Low !' ;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game !';
      document.querySelector('.score').textContent = 0;
    }
//when guess is too low

//   } else if (guess < secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = 'Too Low !';
//         score--;
//         document.querySelector('.score').textContent = score;
//       } else {
//         document.querySelector('.message').textContent = 'You Lost the game !';
//         document.querySelector('.score').textContent = 0;
//       }
  }
});

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.message').textContent = 'Start Guessing !';
    document.querySelector('.score').textContent = 0;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
});