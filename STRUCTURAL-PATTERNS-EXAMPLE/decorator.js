class coffee {
  cost() {
    return 10;
  }

  description() {
    return "Coffee";
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 5;
  }
  description() {
    return `${this.coffee.description()}, Milk`;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 2;
  }

  description() {
    return `${this.coffee.description()} , sugar`;
  }
}

let Coffee = new coffee();

console.log(`coffee`, Coffee.cost());

Coffee = new MilkDecorator(Coffee);

console.log(Coffee.description(), `cost: ${Coffee.cost()}`);
Coffee = new SugarDecorator(Coffee);

console.log(Coffee.description(), `cost: ${Coffee.cost()}`);
