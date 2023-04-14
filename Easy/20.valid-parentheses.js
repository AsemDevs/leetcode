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
/**
 * Returns true if the input string contains a valid sequence of brackets "(){}[]".
 */
function isValid(s) {
  const stack = [];
  const pairs = { ")": "(", "}": "{", "]": "[" };
  
  for (const c of s) {
    if (pairs[c]) {
      // This is a closing bracket, so check if it matches the last opening bracket.
      if (stack.pop() !== pairs[c]) {
        return false;
      }
    } else {
      // This is an opening bracket, so add it to the stack.
      stack.push(c);
    }
  }
  
  // If the stack is empty, all brackets were matched correctly.
  return stack.length === 0;
}

// @lc code=end

