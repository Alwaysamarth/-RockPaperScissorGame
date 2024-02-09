let userScore=0;
let compScore=0;
let msg = document.getElementById("msg");
let userNewScore=document.querySelector(`#user-score`);
let compNewScore=document.querySelector(`#comp-score`);
const showWinner=(userWin)=>{
  if(userWin){
    userScore++;
    msg.innerText="You Won";
    msg.style.backgroundColor= "green";
    console.log("You Won");
    userNewScore.innerText=userScore;
  }else{
    compScore++
    console.log(`You Lose`)
    msg.innerText=`You Lose`;
    msg.style.backgroundColor= "red";
    compNewScore.innerText=compScore;
  }
}
const genCompChoice = () => {
  const options= ['rock', 'paper', 'scissors'];
  const randomIndex =Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
const drawGame = () => {
  console.log(`Game draw!`);
  msg.innerText=`Game Draw!`;
}
const playGame = (choiceId) =>{
  console.log(`User Choice = `,choiceId)
  const compChoice = genCompChoice()
  console.log(`Computer Choice = `,compChoice)
  if(choiceId === compChoice){
    drawGame()
  }else{
    let userWin = true
    if(choiceId === 'rock'){
      userWin = compChoice === 'paper' ? false : true;
    }else if (choiceId === 'paper'){
      userWin = compChoice === 'scissors' ? false : true;
    }else{
      compChoice === 'rock' ? false : true;
    }
      
    showWinner(userWin)
  }
  
}
const choices =document.querySelectorAll(`.choice`);
choices.forEach((choice)=>{
  console.log(choice)
  choice.addEventListener('click',()=>{
    console.log(`choice clickez`)
    const choiceId=choice.getAttribute('id');
    playGame(choiceId);  
  })
    
})