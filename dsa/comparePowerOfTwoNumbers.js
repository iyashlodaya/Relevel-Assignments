/* 
Abhi gave integers a, b and n to Raj. Raj wants to compare an and bn. Help Raj with
this task.

Input
● The first line of the input contains a single integer T denoting the 
number of test cases. The description of T test cases follows.

● The first and only line of each test case contains 
three space-separated integers a, b and n.


Output
For each test case, print a single line containing one integer: 1 if an > bn
2 if an < bn or 0 if an = bn.

Constraints
● 1 ≤ T ≤ 1,000
● |a|,|b| ≤ 109
● 1 ≤ n ≤ 109

Sample Input 1
2
3 4 5
-3 2 4

Sample Output 1
2
1
 */

function compare(num1, num2, power) {
  let a = Math.pow(num1, power);
  let b = Math.pow(num2, power);

  console.log(`The Value of ${num1}^${power} is : ${a}`);
  console.log(`The Value of ${num2}^${power} is : ${b}`);

  if (a > b) {
    return "1";
  } else if (a < b) {
    return "2";
  } else {
    return "0";
  }
}

// var result = compare(3, 4, 5);
var result2 = compare(-3, 2, 4);
console.log("Comparision Result :", result2);
