function removeDuplicate(arr) {
  arr = sort(arr);

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr; 
}

console.log(removeDuplicate([1, 2, 3, 3, 3, 2, 1]));
