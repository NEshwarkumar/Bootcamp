var readlineSync = require("readline-sync")
var score = 0
var userName = readlineSync.question("What is your Name ? ")
console.log("Welcome " + userName + " To DO YOU KNOW ME ?")

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer === answer) {
    console.log("Right!")
    score++
    console.log("Your Score is :",score)
  } else {
    console.log("Wrong!")
  }
}
// play("where do i stay?","HYD")
var questions = [{
  question :"Where Do I Stay?",
  answer:"HYD"
},
{
  question:"What Is My Age?",
  answer:"25"
}]
for (i =0 ; i<questions.length ;i++);
var currentQuestions = questions[i]
play(currentQuestions.question,currentQuestions.answer)
