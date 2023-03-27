/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Using Brute Force
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    let map1 = new Map();
    let map2 = new Map();
    
    for(let i = 0; i < s.length; i++) {
        if(map1.has(s[i])){
            map1.set(s[i], map1.get(s[i]) + 1);
        } else {
            map1.set(s[i], 1);
        }
    }
    console.log(map1);
    
    for(let i = 0; i < t.length; i++) {
        if(map2.has(t[i])){
            map2.set(t[i], map2.get(t[i]) + 1);
        } else {
            map2.set(t[i], 1);
        }
    }
    console.log(map2);
    
    for(let i = 0; i < s.length; i++) {
        if(!map2.has(s[i]) || map1.get(s[i]) !== map2.get(s[i])) {
                console.log(map1.get(s[i]), map2.get(s[i]));
                return false; 
            }   
    }
    return true;
};
// @lc code=end

