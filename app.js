  var countDown;
  //var timeLoss;
  var scoreIncrementer;
  var flippedCards;
  var score = document.getElementsByClassName('score')[0];
  var timer = document.getElementsByClassName('timer')[0];
  var endGame = document.getElementsByClassName('game-over')[0];

  function dealDeck() {
    var card = document.getElementsByClassName('cards');
    var pics = ["/assets/cat1.jpeg", "/assets/cat2.jpg", "/assets/dog1.jpg", "/assets/dog2.jpg"];
    //timeLoss = 59;
    //scoreIncrementer = 0;
    //flippedCards = [];

    //endGame.style.display = 'none';

    //shuffle(pics);

    //terminates at the number of cards
     for (var i = 0; i < card.length; i++) {
       if(card[i].classList.contains('flipped')) {
         card[i].classList.toggle('flipped');
       }
       card[i].querySelector('img').src = pics[i];
       console.log(card[i].addEventListener('click', flip));
     }
    //score.innerText = '00';
    console.log("dealDeck works");
    //startTimer();
  }

  function flip() {
  console.log("flip works");
	// if (!this.classList.contains('flipped') && flippedCards.length < 2) {
 //       		this.classList.toggle('flipped');

 //  		    flippedCards.push(this);

 // 		if (flippedCards.length === 2) {
 //  			checkMatch();
 //  		}
 //    }
   }

// function checkMatch() {
//  	if (flippedCards[0].querySelector('img').src === flippedCards[1].querySelector('img').src) {
		
// 		flippedCards = [];

// 		score.innerText = '0' + ++scoreIncrementer;
// 	}else {
//   		setTimeout(flipBack, 1500);
//   	}
// }

// function flipBack() {
// 	flippedCards[0].classList.toggle('flipped');
// 	flippedCards[1].classList.toggle('flipped');

// 	flippedCards = [];
// }

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


//cards for the game
// var imgArray = ["assets/cat1.jpeg", "assets/cat2.jpg", "assets/dog1.jpg", "assets/dog2.jpg"];
// console.log("docimage", document.images[0]);
// //card identifiers
// var cardArray = [];
// cardArray[0]=document.getElementById("c1");
// cardArray[1]=document.getElementById("c2");
// cardArray[2]=document.getElementById("c3");
// cardArray[3]=document.getElementById("c4");
// cardArray[4]=document.getElementById("c5");
// cardArray[5]=document.getElementById("c6");
// cardArray[6]=document.getElementById("c7");
// cardArray[7]=document.getElementById("c8");

// var i = 0;
// var imgElement = document.getElementById("c1");

// function on(){
 
//  var time = 60;

// //timer function
//  var downloadTimer = setInterval(function() {
//  time--;
//  // Display the result in the element with id="demo"
//  document.getElementById("timer").innerHTML = time;

//  // If the count down is finished, write some text
//  if (time < 0) {
//    clearInterval(downloadTimer);
//    document.getElementById("timer").innerHTML = "EXPIRED";
//  }
//  }, 1000);
// }

// //changing cards
// var x = document.getElementById("c1");

// /*function score(){

// }*/

// function flip() {
//     if (!this.classList.contains('flipped') && cardArray.length < 2) {
//       this.classList.toggle('flipped');


//       cardArray.push(this);

//       //if (cardArray.length === 2) {
//         //checkMatch();
//       }
    
// var click1;
// var click2;
// var clickCount = 0;
// var cback = document.getElementById("c1")

// function flip(card){
// 	console.log("hello");
// 	console.log("document.images", document.images[card].src);
	
// 	click1 = document.images[card].src = imgArray[0];
// 	console.log("click1", click1);
// 	clickCount++;

// //if clicked and it's a card back && the correct card ID, 
// //then we want to change it to the card array
// 	//if (document.images[card].src === "../assets/cardback.jpg"){ 
// 		//&& x === cardArray[i]){
// //			imgElement.src = images[i];
// 			//console.log("hi again");
// 	//}
	
// 	// }else if(i === 0 && getElementById("c2")){
// 	// 	i = 2;
// 	// }else if(i === 0 && getElementById("c3")){
// 	// 	i = 3;
// 	// }else if(i === 0 && getElementById("c4")){
// 	// 	i = 4;
// 	// }else if(i === 0 && getElementById("c5")){
// 	// 	i = 5;
// 	// }else if(i === 0 && getElementById("c6")){
// 	// 	i = 6;
// 	// }else if(i === 0 && getElementById("c7")){
// 	// 	i = 7;
// 	// }else if(i === 0 && getElementById("c8")){
// 	// 	i = 8;
// 	// }else{
// 	// 	i = 0;
// 	}

