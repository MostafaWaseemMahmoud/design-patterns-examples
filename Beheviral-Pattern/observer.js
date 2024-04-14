class observable {
  constructor() {
    this.subscribers = [];
    this.state;
  }

  addsub(observer) {
    this.subscribers.push(observer);
  }
  unsub(subscriber) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== observer
    );
  }
  notify(message) {
    this.subscribers.forEach((subscriber) => subscriber.update(message));
  }
}

class observer {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name} received news: ${message}`);
  }
}

let publisher = new observable();
let observer1 = new observer("Mostafa");
let observer2 = new observer("Ali");

publisher.addsub(observer1);
publisher.addsub(observer2);

publisher.notify("AnyThing NotyFied");
console.log(publisher.subscribers);
