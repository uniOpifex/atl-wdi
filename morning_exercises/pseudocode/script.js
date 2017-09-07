//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  // smallbarrel = 60 DB
  // 2smbarrel + 5lrgbarrel = 825 DN
  var result = (total - (small * 60));
  result = (result / large)
  return result;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  var eCirc = 24901;
  var gasAmount = (eCirc/ milesPerGallon);
  return (fuelPrice * gasAmount)
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  // a = gallons Costco juice,
  // b = % pure fruit juice Costco,
  // c = # gallons Kirkland juice,
  // d = % pure fruit juice Kirkland)
  let totalCostcoPure = a * b;
  let totalKirkPure = c * d;
  let totalPureJuice = totalCostcoPure + totalKirkPure;
  let totalJuice = a + c;
  return ((totalPureJuice / totalJuice) / 100);
  ``` #### The Pseudocode:
  
  - Find the total amount of pure fruit juice (gal)
    - Total of Costco pure fruit juice:
      - percentage pure fruit juice * number of gallons
    - Total of Kirkland pure fruit juice:
      - percentage pure fruit juice * number of gallons
    - Add Costco pure fruit juice total + Kirkland pure fruit juice total
  - Find the total amount of juice (gal):
    - Total of Costco juice + Total of Kirkland Juice
  - Calculate (total pure fruit juice) / (total juice) ```
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
