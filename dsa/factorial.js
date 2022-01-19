/* const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Enter The Logic Number by which you want to find factorial? \n Enter 1 for Recursion Logic, Enter 2 for Loop based Logic:`,
  (choiceOfLogic) => {
    let choice = choiceOfLogic;
    console.log(`choice is ${choice} typeof ${typeof choice}`);
    readline.question(`Enter Number to calculate factorial: `, (num) => {
      const f = calculateFactorial(num, parseInt(choice));
      console.log(`Factorial of Number ${num} is ${f}`);
      readline.close();
    });
  }
);

function calculateFactorial(num, choice) {
  let result;
  switch (choice) {
    case 1:
      if (num === 0 || num === 1) return 1;
      else {
        result = num * calculateFactorial(num - 1, choice);
      }
      break;

    case 2:
      let factorial = 1;
      for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
      }
      result = factorial;
      break;
    default:
      console.log(`Invalid Choice / Number`);
  }
  return result;
} */

function calculateFactorialByRecursion(num) {
  if (num === 0 || num === 1) return 1;
  else {
    return num * calculateFactorialByRecursion(num - 1);
  }
}

function calculateFactorialByLoop(num, fact = 1) {
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

const result = calculateFactorialByRecursion(10);
const result2 = calculateFactorialByLoop(4);
console.log(result);
console.log(result2);
