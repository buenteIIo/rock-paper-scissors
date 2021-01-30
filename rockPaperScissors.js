const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); //difference is that here we are using
  //the argument
  //user = 'hello' this is only to demonstrate that a if var is missing, then
  //the variable becomes global (if it is inside a fucntion)
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Enter valid choice');
  }
}
//console.log(user); line to prove lines 3-4 (it should not log anything)

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors'
  }
}

const determineWinner = (userChoice, computerChoice) => {
  console.log(userChoice, computerChoice);
  if (userChoice === computerChoice) {
    return 'It is a tie!'
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You win!'
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You win!';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

const playGame = () => {
  const userChoice = getUserChoice('PAPER');
  const computerChoice = getComputerChoice();
  console.log(`Your choice: ${userChoice}\nComputer choice: ${computerChoice}`);
  return determineWinner(userChoice, computerChoice);
}
