// // First solution with declared break and age.
// let legalAge = 18;
// function shouldServeDrinks(age, pause) {
//   if (age >= 18 && pause == "no") {
//     console.log("You can serve drinks");
//   } else if (age < 18 || pause == "yes") {
//     console.log("You cannot serve drinks");
//   } else {
//     console.log("Try again");
//   }
// }
// shouldServeDrinks(10, "no");

// Second solution with bartender input.
let legalAge = 18;
let breakOrNot = parseInt(
  prompt("If you are on break type 1, if you are not type 2")
);
let userAge = parseInt(prompt("Enter you client age"));
function shouldServeDrinks(age, pause) {
  if (age >= 18 && pause == 2) {
    console.log("You can serve drinks");
  } else if (age < 18 || pause == 1) {
    console.log("You cannot serve drinks");
  } else {
    console.log("Try again");
  }
}
shouldServeDrinks(userAge, breakOrNot);
