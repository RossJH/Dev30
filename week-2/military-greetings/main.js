
const name = 'Rugen';
const rank = 'Catcher';
const age = 42;

if (age < 18) {
console.log('You are too young for the military');
} else if (name === 'Rugen' && rank === 'Count' && age > 18){
    console.log('My name is Inigo Montoya, you killed my father, prepare to die')
} else if (rank === 'Captain') {
    console.log(`Aye Aye Captain ${name}`)
} else if (rank === 'Private' && age > 40){
    console.log(`What have you been doing with your life ${name}`)
} else ( console.log(`Hello ${rank} ${name}, i cannot wait to celebrate your ${age+1}th birthday next year`))
