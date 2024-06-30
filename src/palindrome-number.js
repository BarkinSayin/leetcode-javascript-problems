// Given an integer x, return true if x is a palindrome , and false otherwise.

const isPalindrome = (x) => {
  let getString = x.toString();
  let palindromeNum = "";
  for (i = getString.length - 1; i >= 0; i--) {
    palindromeNum += getString[i];
  }
  return x===Number(palindromeNum)
};

console.log(isPalindrome(121));
