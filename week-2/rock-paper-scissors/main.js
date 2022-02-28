
var humanScore = 0;
var computerScore = 0;


//User options Btn's clicks assigns to User choices. 
document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;

document.getElementById('gameReset').onclick = reload;

function reload() {
    window.location.reload();
}
//User choices
function playRock() {
  getUserChoice("rock");
}
function playPaper() {
  getUserChoice("paper");
}
function playScissors() {
  getUserChoice("scissors");
}

function getUserChoice(userChoice) {
  
  computerChoice = getComputerChoice();

  //Displays User and Bot choices. 
  document.getElementById('status').innerHTML = "<p>You played <strong>" + userChoice + "</strong>. The bot played <strong>" + computerChoice + "</strong>.</p>";
  

  //Compares user choice against computer choice to provide outcomes & tally the score. 
  if(userChoice == 'rock') {
    if(computerChoice == 'rock') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    } else if (computerChoice == 'paper') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    } else if (computerChoice == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      humanScore++;
    }
  } else if (userChoice == 'paper') {
    if(computerChoice == 'rock') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      humanScore++;
    } else if (computerChoice == 'paper') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    } else if (computerChoice == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    }  
  } else if (userChoice == 'scissors') {
    if(computerChoice == 'rock') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    } else if (computerChoice == 'paper') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      humanScore++;
    } else if (computerChoice == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    }  
  }
  
  //Assigns values to the scoreboard. 
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
}

// Gets computer choice randomly and assigns it to the 3 options. 
function getComputerChoice() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}
