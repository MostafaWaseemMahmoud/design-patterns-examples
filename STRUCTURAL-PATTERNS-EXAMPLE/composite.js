// Component interface
class MenuItem {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    throw new Error("Unsupported operation");
  }
}

// Leaf class
class SingleMenuItem extends MenuItem {
  constructor(name, price) {
    super(name);
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

// Composite class
class CompositeMenuItem extends MenuItem {
  constructor(name) {
    super(name);
    this.children = [];
  }

  getPrice() {
    let totalPrice = 0;
    for (const child of this.children) {
      totalPrice += child.getPrice();
    }
    return totalPrice;
  }

  add(menuItem) {
    this.children.push(menuItem);
  }

  remove(menuItem) {
    const index = this.children.indexOf(menuItem);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }
}

// Usage
const burger = new SingleMenuItem("Burger", 10);
const fries = new SingleMenuItem("Fries", 5);

const combo = new CompositeMenuItem("Combo");
combo.add(burger);
combo.add(fries);

console.log(combo.getPrice()); // Output: 15
