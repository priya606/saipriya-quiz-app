// input

var user=require("readline-sync")
var userName=user.question("Enter user name ")
console.log("Welcome to FRIENDS QUIZ "+userName)
var score=0
var highScore = [
  {
    name: "Priya",
    score: 3,
  },

  {
    name: "Preethi",
    score: 2,
  },
]
// function
function quiz(question,answer){
  var userAnswer=user.question(question)
  if(userAnswer==answer){
    score=score+1
    console.log("you are right! "+score)
  }
  else{
    console.log("you are wrong! "+score)
    
  }
  console.log("score is "+score)
  console.log("------------------")
}
var q={
    question:"whom do you like more? ",   
    answer: "sita"
  }
var q1={
  question:"favorite food of your friend? ",
  answer:"idli"
}
var q3={
  question:"favorite place of your friend ? ",
  answer:"switzerland"
}
var q4={
  question:"favorite drink of your friend ? ",
  answer:"coffee"
}
var q5={
  question:" favorite movie genre of your friend ? ",
  answer:"Mr.Bean"
}
// output
questions=[q,q1,q3,q4,q5]
 for(i=0;i<questions.length;i++){
   newQuestions=questions[i]
   quiz(newQuestions.question,newQuestions.answer)
 }
console.log("your score is: "+score)
// console.log("Check out the high scores ");

function play(){
  if(score<3){
    console.log("you doesn't know much about your friend wishes"+score)
    console.log("Better luck next time")
  }
  else{
    console.log("YAY! you know about ur friend very well! "+score)
  }
  console.log("Check out the high scores ")
}
play();

function scores()
{
highScore.map(score => console.log(score.name, " : ", score.score))
}
scores();
