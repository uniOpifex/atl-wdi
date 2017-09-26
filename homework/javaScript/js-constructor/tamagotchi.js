console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name,creatureType) {
        this.name = name;
        this.creatureType = creatureType
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry(){
        this.foodInTummy--;
        console.log("cry: WAAAH!!!!!!");
        console.log(`${this.name} has ${this.foodInTummy}its in his tummy`);
    }
    puke(){
        this.foodInTummy--;
        console.log(`${this.foodInTummy} + WAHHHH!!!!`);
        console.log(`${this.name} has this much food in their tummy ${this.foodInTummy}`);
    }
    yawn() {
        this.restedness--;
        console.log(`${this.name} + has current restedness of  ${this.restedness}`)
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

    stop() {
        clearInterval(this.hungerTimer);
        clearInterval(this.sickTimer);
        clearInterval(this.yawnTimer);
    }

}

//create new Tamagotchis
const rockMonster = new Tamagotchi("Rocky","rock monster");