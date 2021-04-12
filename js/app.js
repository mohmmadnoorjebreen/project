'use strict';

let user = prompt('Please enter your name');

alert('Welcome '+ user+', to my page');

let myName = prompt('Well ' + user+', now I want to do a quick quiz of 5 questions for you \n to determine how much you know about me\n'+'The first question: Is my name Muhammad,\n (answer with yes or no, y or n)');
myName.toLocaleLowerCase;
console.log(myName);
function q1(myName){
  switch(myName) {
  case 'yes':
    alert('Well done, thats right');
    break;
  case 'y':
    alert('Well done, thats right');
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
sport .toLocaleLowerCase;
console.log(sport);
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
    break;
  case 'n':
    alert('Well done, thats right');
    break;
  default:
    alert('(answer with yes or no, y or n)');
    break;
  }
}
q2(sport);

let major = prompt('The third question, was my college major a sport?\n'+'(answer with yes or no, y or n)');
major .toLocaleLowerCase;
console.log(major);
q2(major);


let goal = prompt('The fourth question, is it one of my goals to be a software developer?\n'+'(answer with yes or no, y or n)');
goal .toLocaleLowerCase;
console.log(goal);
q1(goal);

let age = prompt('The fifth and final question, am I 23 years old?\n'+'(answer with yes or no, y or n)');
age.toLocaleLowerCase;
console.log(age);
q1(age);


alert('Thank you for your time, '+user+'.\n If you get 3 or more correct answers, that means you know me well');
