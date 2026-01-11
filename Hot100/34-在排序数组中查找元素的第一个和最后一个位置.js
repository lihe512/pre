/**
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109
 */



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const n = nums.length;
    let result = [-1,-1]
    // 从前往后搜索;
    for(let i = 0; i<n; i++){
        if(nums[i] === target){
            result[0] = i;
            break;
        }
    }
    // 从后往前搜索
    for(let i = n-1; i>=0; i--){
        if(nums[i] === target){
            result[1] = i;
            break;
        }
    }
    return result;
  }
// <!--方法二 ： 二分查找 -->
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const n = nums.length;
    // 二分查找
    let left =  0;
    let right = n-1;
    let first = -1;
    let last = -1;
    // 查找first的位置
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === target){
            first = mid;
            right  = mid-1;
        }
        else if(nums[mid]<target){
            left = mid +1;
        }
        else{
            right = mid-1;
        }
    }
    // 查找last的位置
    left =  0;
    right = n-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===target){
            last = mid;
            left = mid+1;
        }
        else if(nums[mid]<target){
            left = mid +1;
        }
        else{
            right = mid-1;
        }
    }
    return [first,last];
};