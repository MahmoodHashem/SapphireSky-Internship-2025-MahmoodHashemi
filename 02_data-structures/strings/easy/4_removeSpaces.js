function removeSpaces(str) {
  let removedSpaces = "";

  for (const char of str) {
    removedSpaces += char !== " " ? char : "";
  }

  return removedSpaces; 
}
