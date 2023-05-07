type Alpha = string | number;

function addd(param1: Alpha, param2: Alpha): Alpha {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}
addd("1", "2");
addd(2, 4);

// in guard

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `i am an admin and my role is ${user.role}`;
  } else {
    return `i am normal user`;
  }
}

const normalUser1: NormalUserType = { name: "Mr. Tom" };
const adminUser1: AdminUserType = { name: "Mr. Tom", role: "admin" };
console.log(getUser(adminUser1));

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log("i am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("i am barking");
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMiaw() {
    console.log("i am miawing");
  }
}

function getAnimal(animal: Animal) {
  if (animal instanceof Dog) {
    animal.makeBark();
  } else if (animal instanceof Cat) {
    animal.makeMiaw();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("Garman vai", "dog");
const animal2 = new Cat("Persian vai", "cat");

getAnimal(animal2);
