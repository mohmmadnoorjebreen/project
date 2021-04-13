/* eslint-disable no-empty */
/* eslint-disable no-trailing-spaces */
'use strict';

let out = [];
let user = prompt('Please enter your name');

alert('Welcome '+ user+', to my page');

let myName = prompt('Well ' + user+', now I want to do a quick quiz of 5 questions for you \n to determine how much you know about me\n'+'The first question: Is my name Muhammad,\n (answer with yes or no, y or n)');
myName= myName.toLocaleLowerCase();
//console.log(myName);
function q1(myName){
  switch(myName) {
  case 'yes':
    alert('Well done, thats right');
    out.push(1);
    break;
  case 'y':
    alert('Well done, thats right');
    out.push(1);
    break;
  case 'no':
    alert('Unfortunately, wrong answer.');
    break;
  case 'n':
    alert('Unfortunately, wrong answer.');
    break;
  default:
    alert('(answer with yes or no, y or n)');
    break;
  }
}
q1(myName);

let sport = prompt('The second question, is basketball my favorite sport?\n'+'(answer with yes or no, y or n)');
sport= sport.toLocaleLowerCase();
//console.log(sport);
function q2(sport){
  switch(sport) {
  case 'yes':
    alert('Unfortunately, wrong answer.');
    break;
  case 'y':
    alert('Unfortunately, wrong answer.');
    break;
  case 'no':
    alert('Well done, thats right');
    out.push(1);
    break;
  case 'n':
    alert('Well done, thats right');
    out.push(1);
    break;
  default:
    alert('(answer with yes or no, y or n)');
    break;
  }
}
q2(sport);

let major = prompt('The third question, was my college major a sport?\n'+'(answer with yes or no, y or n)');
major= major.toLocaleLowerCase();
//console.log(major);
q2(major);


let goal = prompt('The fourth question, is it one of my goals to be a software developer?\n'+'(answer with yes or no, y or n)');
goal= goal.toLocaleLowerCase();
//console.log(goal);
q1(goal);

let age = prompt('The fifth question, am I 23 years old?\n'+'(answer with yes or no, y or n)');
age =age.toLocaleLowerCase();
//console.log(age);
q1(age);


alert('Thank you for your time, '+user+'.\n If you get 3 or more correct answers, that means you know me well');


let number = prompt('The sixth question \n Guess a number between 1 and 20 \n This number is my favorite number');
console.log(number);

if(number !== '10'){
  for (let index = 0; index < 3; index++) {
    if (number === '10') {
      
      alert('well done , The correct answer is 10');
      out.push(1);
      index=3;
    } else if (number <10){alert(' guess is too low');
      number = prompt('Try again with a larger number');}
    
    else
    {
      alert('guess is too high');
      number = prompt('Try again with a lower number');
    }
     
  }
  if (number !== '10'){
    alert('Unfortunately, your four attempts have ended, The correct answer is 10');
  }
  if (number === '10') {
      
    alert('well done , The correct answer is 10');
    out.push(1);
  }
}

else {
  alert('well done , The correct answer is 10');
  out.push(1);
}

let traveled = ['paris','rome','new york city','peru','athens','india'];
let array = prompt('7th question\n I have visited a lot places in my life, in fact I have visited to 6 different places,\n I want you to guess one of these places, you have six attempts');
console.log(array);
array = array.toLocaleLowerCase();

if(array !== traveled[0] && array !== traveled[1] && array !== traveled[2] && array !== traveled[3] && array !== traveled[4] && array !== traveled[5]) {
  for (let index = 0; index < 5; index++) {
    if (array === traveled[0] && array !== traveled[1] && array !== traveled[2] && array !== traveled[3] && array !== traveled[4] && array !== traveled[5]) {
      
      alert('well done , The correct answer is Paris,Rome,New York City,Peru,Athens,India');
      out.push(1);
      index=5;
    } else{
      array = prompt('Try again');
    }
     
  }
  if (array !== traveled[0] && array !== traveled[1] && array !== traveled[2] && array !== traveled[3] && array !== traveled[4] && array !== traveled[5]){
    alert('Unfortunately, your four attempts have ended, The correct answer is Paris,Rome,New York City,Peru,Athens,India');
  }
  else{
    alert('well done , The correct answer is Paris,Rome,New York City,Peru,Athens,India');
    out.push(1);
  }
}
else {
  alert('well done , The correct answer is Paris,Rome,New York City,Peru,Athens,India');
  out.push(1);
}


let result = out.length;
alert('Well your final score is ' + result+ ' out of 7');

