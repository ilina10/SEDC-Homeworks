function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  alert(`The sum of ${array} is :` + sum);
  console.log(`The sum of ${array} is :` + sum); //the sum is run also in console
  return sum;
}
sumArray([1, 5, 19, 44, 55]);
