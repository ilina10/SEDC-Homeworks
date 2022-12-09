var phonePrice = 119.95;
var units = 30;
var totalPhonePrice = phonePrice * units;
var tax = 5;
var totalTax = (tax / 100) * totalPhonePrice; //Total tax of 30 phones.
var totalPriceWithTax = totalPhonePrice + totalTax; // Price of 30 phones with 5% tax.
console.log(
  "The the price of 30 phones with 5% tax is " + totalPriceWithTax + "."
);
