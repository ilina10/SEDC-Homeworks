var year = prompt("Please let the year you were born");
var convertedYear = parseInt(year);
var formula = (year - 4) % 12;
if (formula === 0) {
  console.log("Your chinese zodiac sign is rat");
} else if (formula == 1) {
  console.log("Your chinese zodiac sign is ox");
} else if (formula == 2) {
  console.log("Your chinese zodiac sign is tiger");
} else if (formula == 3) {
  console.log("Your chinese zodiac sign is rabbit");
} else if (formula == 4) {
  console.log("Your chinese zodiac sign is dragon");
} else if (formula == 5) {
  console.log("Your chinese zodiac sign is snake");
} else if (formula == 6) {
  console.log("Your chinese zodiac sign is horse");
} else if (formula == 7) {
  console.log("Your chinese zodiac sign is goat");
} else if (formula == 8) {
  console.log("Your chinese zodiac sign is monkey");
} else if (formula == 9) {
  console.log("Your chinese zodiac sign is rooster");
} else if (formula == 10) {
  console.log("Your chinese zodiac sign is dog");
} else if (formula == 11) {
  console.log("Your chinese zodiac sign is pig");
} else {
  console.log("You did not enter a year, please try again");
  alert("You did not enter a year, please try again");
}
