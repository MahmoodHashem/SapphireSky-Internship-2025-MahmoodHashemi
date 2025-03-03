/*
Sum of First N Natural Numbers
Write a program that takes N as input and calculates the
sum of the first N natural numbers.
*/

function sum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}




