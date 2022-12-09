var money = prompt("Please enter the amount of cash you have ");
var convertedMoney = parseInt(money);
if (convertedMoney == 0) {
  console.log("Better luck next time, you need to work harder.");
} else if (convertedMoney <= 100) {
  console.log("With that amount of money you can buy jeans.");
} else if (convertedMoney <= 500) {
  console.log("With that amount of money you can buy laptop.");
} else if (convertedMoney <= 10000) {
  console.log("With that amount of money you can buy bike");
} else if (convertedMoney <= 15000) {
  console.log("With that amount of money you can buy nice car.");
} else if (convertedMoney <= 30000) {
  console.log("With that amount of money you can buy an apartment.");
} else if (convertedMoney <= 60000) {
  console.log("With that amount of money you can buy a house");
} else if (convertedMoney <= 100000) {
  console.log("With that amount of money you can buy yacht");
} else if (convertedMoney >= 500000) {
  console.log("With that amount of money you can buy hacienda");
} else {
  console.log("You did not enter the amount of cash you have,please try again");
}
