class AbstractFactory {
  createProduct() {
    sandwich.setnameAndcalory("Mostafa", 22);
  }
}

class ConcreteFactory1 extends AbstractFactory {
  createProduct() {
    return new ConcreteProduct1();
  }
}

class ConcreteFactory2 extends AbstractFactory {
  createProduct() {
    return new ConcreteProduct2();
  }
}

class AbstractProduct {
  method() {}
}

class ConcreteProduct1 extends AbstractProduct {
  method() {
    return "Concrete Product 1 method";
  }
}

class ConcreteProduct2 extends AbstractProduct {
  method() {
    return "Concrete Product 2 method";
  }
}

function client(factory) {
  const product = factory.createProduct();
  console.log(product.method());
}

// Usage
const factory1 = new ConcreteFactory1();
client(factory1);

const factory2 = new ConcreteFactory2();
client(factory2);
