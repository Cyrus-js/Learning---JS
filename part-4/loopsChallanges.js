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

console.log("Max sum 1+2+3+4+5 =", sum); // Output: 15
