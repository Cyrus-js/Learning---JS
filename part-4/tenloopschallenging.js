// let givenarray = [1, 2, 3, 4, 5, 6];
// let untilfound = [];
// for (let g = 0; g < givenarray.length; g++) {
//   if (givenarray[g] === 5) {
//     break;
//   }
//   //   untilfound.push(givenarray[g]);
// }
// console.log(untilfound);

// let array = ["London", "Paris", "Berlin", "New York"];
// let visitedCities = [];
// for (let a = 0; a < array.length; a++) {
//   if (array[a] === "Berlin") {
//     continue;
//   }
//   visitedCities.push(array[a]);
// }
// console.log(visitedCities);

let given = [1, 2, 3, 4, 5];
let save = [];

for (const naya of given) {
  if (naya === 5) {
    break;
  }

  save.push(naya);
}
// console.log(save);

let tea = ["chai", "herbal tea", "green tea", "black tea"];
let prefferedTea = [];
for (const chiya of tea) {
  if (chiya === "black tea") {
    continue;
  }
  prefferedTea.push(chiya);
}
// console.log(prefferedTea);

let citiesPopulation = {
  London: 8900000,
  Newyork: 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};
let newcityPopulation = {};
for (const city in citiesPopulation) {
  if (city === "Paris") {
    break;
  }
  newcityPopulation[city] = citiesPopulation[city];
}
// console.log(newcityPopulation);

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};
for (const top in worldCities) {
  if (worldCities[top] < 3000000) {
    continue;
  }
  largeCities[top] = worldCities[top];
}
// console.log(largeCities);

let teaarray = ["earl grey", "green tea", "chai", "oolong tea"];
let avaialableTeas = [];
teaarray.forEach(function (chiya) {
  if (chiya === "chai") {
    return;
  }
  avaialableTeas.push(chiya);
});
// console.log(avaialableTeas);

let cityarray = ["berlin", "tokyo", "sydney", "paris"];
let traveledCities = [];
cityarray.forEach(function (city) {
  if (city === "sydney") {
    return;
  }
  traveledCities.push(city);
});
// console.log(traveledCities);

let num = [2, 5, 7, 9];
let doubledNumbers = [];
for (let neww = 0; neww < num.length; neww++) {
  if (num[neww] === 7) {
    continue;
  }
  doubledNumbers.push(num[neww] * 2);
}
// console.log(doubledNumbers);

let giventea = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of giventea) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
// console.log(shortTeas);s
