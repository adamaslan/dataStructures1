function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";
  steps(n, row, stair + add);
}

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
// a
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }

//     console.log(stair);
//   }
// }

module.exports = steps;

// function countDownFrom(number) {
// 	for (let i = number; i > 0; i--) {
// 		console.log(i);
// 	}
// }

// countDownFrom(5);

// function combinations(current_string, actual_string, seen) {
//   var result = [];
//   if (current_string.length === actual_string.length) {
//       return [current_string];
//   }
//   actual_string.forEach(function(currentChar, index) {
//       if (seen.indexOf(index) === -1) {
//           result = [].concat.apply(result, combinations(current_string
//               + currentChar, actual_string, seen.concat(index)));
//       }
//   });
//   return result;
// }

// console.log(combinations("", "ABC".split(""), []));
// Output

// [ 'ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA' ]
// Note: This program works under the assumption that the characters in input string will be unique.

// There are three parameters passed to this function. First one is the current string which was built with recursion, second is the array of characters from the actual string, third one is the list of indices already seen in the recursion tree.

// The first if condition is the base condition of this recursive solution. If the length of the current string generated is equal to the actual string's length, we have no characters left to process and this is one of the combinations. So, we return that.

// If that condition is not met, for each character in actual string, we check if it has been used already (we compare the indices with the indices in the seen). If it is already used in the current recursion, ignore that. Otherwise, concate that with the current string and include this in the seen variable and recurse now.

// The result of the recursion will be an array of strings. We need to flatten them (concatenate all the elements of the inner arrays). So, we use [].concat.apply.

// Finally, we return the gathered result and here is how the recursion tree looks like
