var converter = 235.2;
//1 MPG= 235.2 l/100km.
//1 l/100km = 235.2 MPG.
var mpgValue = 50;
var firstConvert = converter / mpgValue;
console.log(
  "50 MPG converted to l/100km is equal to " + firstConvert + " l/100km"
);

var mpgValue2 = 25;
var secondConvert = converter / mpgValue2;
console.log(
  "25 MPG converted to l/100km is equal to " + secondConvert + " l/100km"
);

var liter = 12;
var thirdConvert = converter / liter;
console.log("12l/100km converted to MPG is equal to " + thirdConvert + " MPG ");
