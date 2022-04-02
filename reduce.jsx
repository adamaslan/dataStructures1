function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

//reverse string with reduce
//reverse a number

function reverse1(int) {
  return int.toString("").reverse("").parse("") * Math.sign(int);
}
