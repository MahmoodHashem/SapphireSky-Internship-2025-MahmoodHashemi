function rearrange(arr) {
  const evens = arr.filter((num) => num % 2 === 0);
  const odds = arr.filter((num) => num % 2 !== 0);

  return [...evens, ...odds];
}

