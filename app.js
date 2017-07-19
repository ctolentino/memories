  'use strict';
  (function(){

  var countDown;
  //var timeLoss;
  var scoreIncrementer;
  var flippedCards;
  var score = document.getElementById('score')[0];
  var timer = document.getElementById('timer')[0];
  var endGame = document.getElementById('scoreBar')[0];

  function dealDeck() {
    var card = document.getElementsByClassName('cards');
    var pics = ["url('../assets/cat1.jpeg')", "url('../assets/cat2.jpg')", "url('/assets/dog1.jpg')", "('/assets/dog2.jpg')"];
    //timeLoss = 59;
    scoreIncrementer = 0;
    flippedCards = [];

    //endGame.style.display = 'none';

    //shuffle(pics);
     for (var i = 0; i < pics.length; i++) {
       if(card[i].classList.contains('flipped')) {
         card[i].classList.toggle('flipped');
       }
       console.log("checkquery", card[i].querySelector('.back'));
       card[i].querySelector('.back').style.backgroundImage = pics[i];
       card[i].addEventListener('click', flip);
     }
    score.innerText = '00';
    console.log("dealDeck works");
    //startTimer();
  }

function flip() {
 console.log("flip works");
  if (!this.classList.contains('flipped') && flippedCards.length < 2) {
          this.classList.toggle('flipped');

          flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
      }
    }
}
  
function checkMatch() {
  console.log("checkMatch works");
  if (flippedCards[0].querySelector('.back').style.backgroundImage === flippedCards[1].querySelector('.back').style.backgroundImage) {
    
    flippedCards = [];

    score.innerText = '0' + ++scoreIncrementer;
  }else {
      setTimeout(flipBack, 1500);
    }
}

function flipBack() {
  console.log("flipBack works");
  flippedCards[0].classList.toggle('flipped');
  flippedCards[1].classList.toggle('flipped');

  flippedCards = [];
}

  // function startTimer() {
  //   timer.innerText = '1:00';
  //   countDown = setInterval(decrementTime, 1000);
  // }

  // function decrementTime() {
  //   if (timeLoss === 0) {
  //     timer.innerText = '0:0' + timeLoss;
  //     clearInterval(countDown);
  //     finalize();
  //   }
  //   if (timeLoss < 10) {
  //     timer.innerText = '0:0' + timeLoss;
  //   }
  //   if (timeLoss >= 10) {
  //     timer.innerText = '0:' + timeLoss;
  //   }
  //   if (scoreIncrementer === 8){
  //     clearInterval(countDown);
  //     finalize();
  //   }
  //   timeLoss--;
  // }

  // function finalize() {
  //   var restart = document.getElementsByTagName('button')[0];
  //   restart.addEventListener('click', dealDeck);

  //   endGame.style.display = 'flex';

  //   if (scoreIncrementer === 8) {
  //     endGame.querySelector('h1').innerText = 'you win';
  //   }
  //   else {
  //     endGame.querySelector('h1').innerText = 'you lose';
  //   }
  //   endGame.querySelector('.final-score').innerText = 'score: ' + scoreIncrementer;
  //   endGame.querySelector('.time').innerText = 'time left: ' + timeLoss + ' sec.';
  // }

  // function shuffle(array) {
  //   for (var i = array.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // }
  dealDeck();
})();