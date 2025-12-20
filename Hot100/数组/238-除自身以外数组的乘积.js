/**
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

 

示例 1:

输入: nums = [1,2,3,4]
输出: [24,12,8,6]
示例 2:

输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
 

提示：

2 <= nums.length <= 105
-30 <= nums[i] <= 30
输入 保证 数组 answer[i] 在  32 位 整数范围内
 

进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组 不被视为 额外空间。）
 */



/**
 * @param {number[]} nums
 * @return {number[]}
 */


// 暴力解法   n^2
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length).fill(0);
    // 把这个分割成两个数组，去求和
    
    for(let i = 0; i< nums.length; i++){
        let leftSum = 1;
        let rightSum = 1;
        // let k = nums.indexof(i);
        for(let j = 0;j<i;j++){
            leftSum *= nums[j];
        }

        for(let j = i+1; j<nums.length;j++){
            rightSum *= nums[j];
        }
        answer[i] = leftSum * rightSum;
    }
    return answer;

};

// 优化解法  n
var productExceptSelf = function(nums){
    // 先算每个数字左边的积，再算右边的积，再遍历进行乘积
    let answer = new Array(nums.length);
    let answer2 = new Array(nums.length);
    answer[0] = 1;
    answer2[nums.length-1] = 1;
    for(let i=1;i<nums.length;i++){
        answer[i] = answer[i-1] * nums[i-1];
    }
    for(let i = nums.length-2;i>=0;i--){
        answer2[i] = answer2[i+1] * nums[i+1];
    }

    for(let i=0;i<nums.length;i++){
        answer[i] = answer[i]*answer2[i];
    }
    return answer
}