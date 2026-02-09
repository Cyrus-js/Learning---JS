// let sum = 0;
// let i = 0;

// while (i <= 5) {
//   sum = sum + 1;
//   sum += 1;
//   i++;
// }
// console.log(sum);

let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i; // Add current number to sum
  i++; // Move to next number
}

// console.log("Max sum 1+2+3+4+5 =", sum); // Output: 15

const output = [];
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    output.push("FizzBuzz");
  } else if (i % 3 === 0) {
    output.push("Fizz");
  } else if (i % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(i.toString());
  }
}
console.log(output.join(", "));

let n = 5;
let row = 1;
while (row <= n) {
  let spaces = " ".repeat(n - row);
  let stars = "*".repeat(2 * row - 1);
  console.log(spaces + stars);
  row++;
}

let num = 0;
let a = 0;

while (a <= 5) {
  num += a;
  a++;
}
console.log(num);

let sum1 = 6;
for (let i = 1; i <= 10; i++) {
  sum1 += i;
}
console.log(sum1);

const EventEmitter = require("events");
class DataBus extends EventEmitter {}

const bus = new DataBus();

// Data producers emit events
function processUserData(users) {
  users.forEach((user) => {
    bus.emit("user:processed", { id: user.id, name: user.name });
  });
}

// Listeners handle efficiently
bus.on("user:processed", (data) => {
  console.log(`✅ Processed: ${data.name}`);
});

bus.on("user:processed", (data) => {
  // Parallel: Save to DB simulation
  setTimeout(() => console.log(`💾 Saved: ${data.id}`), 0);
});

// Test with loop-generated data
const users = [];
for (let i = 1; i <= 5; i++) {
  users.push({ id: i, name: `User${i}` });
}
processUserData(users);
