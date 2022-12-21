//First solution
class Frog {
  constructor(name, kind) {
    this.name = name;
    this.kind = kind;
  }
  animalSpeak(speak) {
    console.log(`Animal says: ${speak}`);
  }
}

let frogOne = new Frog("Bully", "American Bullfrog");
frogOne.animalSpeak("Hey Bro!!!");
console.log(frogOne);

// Second solution with prompt printed on HTML
class Animal {
  constructor(name, kind) {
    this.name = name;
    this.kind = kind;
  }
  animalSpeak(speak) {
    console.log(`Animal says: ${speak}`);
  }
}

let nameOfAnimal = prompt("Enter name of your animal");
let kindOfAnimal = prompt("Enter kind of the animal");

let nameOfTheAnimal = document.getElementById("name");
nameOfTheAnimal.innerText = nameOfAnimal;

let kindOfTheAnimal = document.getElementById("kind");
kindOfTheAnimal.innerText = kindOfAnimal;

let userAnimal = new Animal(nameOfAnimal, kindOfAnimal);
userAnimal.animalSpeak("Hey bro");
console.log(userAnimal);
