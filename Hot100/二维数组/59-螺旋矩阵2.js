/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

 

示例 1：


输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
示例 2：

输入：n = 1
输出：[[1]]
 

提示：

1 <= n <= 20
 */


/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = new Array(n).fill(0).map(()=>new Array(n).fill(0));
    // console.log(matrix)
    let top = 0;
    let left = 0;
    let bottom = n-1;
    let right = n-1;
    let count = 1;
    while(top<=bottom&&left<=right){
        // 向右
        for(let i = left; i <= right; i ++){
            matrix[top][i] = count;
            count++;
        }
        top++;
        // 向下
        for(let i = top; i<= bottom; i++){
            matrix[i][right] = count;
            count++;
        }
        right--;
        // 向左
        for(let i = right; i>=left ; i--){
            matrix[bottom][i] = count;
            count ++;
        }
        bottom--;
        // 向上
        for(let i = bottom; i>= top; i--){
            matrix[i][left] = count;
            count ++;
        }
        left++;
    }
    return matrix;
};