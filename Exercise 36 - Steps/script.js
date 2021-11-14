const steps = (numberOfSteps) => {
  const hashtag = "#";
  const space = " ";
  for (let i = 1; i <= numberOfSteps; i += 1) {
    console.log(`'${hashtag.repeat(i)}${space.repeat(numberOfSteps - i)}'`);
  }
};

steps(1);
steps(3);
steps(5);

function stepsNinja(numberOfSteps) {
  const hashtag = "#";
  const space = " ";
  for (let i = 1; i <= numberOfSteps; i += 1) {
    const currentStep = [];
    for (let j = 1; j <= numberOfSteps; j += 1) {
      j <= i ? currentStep.push(hashtag) : currentStep.push(space);
    }
    console.log(`'${currentStep.join("")}'`);
  }
}
stepsNinja(1);
stepsNinja(5);
stepsNinja(10);
