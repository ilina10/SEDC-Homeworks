let numbers = "";
for (let number = 1; number <= 20; number++) {
  if (number % 2 == 0) {
    numbers += number + "\n";
  } else if (number % 2 !== 0) {
    numbers += number + " ";
  }
}
console.log(numbers);
