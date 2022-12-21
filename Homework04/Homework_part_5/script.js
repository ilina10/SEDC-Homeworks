let arrayOfNumbers = [20, 44, 55, 3, 8, 12, 101, 45];
let minimumValue = arrayOfNumbers[0];
for (let i = 1; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] < minimumValue) {
    minimumValue = arrayOfNumbers[i];
  }
}
console.log(minimumValue);

let maximumValue = arrayOfNumbers[0];
for (let i = 1; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] > maximumValue) {
    maximumValue = arrayOfNumbers[i];
  }
}
console.log(maximumValue);

function sum(minNumber, maxNumber) {
  let result = minNumber + maxNumber;
  return result;
}

console.log(sum(minimumValue, maximumValue));
