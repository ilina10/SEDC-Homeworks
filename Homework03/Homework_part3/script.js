let input = parseInt(prompt("How much money you want to withdraw?"));
let totalMoney = 20000;
if (input <= totalMoney) {
  console.log(
    "Cash withdraw: " + input + " denars",
    "\nYou have " + moneyLeft(input) + " denars left"
  );
} else {
  console.log("Not enough money");
}
function moneyLeft(money) {
  return totalMoney - money;
}
