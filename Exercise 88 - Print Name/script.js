const person = {
  name: "shaked",
  printName() {
    console.log(`My name is ${this.name}`);
  },
  waitAsyncPrintName() {
    setTimeout(this.printName.bind(this), 1000);
  },
};

person.waitAsyncPrintName();
