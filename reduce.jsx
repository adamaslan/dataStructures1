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
