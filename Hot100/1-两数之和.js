// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

// 你可以按任意顺序返回答案。

 

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：

// 输入：nums = [3,3], target = 6
// 输出：[0,1]
 

// 提示：

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// 只会存在一个有效答案
 

// 进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // // 计算target-nums[i]存入新数组，然后遍历数组看是否有匹配的
    // const n = nums.length;
    // let sub = [];
    // for(let i=0;i<n;i++){
    //     sub[i] = target - nums[i];
    // }
    // for(let i = 0; i< n; i++){
    //     if(nums.includes(sub[i])){
    //         const j = nums.findIndex((x,idx)=>x===sub[i]&&idx!==i)
    //         if(j!==-1)
    //         return [i,j]
    //     }
    // }
    const n = nums.length;
    let map = new Map();
    for(let i=0;i<n;i++){
        let sub = target - nums[i];//需要的值
        
        if(map.has(sub)){
            return [map.get(sub),i]
        }
        map.set(nums[i],i);
    }
    
};