/* Question 1
Given an integer, n, perform the following conditional actions:

If n is odd, print 1
If n is even and in the inclusive range of 2 to 5, print 0
If n is even and in the inclusive range of 6 to 20, print 1
If n is even and greater than 20, print 0
*/
const inputNumber = 17;

if (inputNumber % 2 !== 0) {
  console.log("1");
}
else if ((inputNumber % 2 == 0) && (inputNumber >=2 && inputNumber <=5)) {
  console.log("0");
} 
else if ( inputNumber % 2 == 0 && (inputNumber >= 6 && inputNumber <=20) ) {
  console.log("1");
}
else if (inputNumber % 2 ==0 && inputNumber > 20) {
    console.log("0")
}
else {
    console.log('Invalid Number')
}
