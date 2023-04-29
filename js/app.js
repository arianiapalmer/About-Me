'use strict';

let userName = prompt('Hello! Welcome to my About Me! What is your name?');
alert(`Nice to meet you ${userName}, thanks for stopping by! Lets play a game to help you get to know me better - for each question, answer either yes or no.`);

function question1() {
  let q1 = prompt(`Ok ${userName}, let's get started. Here is your first question: Do I have a cat? y/n? `);
  if(q1.toLowerCase === 'yes' || q1.toLowerCase === 'y'){
    console('By gum, you\'ve got it!');
  }else{
    console.log('Your answer was incorrect - and I actually have 2!');
  }
}
function question2(){
  let q2 = prompt('Next question - do i know how to roller skate, yes or no?');
  if(q2.toLowerCase === 'yes' || q2.toLowerCase === 'y'){
    console.log('You know me so well, I knew this was a great idea!');
  } else{
    console.log('sorry, that\'s WRONG');
  }
}
function question3(){
  let q3 = prompt('Okay, question 3 - do I have any dogs, yes or no?');
  if(q3.toLowerCase === 'no' || q3.toLowerCase === 'n'){
    console.log('Almost got you, good catch!');
  } else{
    console.log('sigh - thats wrong friend');
  }
}
function question4(){
  let q4 = prompt('Question 4 - am I a polygot?');
  if(q4.toLowerCase === 'no' || q4.toLowerCase === 'n'){
    console.log('While I wish I spoke multiple languages, I am not. Good answer!');
  } else{
    console.log('I\'m flattered you thought this was true - polygots are cool!');
  }
}
function question5(){
  let q5 = prompt(`Ok ${userName}, you've made it to the end. The last questions is ... do I know how to whistle?`);
  if(q5.toLowerCase === 'yes' || q5.toLowerCase === 'y'){
    console.log('Barely, but it passes! Congrats!');
  } else{
    console.log('Actually, I can!');
  }
}
question1();
question2();
question3();
question4();
question5();