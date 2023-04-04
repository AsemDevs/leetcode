/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // We create a stack (we use an array in JavaScript) to remember open brackets.
  const stack = [];

  // This helper function checks if the open and close brackets match.
  function bracketsMatch(open, close) {
    if (open === '(' && close === ')') return true;
    if (open === '{' && close === '}') return true;
    if (open === '[' && close === ']') return true;
    return false;
  }

  // We go through the string one character at a time.
  for (const char of s) {

    // If the character is an open bracket, we remember it in the stack.
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } 
    // If the character is a close bracket, we check if it matches the last open bracket.
    else {
      // If the stack is empty, there's no open bracket to match, so the string is not valid.
      if (stack.length === 0) {
        return false;
      }

      // We take the last open bracket from the stack and check if it matches the close bracket.
      const lastOpenBracket = stack.pop();
      if (!bracketsMatch(lastOpenBracket, char)) {
        // If the brackets don't match, the string is not valid.
        return false;
      }
    }
  }

  // After we check all characters, the stack should be empty if the string is valid.
  return stack.length === 0;

};
// @lc code=end

