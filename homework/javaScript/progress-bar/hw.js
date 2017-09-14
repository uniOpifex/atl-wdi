// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  /*   Your first priority will be to show the current value left on the clock.
  Every time the countdown value updates, the numeric display will need to
  update as well. The function you'll be writing to implement this is
  `drawNumericDisplay(timerValue)`. */
  drawNumericDisplay: function(timerValue){ 
    document.getElementById('numeric-display').innerHTML = timerValue;
    //sets then text of .nummeric-display equal to the timerValue
    
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
    var timeCounter = 100 - timerValue;
    document.getElementsByClassName('progress-bar')[0].style.width = timeCounter + '%';
    // sets progressbar width to timeCounter'%'
  },
  drawLitFuses: function(timerValue){
    // Your Code Here
    var perLeft = (timerValue /100);
    document.getElementsByClassName('unburnt')[0].style.width =  perLeft*98 + '%';
    document.getElementsByClassName('burnt')[0].style.width = (1 - perLeft)*98 + '%';
    //sets width of unburnt to 98(timerValue/100)+'%' 
    //sets width of burnt the difference timeValue and 100%
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
    var timeLeft = 100 - timerValue;
    if (!(timerValue%2 === 0)) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
    }
    else {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    }

    document.getElementsByClassName('crawler')[0].style.marginLeft = (timeLeft*10) + 'px';
  }
  
};
