// let sum = 0;
// let i = 0;

// while (i <= 5) {
//   sum = sum + 1;
//   sum += 1;
//   i++;
// }
// console.log(sum);

// let sum = 0;
// let i = 1;

// while (i <= 5) {
//   sum += i; // Add current number to sum
//   i++; // Move to next number
// }

// console.log("Max sum 1+2+3+4+5 =", sum); // Output: 15

//

// let countdown = [];
// let j = 5;
// while (j > 0) {
//   countdown.push(j);
//   j--;
// }
// console.log(countdown);

// Tea Collection Part (Node.js version)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let teaCollection = [];

function askTea() {
  rl.question(
    'Enter your favourite tea (type "stop" to finish): ',
    function (tea) {
      if (tea.toLowerCase() === "stop") {
        console.log("Tea Collection:", teaCollection);
        rl.close();
      } else {
        teaCollection.push(tea);
        askTea(); // ask again
      }
    },
  );
}

askTea();
