/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // identify the large and small size Array
    let largeSizeArray = nums1.length > nums2.length ? nums1 : nums2;
    let smallSizeArray = nums1.length > nums2.length ? nums2 : nums1;

    let result = [];
    
    for(let i = 0; i < largeSizeArray.length; i++) {
        if(smallSizeArray.indexOf(largeSizeArray[i]) !== -1) {
            result.push(largeSizeArray[i]); 
            smallSizeArray.splice(smallSizeArray.indexOf(largeSizeArray[i]), 1);
        }
    }

    return result;
};
// @lc code=end

