//maxChar.js;

function maxChar(strang) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of strang) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  console.log(maxChar);
  return maxChar;
}

module.exports = maxChar;
