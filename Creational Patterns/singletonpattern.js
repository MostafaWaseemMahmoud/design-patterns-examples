// example 1

class Name {
  constructor(name) {
    this.name = name;
  }
}

let instance1 = new Name("AliMahmoud");
console.log("before Editing:", instance1.name);

function ChangeName() {
  instance1.name = "MostafaWaseem";
  console.log("after Editing:", instance1.name);
}

ChangeName();

// example 2

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
    console.log("Count incremented to:", this.count);
  }

  decrement() {
    this.count--;
    console.log("Count decremented to:", this.count);
  }
}

let counterInstance = new Counter();

function manipulateCounter() {
  counterInstance.increment();
  counterInstance.decrement();
}

// First Commit
manipulateCounter();
// First Commit
