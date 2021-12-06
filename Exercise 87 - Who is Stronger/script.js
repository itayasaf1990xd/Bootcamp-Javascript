const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      console.log((this.power - 10),"shaked")
      return this.power - 10;
    } else return this.power;
  },
};

function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else {
    return "You are stronger";
  }
}

console.log(whoIsStronger(hero.getStrength));
