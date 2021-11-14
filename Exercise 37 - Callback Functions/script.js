const printString = (parameter) => {
  return console.log(parameter);
};

const isString = (parameter, callBack) => {
  (parameter) => typeof parameter;
  return typeof parameter === "string"
    ? callBack(parameter)
    : console.log("Not a String");
};

isString("Biyakuga", printString);
isString(12345, printString);

const firstWordUpperCase = (string, callBack) => {
  const words = string.split(" ");
  words[0] = words[0].toUpperCase();
  return callBack(words);
};

const dashes = (string) => {
  return string.join("-");
};

console.log(firstWordUpperCase("my name is Biyakuga Higashiri", dashes));

const printMessage = (message) => {
  console.log("The message is:", message);
};

const getMessage = (message, callback) => {
  return message !== ""
    ? callback(message)
    : console.log("The message is empty");
};

getMessage("Hello World", printMessage);
getMessage("", printMessage);
