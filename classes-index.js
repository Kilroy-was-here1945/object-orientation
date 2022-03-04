let person = {
    firstName: "Dallin",
    lastName: "Johnson",
    age: 22,
    favorites: {
        movies: {
            movie1: "thing i like",
            movie2: "another thing"

        }
    }
};

console.log(person.firstName)

let meal = {
    appetizer: "Chips and Salsa",
    entree: "smoked brisket"
}

// const {dessert} = meal;
// console.log(dessert);

// const {entree: bestfoodEver, drink: bestBeverageEver}
// const bestfoodEver = meal.entree
// const bestBeverageEver = meal.dring

// for(let attribute in person){
//     console.log(person[attribute]);
// };


person.job = "instructor"
person["hairColor"] = "Black";
person["eyeColor"] = "Brown";
console.log(person);

delete person["eyeColor"];

class Animals {
    constructor(name, species, size){
        this.name = name;
        this.species = species;
        this.size = size;
    };
    

     greeting() {
         console.log(`hi I am a ${this.name}. I am of species ${this.species}.My size is ${this.size}`)
         return (`hi I am a ${this.name}. I am of species ${this.species}.My size is ${this.size}`)
     };
 };


let zebra = new Animals("Zebra, Mammal","Medium");
zebra.greeting()
console.log(zebra.greeting())


class Reptile extends Animals {
    constructor(name, species, size) {
        super(name, species, size);

        this.cute = false;
    };


    changeCute(){
        if(this.cute === false){
            this.cute = true;
        } else this.cute = false;
    };
};

let snake = new Reptile('ball python', 'snake', 'small')
snake.changeCute();
console.log(snake);