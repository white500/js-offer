/**
 * 
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1

哈哈 自己一把通过的一道题 思路就是循环一遍
1. 当前值 等于 目标值 直接返回索引
2. 设置一个j 来记录不等于的索引 然后判断当前值大于目标值就直接返回j 小于就j++
3. 如果循环到最后都没有最后再返回j
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i
        } else {
            if (nums[i] > target) {
                return j
            } else if(nums[i] < target){
                j++
            }
        }
    }
    return j
};