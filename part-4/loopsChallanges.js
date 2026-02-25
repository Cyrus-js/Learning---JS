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

let teaCollection = [];
let tea;

do {
  tea = prompt(`Enter your favourite tea(type "stop" to finish)`);

  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");
