Array.prototype.filterImplementation = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback.length === 1) {
      if (callback(this[i])) {
        result.push(this[i]);
      }
    } else if (callback.length === 2) {
      if (callback(this[i], i)) {
        result.push(this[i]);
      }
    } else if (callback.length === 3) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    } else {
      return undefined;
    }
  }
  return result;
};

console.log(
  [1, 2, 3, 4, 5].filterImplementation((element) => {
    return element % 2 === 0;
  })
);
