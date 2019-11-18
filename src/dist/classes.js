class Animal {
    constructor(input) {
        this.name = input.name;
        this.age = input.age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
class Dog extends Animal {
    constructor(input) {
        super(input);
        this.species = input.species;
    }
    bark() {
        return "woof woff";
    }
}
const perryTheParrot = new Animal({
    name: "Perry",
    age: 2
});
const banditTheDog = new Dog({
    name: "Bandit",
    age: 4,
    species: "Husky"
});
perryTheParrot.getName(); // Perry
perryTheParrot.getAge(); // 2
banditTheDog.getName(); // Bandit
banditTheDog.getAge(); // 4
banditTheDog.bark(); // woof woff
//# sourceMappingURL=classes.js.map