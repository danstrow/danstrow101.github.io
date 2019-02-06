'use strict';


var counter = 0;



var tacos = prompt('Hello and welcome! How many tacos do you think I can eat?');
console.log('Number of tacos, ', tacos);
var name = prompt('Now that we have that out of the way, what is your name?');
console.log(name);
var userTacos = prompt('Nice to meet you ' + name + ' . Let\'s play a game. Do you think you can eat more tacos than me? Please say Y or N').toUpperCase();
console.log(userTacos);
if (userTacos == 'Y') {
  counter++;
  alert('Holy crap!');
} else {
  alert('you will get me next time');
}

function kids() {

  var kids = prompt('Do I have more than 1 kid? Please answer Y or N').toUpperCase();
  console.log(kids);
  if (kids === 'Y') {
    counter++;
    alert('Nope!');
  } else {
    alert('ding ding ding that is right');

  }
}
kids();

function hair() {

  var hair = prompt('Question two. Do I have hair, y or n?').toUpperCase();
  console.log(hair);
  if (hair == 'Y') {
    counter++;
    alert('Negative, Nancy');
  } else {
    alert('That is right. I am bald. Give yourself a point');
  }
}
hair();


function vacation() {
  var vacation = prompt('Number three. Did I go to the Bahamas in 2018?').toUpperCase();
  console.log(vacation);
  if (vacation == 'Y') {
    counter++;
    alert('winner winner chicken dinner give yourself a point');
  } else {
    alert('wrong! do not be jealous');
  }
}
vacation();


function parking() {
  var parking = prompt('Am I good at parallel parking? Y or N please').toUpperCase();
  console.log(parking);
  if (parking == 'Y') {
    counter++;
    alert('That is correct! I am the best');
  } else {
    alert('I pity the fool that thinks I am bad at parking');
  }
}
parking();


function birthDate() {

  var tries = 4;

  while (tries > 0) {
    var birthDate = prompt('What day of the month is my birthday?');
    console.log(birthDate);
    if (birthDate == 19) {
      // eslint-disable-next-line no-unused-vars
      var attempts = 0;
      alert('Genius! How did you know?');
      //some sort of breaking out of a loop
      break;
    } else if (birthDate < 19) {
      alert('Wrong! Too low. Try again.');
      tries--;
    } else {
      counter++;
      alert('Wrong. Too high. Try again');
      tries--;
    }
  }
}
birthDate();


function food() {

  for (var u = 0; u < 6; u++) {

    var food = ['tacos', 'pizza', 'burger', 'salad'];

    var userFoodAnswer = prompt('What is my favorite food ?');
    userFoodAnswer.toLowerCase();
    if (food.includes(userFoodAnswer)) {
      counter++;


      alert('You read me like a book. Nice!');
      console.log('user answer' + userFoodAnswer + 'to the question of what is my favorite food');
      break;

    } else {
      alert('Nah, try again brosef or brosefina.');
      console.log('user answer' + userFoodAnswer + 'to the question of what is my favorite food')



    }
  }
}
food();

alert('congratulations! You got: ' + counter + ' right');