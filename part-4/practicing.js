// // for loop //
// for (let i = 0; i < 5; i++) {
//   console.log("hellloo" + i);
// }
// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// for (let h = 1; h <= 10; h++);
// console.log("helloo");

// for (let j = 1; j <= 100; j++) {
//   console.log("Hello");
// }

// // hello100.js

// for (let j = 1; j <= 100; j++) {
//   console.log("Hello");
// }
for (let i = 1; i <= 10; i++) {
  console.log("Hello");
}

let teaCollection = [];
let tea;

do {
  tea = prompt(`Enter your favourite tea(type "stop" to finish)`);

  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");
