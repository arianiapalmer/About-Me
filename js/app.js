'use strict';
function random(number) {
  return Math.floor(Math.random()*number);
}

let userName = prompt('Hello! Welcome to my About Me! What is your name?');
alert(`Nice to meet you ${userName}, thanks for stopping by! Lets play a game to help you get to know me better - for each question, answer either yes or no.`);
let questions = [`Ok ${userName}, let's get started. Here is your first question: Do I have a cat? y/n? `, 'Next question - do i know how to roller skate, yes or no?','Okay, question 3 - do I have any dogs, yes or no?','Question 4 - am I a polygot?',`Ok ${userName}, thins are going to get tricky now. Let me ask you, do I know how to whistle?`];
const correctAnswers = ['yes','yes','no','no','yes'];
const correctAnswers2 = ['y', 'y','n','n','y'];
const answerMessage = ['Yes! I have two cats!', 'Yes! I love roller skating!', 'Nope! I don\'t have any dogs.','No I am not a polygot, though I wish I were!', 'Yes - just barely, but I can whistle!'];
let userScore = 0;

function quiz(){
  let userAnswers = [];
  for(let i=0; i<questions.length; i++){
    userAnswers.push(prompt(questions[i]));
    if(userAnswers[i].toLowerCase() === correctAnswers[i] || userAnswers[i].toLowerCase() === correctAnswers2[i]){
      alert(answerMessage[i]);
      console.log('correct answer');
      userScore+=1;
    }
    else{
      alert('Sorry, you got that wrong!');
      console.log('incorrect answer');
    }
  }
}
function askNumber(){
  let allowedAttempts = 4;
  // let randomNumber = function(min, max){
  //   min = Math.ceil(1);
  //   max = Math.floor(100);
  //   return Math.floor(Math.random() * (max - min) + min);
  // };
  let randomNumber = 54;
  console.log('The randomly generated number is....',randomNumber);
  for(let i=0; i<allowedAttempts; i++){
    let userNumber = prompt('Guess a number 1 - 100');
    console.log('This is attempt....',allowedAttempts);
    if(userNumber === randomNumber){
      alert('Yep, you guessed it!');
      userScore+=1;
    }else if(userNumber < randomNumber){
      alert('That guess was too high, try again!');
    }else{
      alert('That was too low, guess again!');
    }
  }
  console.log('There are ', allowedAttempts, 'allowed attempts left');
}
// function multipleChoice(){
//   let allowedAttempts = 6;
//   let 
//   switch()

// }

// quiz();
askNumber();
// multipleChoice();

alert('Thanks for playing!');
