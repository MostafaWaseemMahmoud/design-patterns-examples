// Example 1

class sandwich {
  constructor() {
    this.name;
    this.calory;
  }

  setnameAndcalory(name, calory) {
    this.name = name;
    this.calory = calory;
  }

  setclaory(calory) {
    this.calory = calory;
  }

  setname(name) {
    this.name = name;
  }

  showThings() {
    console.log("name: " + this.name + " calory: ", this.calory);
  }
}

class cheeseBurger extends sandwich {
  constructor() {
    super();
    this.setname("cheeseBurger");
    this.setclaory(12);
    this.showThings();
  }
}

let cheeseBurger1 = new cheeseBurger();

class sarokh extends sandwich {
  constructor() {
    super();
    this.setname("sarokh");
    this.setclaory(150);
    this.showThings();
  }
}

let sarokh1 = new sarokh();
