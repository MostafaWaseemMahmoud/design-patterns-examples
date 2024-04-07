class mostafa {
  constructor(name) {
    this.name = name;
  }
}

let instanse1 = new mostafa("AliMahmoud");
console.log("before Editing", instanse1.name);

function ChangeName() {
  instanse1.name = "MostafaWaseem";
  console.log("after Editing", instanse1.name);
}

ChangeName();
