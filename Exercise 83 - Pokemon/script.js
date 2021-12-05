function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const squirtle = new Pokemon("Squirtle", "Water", [
  "Frustration Shadow",
  "Water Pulse",
  "Aqua Tail",
]);
const charmander = new Pokemon("Charmander", "Fire", [
  "Fire Fang",
  "Fire Spin",
  "Dragon Breath",
]);
const bulbasaur = new Pokemon("Bulbasaur", "Earth", [
  "Earthquake",
  "Seed Bomb",
  "Power Whip",
]);

Pokemon.prototype.callPokemon = function () {
  console.log(`${this.name}! I choose you`);
};

Pokemon.prototype.attack = function (attackNum) {
  if (this.attackList[attackNum]) {
    console.log(`${this.name} used ${this.attackList[attackNum]}`);
  } else {
    console.log(`Sorry, that is not a possible attack number`);
  }
};

squirtle.callPokemon();
squirtle.attack(0);

charmander.callPokemon();
charmander.attack(1);

bulbasaur.callPokemon();
bulbasaur.attack(2);
bulbasaur.attack(3);
