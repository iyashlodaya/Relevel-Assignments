/* 
Given an integer, n, perform the following conditional actions:

If n is odd, print 1
If n is even and in the inclusive range of 2 to 5, print 0
If n is even and in the inclusive range of 6 to 20, print 1
If n is even and greater than 20, print 0


Input Format:
A single line containing a positive integer, n.

Constraints:
n lies between 1 and 100

Input:
17

Output:
1
*/

var isEven = (inputNumber) => inputNumber % 2 === 0;

var findEvenOdd = (inputNumber) => {
  if (!isEven(inputNumber)) {
    console.log("n is odd, print 1");
    return "1";
  } else if (isEven(inputNumber) && inputNumber >= 2 && inputNumber <= 5) {
    console.log("n is even and in the inclusive range of 2 to 5, print 0");
    return "0";
  } else if (isEven(inputNumber) && inputNumber >= 6 && inputNumber <= 20) {
    console.log("n is even and in the inclusive range of 6 to 20, print 1");
    return "1";
  } else {
    console.log("n is even and greater than 20, print 0");
    return "0";
  }
};

var result = findEvenOdd(20);
console.log(result);
