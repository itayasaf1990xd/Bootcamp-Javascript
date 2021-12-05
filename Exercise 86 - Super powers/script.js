const storm = {
  superPower: "flying",
  printSuperPower,
  print: function () {
    console.log(this.superPower);
  }
};

function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

console.log(storm.printSuperPower());
storm.print();
