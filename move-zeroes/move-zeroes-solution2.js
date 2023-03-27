/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length <= 1) return nums;
    
    let nonZeroIndex = 0;
    // eliminating zeros from the nums array
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    // adding the zeros at the end of the nums array
    for(let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};
// @lc code=end

