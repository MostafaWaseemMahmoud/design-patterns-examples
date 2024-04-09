class Vehicle {
  constructor() {}

  start() {
    console.log("Vehicle is starting");
  }

  stop() {
    console.log("Vehicle is stopping");
  }

  accelerate() {
    console.log("Vehicle is accelerating");
  }

  brake() {
    console.log("Vehicle is braking");
  }
}

class Car extends Vehicle {
  constructor() {
    super();
  }

  start() {
    console.log("Car is starting");
  }

  stop() {
    console.log("Car is stopping");
  }

  accelerate() {
    console.log("Car is accelerating");
  }

  brake() {
    console.log("Car is braking");
  }
}

class Vehicleadpter {
  accelerate() {
    console.log("Bicycle is accelerating");
  }

  brake() {
    console.log("Bicycle is braking");
  }
}

class Bicycle extends Vehicleadpter {
  constructor() {
    super();
  }

  start() {
    console.log("Bicycle is starting");
  }

  stop() {
    console.log("Bicycle is stopping");
  }
}

class Bike extends Bicycle {
  constructor() {
    super();
  }

  start() {
    console.log("Bike is starting");
  }

  stop() {
    console.log("Bike is stopping");
  }

  accelerate() {
    console.log("Bike is accelerating");
  }
}

const bikeInstance = new Bike();
const carInstance = new Car();

bikeInstance.start();
bikeInstance.accelerate();
carInstance.accelerate();
