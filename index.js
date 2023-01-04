function isPalindrome(word) {
  // Write your algorithm here

  const arrayOfLetters = word.split("");
  const reverseLetters = arrayOfLetters.reverse();
  const reverseString = reverseLetters.join("");

  if (word == reverseString) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", isPalindrome("boy"));

  //✓ returns false for 'ab'

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
