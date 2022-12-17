/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str_x = String(x);
    let reversed_x = str_x.split('').reverse().join('');
    if (reversed_x === str_x && x >= 0) {
        return true;
    } else {
        return false;
    }
};
// @lc code=end

