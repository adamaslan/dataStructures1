function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}
console.log(reverse((str = "pis")));
//reverse string with reduce
//reverse a number

function reverse1(int) {
  const reversed2 = int.toString().split("").reverse().join("");

  return parseInt(reversed2) * Math.sign(int);
}

console.log(reverse1((reversed2 = -20)));
//freak

const string = "Hello There";
const chars = {};
for (let char of string) {
  if (!chars[char]) {
    chars[char] = 1;
  } else {
    chars[char]++;
    //increment chars at char by 1
  }
}

chars;

const strang = "Why Hello There";
function findMax(strang) {
  max = 0;
  let maxChar = "";
  for (let char of strang) {
    charmap[char] = charmap[char] + 1 || 1;
  }
  for (let char in charmap) {
    if (charmap[char] > max) {
      max = charmap[char];
      maxChar = char;
    }
    return maxChar;
  }
}
