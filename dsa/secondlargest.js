function findSecondLargest(firstNumber, secondNumber, thirdNumber) {
  if (
    firstNumber > secondNumber &&
    firstNumber > thirdNumber &&
    secondNumber > thirdNumber
  ) {
    return secondNumber;
  } else if (
    firstNumber > secondNumber &&
    firstNumber > thirdNumber &&
    secondNumber < thirdNumber
  ) {
    return thirdNumber;
  } else if (
    secondNumber > firstNumber &&
    secondNumber > thirdNumber &&
    firstNumber > thirdNumber
  ) {
    return firstNumber;
  } else if (
    secondNumber > firstNumber &&
    secondNumber > thirdNumber &&
    firstNumber < thirdNumber
  ) {
    return thirdNumber;
  } else if (
    thirdNumber > firstNumber &&
    thirdNumber > secondNumber &&
    firstNumber > secondNumber
  ) {
    return firstNumber;
  } else if (
    thirdNumber > firstNumber &&
    thirdNumber > secondNumber &&
    firstNumber < secondNumber
  ) {
    return secondNumber;
  }
}

const num = findSecondLargest(120, 11, 400);
const num2 = findSecondLargest(10213, 312, 10);
const num3 = findSecondLargest(10, 3, 450);
console.log(num);
console.log(num2);
console.log(num3);
