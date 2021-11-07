function currentDate() {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentDate = new Date();
  return "Today is " + dayNames[currentDate.getDay()] + " the " + currentDate.getDate() + " of " + monthNames[currentDate.getMonth()] + ", " + currentDate.getFullYear();
}
console.log(currentDate());
