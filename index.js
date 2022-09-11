function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]
    for (let j = i + 1; j < array.length; j++ ) {
      if (array[j] === complement) return true
    }
  }
  return false 
} 
/* 
  Write the Big O time complexity of your function here
*/

/* 
  can do this similarly to how we did the palindrome one - starting from 
  index[i] and including index[j] have the first letter add to the last letter
  then the second letter add to the second to last letter; each time checking
  to see if the sum equals the target number 
*/

/*
  Add written explanation of your solution here
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
