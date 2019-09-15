 
// Setup constructor to take name and age (default to 0)
// getDescription - Jake Moh is 25 year(s) old.

class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `Hi, I am ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

// Traveler -> Person
// Add support for homeLocation (used for argument)
// Override getGretting
// 1. Hi, I am Jake Moh. I'm visiting from Toronto
// 2. Hi, I am Jake Moh

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation;
    }

    getGretting() {
        let description = super.getDescription();

        if (this.homeLocation) {
        description += ` I'm visiting from ${this.homeLocation}`;
        }

        return description
    }
}


const me = new Traveler("Jake Moh", 25, "Toronto");
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());
