function findMissing(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (i !== arr[i - 1]) return i;
  }

  return -1;
}

console.log(findMissing([1, 2, 3, 4, 5, 6, 7, 9, 10]));

