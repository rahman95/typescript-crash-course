interface animalInput {
  name: string;
  age: number;
}

interface dogInput extends animalInput {
  species: string;
}

class Animal {
  private name: string;
  private age: number;

  constructor(input: animalInput) {
    this.name = input.name;
    this.age = input.age;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }
}

class Dog extends Animal {
  private species: string;

  constructor(input: dogInput) {
    super(input);

    this.species = input.species;
  }

  public bark(): string {
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
