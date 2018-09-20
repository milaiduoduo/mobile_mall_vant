let sortNumbers = function () {
  return Array.prototype.slice.call(arguments).sort(function (a, b) {
    return a - b;
  })
};


let sortNumbers1 = () =>
  Array.prototype.slice.call(arguments).sort((a, b) => a - b);

let add = (a, b) => {
  return a + b
}

let sortNum = (...nums) => {
  return nums.sort((a, b) => a - b);
};

// console.log(sortNumbers1(4, 3, 2, 1, 11, 9, 7));
console.log(sortNum(4, 3, 2, 1, 11, 9, 7));
// console.log(add(4, 3));
