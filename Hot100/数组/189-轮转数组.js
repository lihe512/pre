/**
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

 

示例 1:

输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]
 

提示：

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

进阶：

尽可能想出更多的解决方案，至少有 三种 不同的方法可以解决这个问题。
你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let len = nums.length;
    for(let i=1;i<=k;i++){
        let j = nums[len-1];
        nums.pop(len-1);
        nums.unshift(j);
    }
};
// 翻转部分数组

var rotate = function(nums,k){
    let len = nums.length;
    if(k%len===0)
        return;
    else k = k%len
    let tails = nums.splice(len-k);
    nums.unshift(...tails)

}

var rotate = function(nums, k) {
    let len = nums.length;
    k = k % len;
    
    // 算出正确的结果 (新数组)
    // 注意这里切分点改成了 len - k
    let newArr = nums.slice(len - k).concat(nums.slice(0, len - k));

    // 手动修改原数组的值
    for(let i = 0; i < len; i++){
        nums[i] = newArr[i];
    }
};