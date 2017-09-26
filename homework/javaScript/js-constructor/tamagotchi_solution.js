console.log('tamagotchi file is loaded');

class Tamagotchi {
  constructor(name, creatureType){
    this.name = name;
    this.creatureType = creatureType;
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }

  cry() {
    this.foodInTummy--;
    console.log("WAAAH!");
    console.log(this.name + ' is currently so fed: ' + this.foodInTummy);
  };
  puke() {
    this.health--;
    console.log('Bleeghh! Sick!');
    console.log(this.name + ' has current health = ' + this.health);
  };
  yawn(){
    this.restedness--;
    console.log(this.name+' has current restedness of '+this.restedness);
    console.log('Yahhwn! So tired');
    console.log(this.name + ' has current restedness = ' + this.restedness);
  };
  start(){
    console.log("Starting " + this.name);
    var that = this;
    this.hungerTimer = setInterval(() => {
      that.cry();
  }, 10000);
  this.yawnTimer = setInterval(() => {
      that.yawn();
  }, 8000);
  this.sickTimer = setInterval(() => {
      that.puke();
  }, 30000);
  };
  stop(){
    console.log("Stopped " + this.name);
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
  };
} 

var bob = new Tamagotchi('bob', 'blah')
bob.start();




cry(){
  this.foodInTummy -= 1;
  console.log(`${this.name} WAAAHHHHHH!!!!!!`)
  console.log(this.foodInTummy)
}
puke(){
  this.foodInTummy -= 1;
  console.log("WAAAAA WAAAA");
  console.log(`${this.name} has this much food in their tummy ${this.foodInTummy}`);
}
yawn(){
  this.restedness -= 1;
  console.log(`${this.name} has current restedness of ${this.restedness}`)
}
start(){
  let that = this;
  this.hungerTimer = setInterval(() => {
      that.cry();
  }, 10000);
  this.yawnTimer = setInterval(() => {
      that.yawn();
  }, 8000);
  this.sickTimer = setInterval(() => {
      that.puke();
  }, 30000);
}
stop(){

  clearInterval(this.hungerTimer);
  clearInterval(this.sickTimer);
  clearInterval(this.yawnTimer);
}