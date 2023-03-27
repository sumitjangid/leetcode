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
    
    let i = 0;
    let j = i + 1;
    
    while( i < j && j < nums.length ) {
        if(nums[i] === 0 && nums[j] === 0) {
            j++;
            continue;
        } else if(nums[i] === 0 && nums[j] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;          
            //console.log(nums);
        }
        i++;
        j++;
    }
    
    return nums;
};
// @lc code=end

