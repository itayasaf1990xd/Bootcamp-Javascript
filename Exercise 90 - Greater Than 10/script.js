function greaterThan10(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve("The number is more than 10");
    }
    reject("The number is less than 10");
  });
}

printNumber = (number) => {
  console.log(number);
};

greaterThan10(13).then(printNumber).catch(printNumber);

greaterThan10(9).then(printNumber).catch(printNumber);
