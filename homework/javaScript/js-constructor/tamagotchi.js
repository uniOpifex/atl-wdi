console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name,creatureType) {
this.name = name;
this.creatureType = creatureType
this.foodInTummy = 10;
this.restedness = 10;
this.health = 10;
};
cry(){
    this.foodInTummy--;
    console.log("The Tamagotchi is crying!!! WAAAH!!!!!!");
    console.log(`${this.name} has ${this.foodInTummy}its in his tummy`);
  };
  puke() {
      this.foodInTummy--;
      console.log(`${this.foodInTummy} + WAHHHH!!!!`);
  };
  yawn() {
    this.restedness--;
    console.log(`${this.name} + has current restedness of  ${this.restedness}`)
}
start() {
  console.log(`start ${this.name}`)
  this.hungerTime = 6000;
  this.yawnTimer = 10000;
  this.sickTimer = 20000;

}

stop() {
  console.log(`stop ${this.name`)
}

}


//create new Tamagotchis

 var rockMonster("Timothy","Rock")


//test out your Tamagotchies below via console.logs



//////////-   


//your class declaration here


/* Write a constructor function for a Tamagotchi
Using `this.propertyName = value`, add `foodInTummy`, `restedness`, and `health` as properties and set each of the values to 10. */

class Tamagotchi {
    constructor(name,creatureType) {
this.name = name;
this.creatureType = creatureType
this.foodInTummy = 10;
this.restedness = 10;
this.health = 10;
}
/* Add in a method called `cry`. 
The `cry` function should reduce `foodInTummy` by 1, 
console.log the new value of `foodInTummy`, and console.log "WAHH!!!". */



/* Add a method called `yawn`. The `yawn` function should:
  - reduce the Tamagotchi's `restedness` by 1
  - console.log the values "[Tamagotchi's name] has current restedness of: [restedness]"
* Make new Tamagotchis and test the methods work and that they console.log the */

  yawn() {
      this.restedness--;
      console.log(`${this.name} + has current restedness of  ${this.restedness}`)
  }
  start() {
    console.log(`start ${this.name}`)
    this.hungerTime = 6000;
    this.yawnTimer = 10000;
    this.sickTimer = 20000;

}

stop() {
    console.log(`stop ${this.name`)
}


}


//create new Tamagotchis
var constructedObject1 = new Tamagotchi();
var constructedObject2 = new Tamagotchi();


//test out your Tamagotchies below via console.logs
console.log(constructedObject1);
console.log(constructedObject2);
