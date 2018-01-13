'use strict';

alert('Hello there! Today we will play a little yes or no game featuring me!');


alert('This is a yes or no question, so please answer with yes or no.' );
var answer1 = prompt('Do I like baking?').toLowerCase();
console.log('The user answered question 1' + answer1);
if (answer1 === 'No' || answer1 ==='no'){
  alert('Um, what?! Of course I do!');
}
else {
  alert('Correct! Sweet treats are my jam! Get it?');
}

alert('Question 2');

var answer2 = prompt('Have I been to Europe?').toLowerCase();
console.log('The user answered question 1' + answer2);
if (answer2 === 'yes' || answer2 === 'Yes'){
  alert('Aww I wish! I have mostly traveled around Asia, but Europe will happen one day.');    }
else {
  alert('You\'re good at this! Wait, do you know me? O.o' );
}

alert('Question 3');

var answer3 = prompt('Do I watch sports?').toLowerCase();
console.log('The user answered question 1' + answer3);
if (answer3 === 'Yes' || answer3 ==='yes'){
  alert('Nope! Nice try though.');
}
else {
  alert('Yup! I do not care for sports at all.');
}

alert('Question 4');

var answer4 = prompt('Do I live in Washington state?').toLowerCase();
console.log('The user answered question 1' + answer4);
if (answer4 === 'Yes' || answer4 ==='yes'){
  alert('Yes, I do! For now...');
}
else {
  alert( 'Sorry, I actually DO live in Washington state.');
}

alert('Question 5');

var answer5 = prompt('Is my favorite color blue?').toLowerCase();
console.log('The user answered question 1' + answer5);
if (answer5 === 'Yes' || answer5 ==='yes'){
  alert('Blue is a nice color, but not my favorite. My favorite color is purple');        }
else {
  alert('Correct! My favorite color is purple.');

  alert('Thank you! I hope to learn about you someday.');
}
