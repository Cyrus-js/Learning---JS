// To find whether a given string is palindrome or not.
// Example "NaN" == "NaN"
// function palindrome(input) {
//   let reverse = "";
//   for (let i = input.length - 1; i >= 0; i--) {
//     reverse = reverse + input[i];
//   }
//   console.log(reverse);
//   if (reverse === input) {
//     console.log(`palindrome`);
//   } else {
//     console.log(`Not palindrome`);
//   }
// }
// palindrome("wow");

//
let a = [1, 2, 3, 4, 5];
function b(inside) {
  //empty array
  let emptyarrray = [];
  //loop
  for (let p = 0; p <= inside.length - 1; p++) {
    if (inside[p] % 2 === 0) {
      emptyarrray.push(inside[p]);
    }
  }
  console.log(emptyarrray);
}
b(a);
const odd = a.filter((num) => num % 2 != 0);
console.log(odd);
