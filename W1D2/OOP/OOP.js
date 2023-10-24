const book1 = {
    title: "JS is the best!",
    pages: 9001,
    author: "Brendan Eich",
    isCool: true
};

const book2 = {
    title: "JS for the Backend",
    pages: 100,
    author: "Sam",
    isCool: true
};

// CLASS?
// blueprint of objects
// information on what an object should be

class Book {
    // defaults
    constructor(pages, bob = "default book", author, isCool) {
        // attributes - what an object HAS
        this.title = bob;
        this.pages = pages;
        this.author = author;
        this.isCool = isCool;
    }
}

// instantiate 
const coolBook = new Book(200, "overwrite this default", "Sun Tzu", true,);
// console.log(coolBook)

// --------------------------
class Human {
    constructor(name, power) {
        this.health = 100;
        this.power = power;
        this.name = name;
    }

    // methods - ACTIONS the class can DO
    eat() {
        console.log(`${this.name} is eating and their health is now +10`);
        this.health += 10;
        return this;
    }
}

const bob = new Human("Bob", 50);
console.log(bob);
// bob.eat().eat().eat();
// console.log(bob.health);


// --- Inheritance ----
class SuperHero extends Human {
    constructor(name, speed, health, power = 1000,) {
        super(name, power);
        this.speed = speed;
        this.health = health;
    }

    fly() {
        console.log(this.name + " flies away");
        this.health -= 10;
        return this;
    }

    fight(anotherClass) {
        console.log(`${this.name} is attacking ${anotherClass.name}`)
    }
}

const crayon = new SuperHero("Crayon", 500, 200, 9001);
crayon.eat();
crayon.fly();
crayon.fly();
console.log(crayon);

const timmy = new SuperHero("Timmy", 1000, 200, 600);
timmy.fight(crayon);
crayon.fight(bob)