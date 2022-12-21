let numbers = [3, 6, 9, 12, 20, 40];
let paragraphWithArray = document.getElementById("arrayPrinted");
document.getElementById("arrayPrinted").innerHTML = numbers;
paragraphWithArray.innerText = numbers;
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
sumArray(numbers);

let sumOfTheNumbers = document.getElementById("sum");
sumOfTheNumbers.innerText = sumArray(numbers);
