'use strict';

let userName = prompt('Hello! Welcome to my About Me! What is your name?');
alert(`Nice to meet you ${userName}, thanks for stopping by! Lets play a game to help you get to know me better - for each question, answer either yes or no.`);
let questions = [`Ok ${userName}, let's get started. Here is your first question: Do I have a cat? y/n? `, 'Next question - do i know how to roller skate, yes or no?','Okay, question 3 - do I have any dogs, yes or no?','Question 4 - am I a polygot?',`Ok ${userName}, thins are going to get tricky now. Let me ask you, do I know how to whistle?`];
const correctAnswers = ['yes','yes','no','no','yes'];
const correctAnswers2 = ['y', 'y','n','n','y'];
const answerMessage = ['Yes! I have two cats!', 'Yes! I love roller skating!', 'Nope! I don\'t have any dogs.','No I am not a polygot, though I wish I were!', 'Yes - just barely, but I can whistle!'];
let userScore = 0;
let maxScore = 7;

function quiz(){
  let userAnswers = [];
  for(let i=0; i<questions.length; i++){
    userAnswers.push(prompt(questions[i]));
    if(userAnswers[i].toLowerCase() === correctAnswers[i] || userAnswers[i].toLowerCase() === correctAnswers2[i]){
      alert(answerMessage[i]);
      userScore+=1;
    }
    else{
      alert('Sorry, you got that wrong!');
    }
  }
}
function askNumber(){
  let allowedAttempts = 4;
  let randomNumber = Math.random() * (100 - 0) + 0;
  for(let i=0; i<allowedAttempts; i++){
    let userNumber = prompt('Guess a number 1 - 100');
    if(userNumber == randomNumber){
      alert('Yep, you guessed it!');
      userScore+=1;
    }
    else if(userNumber > randomNumber){
      alert('That guess was too high, try again!');
    }
    else if(userNumber < randomNumber){
      alert('That guess was too low, try again!');
    }
    else{
      alert('Try again!');
    }
  }
}
function multipleChoice(){
  let allowedAttempts = 6;
  let answerChoices = ['red', 'yellow', 'blue'];
  let userChoice = [];
  for (let i=0; i<allowedAttempts; i++){
    userChoice.push(prompt('Name a primary color'));
    console.log('user choice is......'+ userChoice);
    console.log('These are the answer choices', answerChoices);
    if(answerChoices.includes(userChoice[i].toLowerCase)){
      console.log('that was correct.......');
      alert('Correct!');
      userScore+=1;
    }else{
      alert('Nope, guess again!');
    }
  }
}
// 
// answerChoices.indexOf(userChoice.toLowerCase) !== -1
// userChoice.toLowerCase == 
// quiz();
// askNumber();
multipleChoice();

alert(`You guessed ${userScore} correctly out of ${maxScore}! Congrats!`);