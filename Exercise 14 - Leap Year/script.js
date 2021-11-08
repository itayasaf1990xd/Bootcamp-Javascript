const isLeapYear = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("It is indeed a leap year");
  } else {
    console.log("This is not a leap year");
  }
};

console.log("Leap Years:");
isLeapYear(1004);
isLeapYear(1992);
isLeapYear(2000);
isLeapYear(2400);
console.log("\nNot Leap Years:");
isLeapYear(1993);
isLeapYear(2005);
isLeapYear(2010);
isLeapYear(2100);
