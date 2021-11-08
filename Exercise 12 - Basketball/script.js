const calculateScoreAvarage = (scores) => {
  return Array.from(scores).reduce((preValue, currValue) => preValue + currValue, 0) / scores.length;
};

const whoIsWinning = (...args) => {
  if (calculateScoreAvarage(args[0]) > calculateScoreAvarage(args[1])  && calculateScoreAvarage(args[0]) > calculateScoreAvarage(args[2])) {
    console.log(`The winner is John with avarage score of ${calculateScoreAvarage(args[0])}`);
  } else if (calculateScoreAvarage(args[1]) > calculateScoreAvarage(args[0])  && calculateScoreAvarage(args[1]) > calculateScoreAvarage(args[2])) {
    console.log(`The winner is Mike with avarage score of ${calculateScoreAvarage(args[1])}`);
  } else if (calculateScoreAvarage(args[2]) > calculateScoreAvarage(args[0])  && calculateScoreAvarage(args[2]) > calculateScoreAvarage(args[1])){
    console.log(`The winner is Mary with avarage score of ${calculateScoreAvarage(args[2])}`);
  } else {
    console.log(`No winner it is a draw`);
  }
};

const john = [89, 120, 103];
const mike = [116, 94, 123];
const mary = [97, 134, 105];
whoIsWinning(john, mike, mary);
