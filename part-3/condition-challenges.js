// // Checking if a number is greater than another number:
// let num1 = 10;
// let num2 = 5;

// /*
// console.log("I'm regular upper code");

// if (num1 < num2) {
//   console.log("num1 is greater than num2");
// } else {
//   console.log("num1 is not-greater than num2");
// }

// console.log("I'm regular bottom code");

// Checking if a string is equal to another string :
// */

// /*

//  let male = "Manish";
// let female = "Pukule";

// if (male == female) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// */

// let score = 44;

// if (typeof score === "number") {
//   //   console.log("It is a number");
// } else {
//   console.log("This is not a number");
// }

// // Checking is a boolean is true or false:
// let isAvailable = true;
// if (isAvailable) {
//   //   console.log("it is available");
// } else {
//   console.log("it is not available");
// }

// //Chrcking if a array is empty or not:

// let items = ["aeee"];

// console.log(items.length);

// if (items.length === 0) {
//   console.log("Array is empty");
// } else {
//   console.log("Array is not empty");
// }

num1 = 10;
num2 = 3;
if (num2 > num1) {
  console.log("condition is true");
} else {
  // console.log("condition is false");
}

let username = "Manish";
let name = "Tamang";

if (username !== name) {
  // console.log("Pick another name");
} else {
  // console.log("Name is available");
}
//This one is for arrray
let A = ["5"];
if (typeof A === "object") {
  // console.log("It is a array");
} else {
  console.log("It is not a array");
}
//this one is for object
let B = 5;
if (typeof B === "number") {
  // console.log("It is a number");
} else {
  // console.log("It is not a number");
}

//to check the le of string
let item = [];
// console.log(item.length);

if (item.length === 0) {
  // console.log("Array is empty");
} else {
  // console.log("Array is not empty");
}

//Facing challenges in array and methods
let teaFlavors = ["green tea", "black tea", "oolong tea"];
const firstTea = teaFlavors[2];
// console.log(firstTea);

let cities = ["london", "tokyo", "paris"];
const favoriteCity = cities[2];
// console.log(favoriteCity);

let teaTypes = ["herbal tea", "fruite tea", "masala tea"];

teaTypes[1] = "Jasmine tea";
// console.log(teaTypes);

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("New York");
// console.log(citiesVisited);

let teaOrders = ["chai", "matcha", "red chai"];
const lastorder = teaOrders.pop(2);

// console.log(lastorder);

let popularTeas = ["green tea", "black tea", "oolong tea"];
let softCopyteas = popularTeas;
popularTeas.pop();
// console.log(softCopyteas);

let topCities = ["Berlin", "Singapore", "Barcelona"];
let hardCopyCities = [...topCities];
topCities.pop();
// console.log(hardCopyCities);

let names = ["manish", "yonzan", "tamang"];
let id = names;
names.pop();
// console.log(id);

let uid = ["manish", "yonzan", "tamang"];
let iid = [...uid];
uid.pop();
// console.log(iid);

let bike = ["BMW"];
let CC = ["450"];
let concept = bike.concat(CC);
bike.concat(CC);
// console.log(concept);

let teaMenu = ["masala chai", "green tea", "black tea"];

const menuLength = teaMenu.length;
// console.log(menuLength);

let cityBusiness = ["New York", "London", "Tokyo"];
let isLondoninlist = cityBusiness.includes("London");
console.log(isLondoninlist);
