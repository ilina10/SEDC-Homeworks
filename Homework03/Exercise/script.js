// First solution without bonus.
let year = (parseInt = prompt("Please, enter a year you were born:"));
if (year <= 2022) {
  function calculateAge(currentYear, birthYear) {
    let result = currentYear - birthYear;
    return result;
  }
  console.log("You are", calculateAge(2022, year) + " years old.");
} else {
  console.log("Please,enter a valid year");
}

//Second solution with bonus.
let thisYear = new Date().getFullYear();
let yearOfBirth = (parseInt = prompt("Please, enter a year you were born:"));
if (yearOfBirth <= thisYear) {
  function calculateAge(currentYear, birthYear) {
    let result = currentYear - birthYear;
    return result;
  }
  console.log("You are", calculateAge(thisYear, yearOfBirth) + " years old.");
} else {
  console.log("Please,enter a valid year");
}
