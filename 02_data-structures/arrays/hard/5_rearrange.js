function evensAndOdds(array) {
  let evens = [];
  let odds = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    } else {
      odds.push(array[i]);
    }
  }
  return { evens, odds };
}


function rearrange(arr) {
  const evens = evensAndOdds(arr).evens;
  const odds = evensAndOdds(arr).odds;

  return [...evens, ...odds];
}

