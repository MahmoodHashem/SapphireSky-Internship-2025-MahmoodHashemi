class FirstNonRepeatingCharacterFinder {
  constructor() {
    this.queue = [];
    this.charCount = {};
  }

  processNewCharacter(char) {
    if (!this.charCount[char]) {
      this.charCount[char] = 1;
      this.queue.push(char);
    } else {
      this.charCount[char]++;
    }

    while (this.queue.length > 0 && this.charCount[this.queue[0]] > 1) {
      this.queue.shift();
    }

    return this.queue.length > 0 ? this.queue[0] : "#";
  }

  processStream(stream) {
    let result = "";

    for (let char of stream) {
      result += this.processNewCharacter(char);
    }

    return result;
  }
}

function demonstrateFirstNonRepeating() {
  const finder = new FirstNonRepeatingCharacterFinder();

  const stream = "aabcbcd";
  console.log("Input stream:", stream);

  let output = "";
  for (let i = 0; i < stream.length; i++) {
    const char = stream[i];
    const firstNonRepeating = finder.processNewCharacter(char);
    output += `After processing '${char}': First non-repeating is '${firstNonRepeating}'\n`;
  }

  console.log(output);

  // Test with the processStream method
  const finder2 = new FirstNonRepeatingCharacterFinder();
  console.log("Result for each step:", finder2.processStream(stream));
}

demonstrateFirstNonRepeating();
