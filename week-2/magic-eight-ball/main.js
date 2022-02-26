const userName = 'Simon';
const userQuestion = 'Will i pass Dev30';
const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber)
var eightBall = randomNumber;

if (userName === '') {
    console.log('Hello!')
} else {
    console.log(userName)
}

console.log(`Eightball please give ${userName} an answer to:`, userQuestion);

// Switch statement to switch the eightball variable based on the random number. 
switch (eightBall) {
    case 0: 
      eightBall = 'It is certain';
       break;
    case 1: 
       eightBall = 'It is decidedly so you have been working hard';
       break;
    case 2: 
       eightBall = 'Reply hazy try again once you have done more study';
       break;
    case 3: 
       eightBall = 'Cannot predict now come back in 20days';
       break;
    case 4: 
       eightBall = 'Do not count on it tou have been slack';
       break;
    case 5: 
       eightBall = 'My sources say no 10101010';
       break;
    case 6: 
       eightBall = 'Outlook not so good';
       break;
    case 7: 
       eightBall = 'Signs point to yes your a hard worker!';
       break;
}


console.log(eightBall)