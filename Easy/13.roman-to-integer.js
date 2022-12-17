/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //create object js for roman to integer
    let romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (romanMap[s[i]] < romanMap[s[i+1]]) {
            result -= romanMap[s[i]];
        } else {
            result += romanMap[s[i]];
        }
    }
    return result;
};
// @lc code=end

