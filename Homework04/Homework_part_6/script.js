const firstName = [
  "Ilina",
  "Anastasija",
  "Kiko",
  "Viktor",
  "Marko",
  "Angela",
  "Elena",
  "Kiril",
];
const lastName = [
  "Jakovcevska",
  "Bogdanovska",
  "Taseski",
  "Jankov",
  "Markovski",
  "Jovanovska",
  "Milosevska",
  "Andreevski",
];
const students = [];
function allStudents(name, surname) {
  for (let i = 0; i < name.length && i < surname.length; i++) {
    students.push(`${i + 1}.${name[i]} ${surname[i]}`);
  }
  return students;
}
console.log(allStudents(firstName, lastName));
