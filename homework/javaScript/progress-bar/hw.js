// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  /*   Your first priority will be to show the current value left on the clock.
  Every time the countdown value updates, the numeric display will need to
  update as well. The function you'll be writing to implement this is
  `drawNumericDisplay(timerValue)`. */
  drawNumericDisplay: function(timerValue){
    document.getElementById('numeric-display').textContent = timerValue;
    var  numericDisplay
    if (timerValue <= 10) {
      numericDisplay.style.color = 'red';
      var newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2);
      numericDisplay.style.fontSize = newSize + 'em';
    }
  
  },
  

  /*
  #### 2. The Progress Bar

  The progress bar is a rectangle (with class `progress-bar`) inside the
  element with id `progress-bars`. As the timer counts down from 100
  to 0, the progress bar should expand its width from `0%` to `100%` of the
  width of its parent element, the `progress-bars` component.
  The function responsible for implementing this is
  `drawProgressBars(timerValue)`. 
  */
  drawProgressBars: function(timerValue){
    
  },
  drawLitFuses: function(timerValue){
    // Your Code Here
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
  }
};
