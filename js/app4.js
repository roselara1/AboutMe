'use strict';
//keep track of user points
var points = 0;
//greet and get user's name

alert('Well hello there! This page will tell you a bit about me, but before we get there, let\'s learn something about you first. Perhaps, your name?');

var user = prompt('What\'s your name?');
console.log('The user\'s name is ' + user);

//ask question 1
function q1(){
  alert ('Hi there, ' + user + '. I\'m going to ask you a few questions to teach you some things about me.');
  while (!user){
    user = prompt('What is your name?,', 'type your name here');
  }
  alert('This is a yes or no question, so please answer with yes or no ' + user +'.' );
  var answer1 = prompt('Do I like baking?').toLowerCase();
  console.log('The user answered question 1' + answer1);
  if (answer1 === 'No' || answer1 ==='no'){
    alert('Of course I do!');
  }
  else {
    alert('Correct! Sweet treats are my jam! Get it?');
    points++;
  }
}
q1();

alert('You have ' + points + ' out of 7!');

//ask question 2
alert('Question 2');
function q2() {
  var answer2 = prompt('Have I been to Europe?', 'yes or no').toLowerCase();
  console.log('The user answered question 1' + answer2);
  if (answer2 === 'yes' || answer2 === 'Yes'){
    alert('Aww I wish! I have mostly traveled around Asia, but Europe will happen one day.');}
  else {
    alert('You\'re good at this! Hmm, do you know me?...' );
    points++;
  }
}
q2();
alert('You have ' + points + ' out of 7!');

//ask question 3
alert('Question 3');
function q3() {
  var answer3 = prompt('Was I born in the United States?', 'yes or no').toLowerCase();
  console.log('The user answered question 1' + answer3);
  if (answer3 === 'Yes' || answer3 ==='yes'){
    alert('Nope! I was actually born in a beautiful country, surrounded by beaches, named Dominican Republic.');
  }
  else {
    alert('Correct, I was born in a beautiful country named Dominican Republic.');
    points++;
  }
  alert('You have ' + points + ' out of 7!');
}
q3();

//question 4
alert('Question 4');

function q4() {
  var answer4 = prompt('Can you name my hometown? Here\'s a hint, it\'s known as the "Big Apple".').toLowerCase();
  console.log('The user answered question 4 ' + answer4);
  if (answer4 === 'nyc' || answer4 ==='new york'|| answer4 ==='new york city'|| answer4 ==='manhattan'|| answer4 ==='the center of the universe'){
    alert('Yes! I moved to Manhattan when I was 3 years old love it very much!');
    points++;
  }
  else {
    alert( 'That was a great guess, but it was actually New York City. I moved there when I was 3 years old and it is still my favorite city in the world.');
  }
  alert('You have ' + points + ' out of 7!');
}
q4();

//ask question 5
alert('Question 5');
function q5() {
  var guess = prompt('Have I worked overseas?', 'yes or no').toLowerCase();
  console.log('The user answered question 1' + guess);
  if (guess === 'Yes' || guess ==='yes'){
    alert('Correct! I worked as an English teacher for several years in South Korea. I taught everything from business English to engineers, to basic English to preschoolers.');
    points++;
  }
  else {
    alert('Actually, I worked as an English teacher for several years in South Korea. I taught everything from business English to engineers, to basic English to preschoolers.');
  }
  alert('You have ' + points + ' out of 7!');
  alert('Question 6');
}
q5();

//ask question 6 use a for loop
var answer6 = 2;
function q6() {
  for (var i = 6; i >= 0; i--){
    var guess = prompt('How many countries did I travel to in 2017', 'Enter a number between 1 - 10').toLowerCase();
    console.log('The user answered question 1' + guess);


    if (guess > answer6) {
      alert ('Too high a number. Try again.');
      console.log(guess);
    }
    if (guess < answer6) {
      alert ('Too low a number. Try again');
      console.log(guess);
    }
    if (guess === '2' || guess === 'two') {
      alert('Correct! I visited a total of 2 countries.');
      console.log(guess);
      points++;
      break;
    }
  }
}
q6();
//end;
alert('You have ' + points + ' out of 7!');

alert('Question 7');

//ask question 7 use a for loop
function q7() {
  var answer7 = 'Thailand';

  for (var i = 6; i >= 0; i--){
    var guess7 = prompt('Now that you know I went to 2 countries, can you guess one of them? It starts with the letter "T", take a guess.').toLowerCase();
    console.log('The user answered question 7' + guess7);


    if (guess7 === 'Thailand' || guess7 ==='thailand'){
      alert('Yup! I stayed in Thailand for 12 wonderful days.');
      points++;
      break;
    }
    if (answer7 !== 'Thailand' || 'thailand');{
      alert ('No worries, you still have ' + i + '  more tries.');
    }
  }
}
q7();

alert ( 'You answered ' + points + ' out of 7 questions correctly!');