const elements = ["Hello", "there", "students", "of", "SEDC"];
let bigString = " ";
function returningString(someArray) {
  for (let i = 0; i < someArray.length; i++) {
    bigString += someArray[i] + " ";
  }
  return bigString;
}

console.log(returningString(elements));
