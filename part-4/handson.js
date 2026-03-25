function filterNumbers(arr) {
  return arr.filter(function (item) {
    return typeof item === "number";
  });
}
console.log(filterNumbers([1, "dfg", 3, "er"]));

// Write a function filterNumbers(arr) that returns only numbers from a mixed array
