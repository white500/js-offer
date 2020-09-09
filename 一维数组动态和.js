/**
 * 解题思路： 去除索引0 从1开始依次向后加 然后替换原数组的对应索引位置
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i -1] + nums[i]
    }
    return nums
};