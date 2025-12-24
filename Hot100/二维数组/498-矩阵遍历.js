/**
 * 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

 

示例 1：


输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,4,7,5,3,6,8,9]
示例 2：

输入：mat = [[1,2],[3,4]]
输出：[1,2,3,4]
 

提示：

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
-105 <= mat[i][j] <= 105
 */
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    let arr = [];
    // 当前坐标
    let row = 0;
    let col = 0;
    for(let i = 0; i<m*n; i++){
        arr.push(mat[row][col]);
        if((row+col)%2===0){
            // 向右上方
            if(col===n-1){
                row++;//碰到右墙，只能往下
            }
            else if(row===0){
                col++;//碰到上墙，只能往右
            }
            else{
                row--;
                col++;
            }
        }
        else{
            // 往左下方
            
            if(row === m-1){
                col++;
            }
            else if(col===0){
                row++;
            }
            else{
                row++;
                col--;
            }
        }
        
    }
    return arr;
};