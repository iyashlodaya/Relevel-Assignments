/* 
print a single line containing one integer

Problem Statement:
 
Abhi gave integers a, b and n to Raj. Raj wants to compare a^n and b^n. Help Raj with this task.
 
Input
The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.
The first and only line of each test case contains three space-separated integers a, b and n.
 
Output
For each test case, print a single line containing one integer: 1 if a^n > b^n 
2 if a^n < b^n or 0 if a^n = b^n.
 
Constraints
1 ≤ T ≤ 1,000
|a|,|b| ≤ 10^9
1 ≤ n ≤ 10^9
 
 
Sample Input 1 
    
    2
    3 4 5
   -3 2 4
   Sample Output 1 
    2
    1
 */

const inputStatement = '-3 2 4';
const a = parseInt(inputStatement[0]);
const b = parseInt(inputStatement[2]);
const n = parseInt(inputStatement[4]);


if (a^n > b^n) {
    console.log("1");
}
else if (a^n < b^n) {
    console.log("2")
}
else if (a^n === b^n) {
    console.log("0")
}

