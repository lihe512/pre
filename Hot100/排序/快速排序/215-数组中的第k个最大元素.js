/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // 先排序  然后按照下标去找
    // 
    // 怎么排序时间复杂度为on   应该不用全部排一遍，只用找出第k大的即可
    // 总结流程图
    // 裁判 (Pivot)：你不用动，去最后面喝茶。

    // 管理员 (storeIndex)：我在门口守着，来一个比裁判矮的，我就把他拉进来（放到我当前的位置），然后我往后退一步。

    // 如果遇到比裁判高的：我（管理员）不动，你就站在那儿别动（等着被后面的矮个子换走，或者如果后面没矮个子了，你就留在高个子区）。

    // 最后：裁判回来，直接站在管理员现在的位置上。完成！
    const n = nums.length;
    const targetIndex = n-k;
    const swap = (arr,i,j)=>{
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    // 分区函数
    const partition = (left, right, pivotIndex) =>{
        // 中间值
        const pivotValue = nums[pivotIndex];
        // 先把pivot移动到最右边暂存
        swap(nums,pivotIndex,right);
        let storeIndex = left;
        // 遍历数组，比pivot小的都移到storeIndex左边
        for(let i = left; i<right; i++){
            if(nums[i]<pivotValue){
                swap(nums,storeIndex, i);
                storeIndex++;
            }
        }
        swap(nums,storeIndex,right);
        return storeIndex;
    }
    const quickSelect = (left,right)=>{
        if(left===right)return nums[left];
        const randomPivotIndex = Math.floor(Math.random()*(right-left+1))+left;
        const pivotIndex = partition(left,right,randomPivotIndex);
        if(pivotIndex === targetIndex){
            return nums[pivotIndex];
        }
        else if(pivotIndex<targetIndex){
            return quickSelect(pivotIndex+1,right);
        }
        else{
            return quickSelect(left,pivotIndex-1);
        }
    }
    return quickSelect(0, n - 1);
};