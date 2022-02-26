let raceNumber = Math.floor(Math.random() * 1000);
const earlyStart = raceNumber + 1000;
var earlyRunner = false;
var adultAge = 18; 

// Early runner criteria met
if (earlyRunner === true && adultAge > 18) {
   earlyStart
  console.log(`You registered for the early adult race starting at 9:30am, here is your race number: ${earlyStart}`);

  //Late runner criteria met
} else if (earlyRunner === false && adultAge > 18){
    raceNumber
    console.log(`You registered for the late adult race starting at 11:00am, here is your race number: ${raceNumber}`);
    
    //Youth runner criteria met
} else if (adultAge <= 18) {
    raceNumber
    console.log(`You registered for the late youth race starting at 12:30pm, here is your race number: ${raceNumber}`);
}

