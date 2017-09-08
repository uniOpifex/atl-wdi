// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {                                                       //-2.a called from AppController.onClickCounter
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20} 
  // ^ this is an array of object Literals
  createCounter: function(){                                                      //-2.a called from AppController.onClickCounter
    this.lastCountId++;                                                           //-2.b Increases lastCountId by 1
    this.counters.push({                                                          //-2.c pushes (countID: incremented lasycount)
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;                                                      //-2.d returns lastCountId to object scope.       
  },                                                                              //-2.e back to AppController.onClickCounter
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  // ## Unit Spec : `Presenter`
  

insertCounterComponent: function(newCountId){                                                 //   -3.0 Presenter.insertCounterComponent is callled from  -2.e back to AppController.onClickNewCounter
  console.log(`insert counter component #${newCountId}`);                                             // Passed with CounterCollection.lastCountId    
// ### `insertCounterComponent(countId)`                                                              //                                                             
                                                                                                      //      
// ```markdown                                                                                        //
// 1.  It creates a new UI component (representing the counter with the specified                     //      
//     countId).                                                                                      //
// 2.  It gives the new UI component                                                                  //                                                         
//   a.  a count value.                                                                               //
//   b.  an 'increment' button.                                                                       //
//   c.  a data attribute (`data-count-id`) set equal to `countId`.                                   //     
// 3.  It adds event handlers to the appropriate places within the UI component.                      //      
// 4.  It adds the UI component to the DOM as a child element of `counter-list`.                      //                                                                              
// 5.  It does not return anything.                                                                   //                                                       
  // Your Code Here                                                                                   //                                       
  console.log(`insert counter component #${newCountId}`);                                             //     
  let newUI_Element = document.createElement('div');                                                  //  -3.a.1 creates newUI_Element variable and sets it to div element 
  newUI_Element.innerHTML = `<h3>Count: <span>0</span></h3>  <button class='increment'> 1 </button> <button class='delete'> Delete </button>`; 
                                                                                                      //  -3.a.2 gives newUI_Element content   
  newUI_Element.className += 'counter';                                                               //  -3.a.3 gives newUI_Element a class of counter                                                  
  newUI_Element.dataset.countId = newCountId; // 1st iter 0, 2nd 1 etc                                //  -3.a.4 gives newUI_Element attr of "data-count-id = curretn "newCountId"
                                                                                                      //  -3.a.4 newCount was the value passed by CounterCollection.lastCountId (2.d)
  //newUI_Element.getElementsByClassName('increment')[0].onclick= AppController.onClickIncrement;       //  -3.a.5  gives newUI_Element click attr that runs  AppController.onClickIncrement; onclick
  //newUI_Element.getElementsByClassName('delete')[0].onclick = AppController.onClickDelete;            //   3.a.6  gives newUI_Element click attr that runs  AppController.onClickDelete; onclick    
                                                                                                      //   3.a.5&? see ??.1 for info on the above methods
  document.getElementById('counter-list').appendChild(newUI_Element);                                 //  -3.a.0 appends (newUI_Element) to elementwith ID of "counter-list"
  },       
                                                                                                      //  -3.a.7 retrurn to AppController.onClickNewCounter                                                                                                                                               
  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`);
    // ### `refreshCounterComponent(countId)`
    
    // ```markdown
    // 1.  If the counter specified by `countId` can be found,
    //   a.  it retrieves the current count value of that counter.
    //   b.  it sets the value shown in that counter's UI component to match the
    //       counter's current count value.
    // 2.  It does not return anything.
    // ```
    // Your Code Here
    console.log(`refresh counter component #${countId}`);
    let val = CounterCollection.getCounterValue(countId);
    document.querySelector(`[data-count-id="${countId}"] span`).innerHTML = val;
  },
  removeCounterComponent: function(countId){             // REACH
    console.log(`remove counter component #${countId}`);
    // ### `removeCounterComponent(countId)`
    
    // ```markdown
    // 1.  If the counter specified by `countId` can be found,
    //   a.  it removes that UI component from the DOM, without affecting other UI
    //       components.
    // 2.  It does not return anything.
    // ```
    // Your Code Here
  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){                                               // 2.0 starts onClickNewCounter method              
    // ### `onClickNewCounter(event)`                                           

    // ```markdown                                            
    // 1.  It locates                                           
    // 2.  It creates a new UI component to correspond with that new counter.                                           
    // 3.  It does not return anything.                                           
    // ```                                            
    // Your Code Here                                           
    console.log('running AppController.onClickNewCounter')                                            
   CounterCollection.createCounter();                                           //2.a calls CounterCounterCollection.createCounter from AppController.onClickCounter
    Presenter.insertCounterComponent(CounterCollection.lastCountId);             //3.0 starts Presenter.insertCounterComponent(a) a is the value from 2.d                          
    console.log(`click new counter (#${CounterCollection.lastCountId})`);                                           
    
  },
  onClickIncrement: function(event){
    // ### `onClickIncrement(event)`
    
    // ```markdown
    // 1.  It determines which counter the UI component corresponds to.
    // 2.  It increments the value of the corresponding counter.
    // 3.  It updates the visible count value inside the UI component.
    // ```
    // // Your Code Here
      let countId = Number(event.target.parentNode.dataset.countId);
      console.log(`click increment #${countId}`);
      CounterCollection.incrementCounter(countId);
      Presenter.refreshCounterComponent(countId);
  },
  onClickDelete: function(event){                           // REACH

      // ### `onClickDelete(event)`

      // ```markdown
      // 1.  It determines which counter the UI component corresponds to.
      // 2.  It destroys the corresponding counter.
      // 3.  It removes the UI component from the DOM.
      // ```
   
    // Your Code Here
        let countId = Number(event.target.parentNode.dataset.countId);
        console.log(`click delete #${countId}`);
        CounterCollection.incrementCounter(countId);
        Presenter.removeCounterComponent(countId);
  }
};

window.onload = function(){  //START FUNCTION -1.0
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter; // 1.a runs the onClickNewCounter method from AppController object
  
};
/*
 STEPS OF THE PROGRAM
  -1.0 window.onload is ran
    -1.a runs the onClickNewCounter method from AppController object if button "clicked"
  
  -2.0 starts onClickNewCounter method 
    -2.a calls CounterCounterCollection.createCounter 
    -2.b called from AppController.onClickCounter
    -2.b called from AppController.onClickCounter
    -2.c Increases lastCountId by 1
    -2.c pushes (countID: incremented lasycount)
    -2.d returns lastCountId to object scope.     
    -2.e back to AppController.onClickNewCounter  

  -3.0 Presenter.insertCounterComponent is callled from  -2.e back to AppController.onClickNewCounter
       Passed with CounterCollection.lastCountId    
    -3.a.0 appends (newUI_Element) to elementwith ID of "counter-list"
    -3.a.1 creates newUI_Element variable and sets it to div element 

    -3.a.2 gives newUI_Element content   
    -3.a.3 gives newUI_Element a class of counter                                            
    -3.a.4 gives newUI_Element attr of "data-count-id = curretn "newCountId"
    -3.a.4 newCount was the value passed by CounterCollection.lastCountId (2.d)
    -3.a.5  gives newUI_Element click attr that runs  AppController.onClickIncrement; onclick
    -3.a.6  gives newUI_Element click attr that runs  AppController.onClickDelete; onclick   
    -3.a.5&? see ??.1 for info on the above methods
    -3.a.7 retrurn to AppController.onClickNewCounter


 */



