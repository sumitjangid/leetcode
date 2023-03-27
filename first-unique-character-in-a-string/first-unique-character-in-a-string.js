/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let listChar = new Map();
    let count = 0;
    
    for(let i = 0; i < s.length; i++){
        if(listChar.has(s[i])){
           count = listChar.get(s[i]);
            listChar.set(s[i], count + 1);
        }else{
            listChar.set(s[i], 1);
        }
    }
    console.log(listChar);
    
    for(let i = 0; i < s.length; i++){
        if(listChar.get(s[i]) === 1){
            console.log(s[i], listChar.get(s[i]));
            return i;
        }
    }
    
    return -1;
};
// @lc code=end

