function isArmstrong(num) {
  let numArr = num
    .toString()
    .split("")
    .map((e) => {
      return Math.pow(e, num.toString().length);
    });

  let result = numArr.reduce((a, c) => a + c, 0);

  return num === result
}

console.log(isArmstrong(153));
