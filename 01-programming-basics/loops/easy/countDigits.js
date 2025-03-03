function countDigits(num) {
  if (isNaN(num)) return "Invalid input";

  let number = num.toString();

  return number.length;
}

console.log(countDigits(0));
