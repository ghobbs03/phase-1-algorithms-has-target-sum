function hasTargetSum(array, target) {
  // Write your algorithm here
  let hasSum = false;
  let numArray = [...array]; // copy of array

  for (let i = 0; i < array.length; i++) {

    numArray.splice(i, 1)[0]; // delete number at current index

    numArray.forEach((otherNum) => { // iterate through those other numbers
      let sum = array[i] + otherNum;

      if (sum === target) {
        hasSum = true; // if found, return true
      }
    })

    numArray.length = 0; // empty numArray
    numArray = [...array]; // and reset for splice

  }

  return hasSum;
}

/* 
  Write the Big O time complexity of your function here
  O(n²) - two for loops

*/

/* 
  Add your pseudocode here


  1. iterate through array
      2. store current index 
      3. make numArray of other values (not current index)
      4. iterate through numArray
        5. store sum of current index and numArray index
        6. compare sum to target, if true return true
      7. reset numArray
    
  8. return false if sum === target was not true in loop.

*/

/*
  Add written explanation of your solution here

  The key part is deciding how to keep track of your indices.
  You want to compare array[i] to array[everythingElse],
  with everythingElse being every other index.
  The best way to see that, for me, is by creating a new array that doesn't 
  contain the current index value, hence using splice.
  However, because splice is destructive, I have to reset it every time
  we iterate through the loop.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
