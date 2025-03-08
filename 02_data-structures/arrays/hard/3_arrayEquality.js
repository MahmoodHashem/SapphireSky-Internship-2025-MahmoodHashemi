function isEquale(arr1, arr2) {
  const sum1 = sumArray(arr1);
  const sum2 = sumArray(arr2);

  return sum1 === sum2;
}

function sumArray(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

