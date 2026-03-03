// // for loop //
// for (let i = 0; i < 5; i++) {
//   // console.log("loop" + i);
// }

// for (let i = 5; i > 0; i--) {
//   // console.log("loop " + i);
//   if (i === 3) {
//     break;
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`cyrus` + i);
// }

// for (let i = 0; i <= 20; i++) {
//   console.log(`cyrus` + i);
// }

// let teaCollection = [];
// let tea;

// do {
//   tea = prompt(`Enter your favourite tea(type "stop" to finish)`);

//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

// let total = 0;
// let k = 1;
// do {
//   total += k;
//   k++;
// } while (k <= 3);
// console.log("k");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let person = {
  name: "Ram",
  age: 20,
};

for (let key in person) {
  console.log(key, person[key]);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
