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
