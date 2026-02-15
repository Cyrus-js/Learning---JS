// 1. Multiplication Table (nested for loops)
console.log("Multiplication Table:");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += (i * j).toString().padStart(4, " ") + " ";
  }
  console.log(row);
}

// 2. Pyramid Pattern (while loop)
console.log("\nPyramid:");
let row = 1;
let n = 5;
while (row <= n) {
  let spaces = " ".repeat(n - row);
  let stars = "*".repeat(2 * row - 1);
  console.log(spaces + stars);
  row++;
}

// 3. FizzBuzz (for loop with conditions)
console.log("\nFizzBuzz 1-20:");
for (let i = 1; i <= 20; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// 4. Array Loop (forEach + map)
const fruits = ["apple", "banana", "cherry", "date"];
console.log("\nFruits:");
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit.toUpperCase()}`);
});

// Uppercase version:
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("Uppercase:", upperFruits);

// 5. Sum 1 to N (while loop)
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(`\nSum 1-10: ${sum}`); // 55
