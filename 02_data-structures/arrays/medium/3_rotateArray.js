function rotateRight(arr, k) {
  let newArr = Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    newArr[(i + k) % arr.length] = arr[i];
  }

  return newArr;
}

