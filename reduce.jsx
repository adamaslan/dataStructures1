function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}
console.log.apply(reverse((str = "pis")));
//reverse string with reduce
//reverse a number

function reverse1(int) {
  return int.toString("").reverse("").parseInt("") * Math.sign(int);
}

//freak
