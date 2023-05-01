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

function quiz(){
  let userAnswers = [];
  for(let i=0; i<questions.length; i++){
    userAnswers.push(prompt(questions[i]));
    if(userAnswers[i].toLowerCase() === correctAnswers[i] || userAnswers[i].toLowerCase() === correctAnswers2[i]){
      alert(answerMessage[i]);
      console.log('correct answer');
    }
    else{
      alert('Sorry, you got that wrong!');
      console.log('incorrect answer');
    }
  }
}
quiz();
console.log('quiz done');

// function question1() {
//   let q1 = prompt(`Ok ${userName}, let's get started. Here is your first question: Do I have a cat? y/n? `);
//   if(q1.toLowerCase === 'yes' || q1.toLowerCase === 'y'){
//     console('By gum, you\'ve got it!');
//   }else{
//     console.log('Your answer was incorrect - and I actually have 2!');
//   }
// }
// function question2(){
//   let q2 = prompt('Next question - do i know how to roller skate, yes or no?');
//   if(q2.toLowerCase === 'yes' || q2.toLowerCase === 'y'){
//     console.log('You know me so well, I knew this was a great idea!');
//   } else{
//     console.log('sorry, that\'s WRONG');
//   }
// }
// function question3(){
//   let q3 = prompt('Okay, question 3 - do I have any dogs, yes or no?');
//   if(q3.toLowerCase === 'no' || q3.toLowerCase === 'n'){
//     console.log('Almost got you, good catch!');
//   } else{
//     console.log('sigh - thats wrong friend');
//   }
// }
// function question4(){
//   let q4 = prompt('Question 4 - am I a polygot?');
//   if(q4.toLowerCase === 'no' || q4.toLowerCase === 'n'){
//     console.log('While I wish I spoke multiple languages, I am not. Good answer!');
//   } else{
//     console.log('I\'m flattered you thought this was true - polygots are cool!');
//   }
// }
// function question5(){
//   let q5 = prompt(`Ok ${userName}, thins are going to get tricky now. Let me ask you, do I know how to whistle?`);
//   if(q5.toLowerCase === 'yes' || q5.toLowerCase === 'y'){
//     console.log('Barely, but it passes! Congrats!');
//   } else{
//     console.log('Actually, I can!');
//   }
// }
// function question6(){
//   let q6 = prompt('Guess any number 1-50');
//   let num = Math.floor(Math.random() * 51);
//   let guesses = 
//   for(int i=0; i <= 6; i++){
//     switch(q6 === num){
//       alert(`Correct! The number was ${num}. You must be a psychic ;)`);
//       break;
//     } else {
//       alert('Sorry, that was incorrect!);

//     }
//   }
// }
// question1();
// question2();
// question3();
// question4();
// question5();
// question6()