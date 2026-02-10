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

let init = 0;
let strt = 1;

while (strt <= 6) {
  init += 1;
  strt++;
}
console.log(strt);
