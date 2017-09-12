// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  let returnVal = (payment - price);
  let coinArray = [0,0,0,0,0] //Q, D, N, P
    while (returnVal != 0) {
      if (returnVAl % 1) { //dolars
        coinArray[1]++;
        returnVAl -= 1;}
      else if (!(returnVal % 0.05) { //pennies
        coinArray[3]++;
        returnVal -= .01;
      }
      else if (!(returnVal % 0.10)){ // nickels
        coinArray[2]++;
        returnVal -=.05
      }
      else if (returnVal % 0.25){ //dimes
        coinArray
      }
      else if (returnVal % 0.25)  { //quaters
        coinArray[0]++;
        returnVal -= .25
      }

      return coinArray
    }
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
