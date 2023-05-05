'use strict';

let userName = '';
const correctAnswers = ['yes','yes','no','no','yes'];
const correctAnswers2 = ['y', 'y','n','n','y'];
const answerMessage = ['Yes! I have two cats!', 'Yes! I love roller skating!', 'Nope! I don\'t have any dogs.','No I am not a polygot, though I wish I were!', 'Yes - just barely, but I can whistle!'];
let userScore = 0;
let maxScore = 7;

function greeting(){
  userName = prompt('Hello! Welcome to my About Me! What is your name?');
  alert(`Nice to meet you ${userName}, thanks for stopping by! Lets play a game to help you get to know me better - for each question, answer either yes or no.`);
}
function quiz(){
  let userAnswers = [];
  let questions = [`Ok ${userName}, let's get started. Here is your first question: Do I have a cat? y/n? `, 'Next question - do i know how to roller skate, yes or no?','Okay, question 3 - do I have any dogs, yes or no?','Question 4 - am I a polygot?',`Ok ${userName}, things are going to get tricky now. Let me ask you, do I know how to whistle?`];
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
  let userChoice = '';
  for (let i=0; i<allowedAttempts; i++){
    userChoice = prompt('Name a primary color');
    if(answerChoices.includes(userChoice.toLowerCase())){
      console.log('that was correct.......');
      alert('Correct!');
      userScore+=1;
      break;
    }else{
      if(i===5){
        alert('Sorry you are incorrect and out of guesses.');
        break;
      }
      alert('Nope, guess again!');
    }
  }
}
greeting();
quiz();
askNumber();
multipleChoice();

alert(`You guessed ${userScore} correctly out of ${maxScore}! Congrats!`);