/**
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：


输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // 也就是按照顺序遍历二维数组
    // for循环的边界
    let m = matrix.length;//行
    let n = matrix[0].length;//列
    let arr = [];//定义空数组
    
    let top = 0;
    let left = 0;
    let bottom = m-1;
    let right = n-1;


    // 当边界没有交叉时
    while(top<=bottom && left <= right){
        // 向右
        for(let i = left; i <= right; i++){
            arr.push(matrix[top][i]);   
        }
        top++;//上边界下移



        // 向下
        for(let i = top; i<=bottom; i++){
            arr.push(matrix[i][right]);
        }
        right--;//右边界左移


        if(top<=bottom){
            // 向左
            for(let i = right; i>= left; i--){
                arr.push(matrix[bottom][i]);
            }
            bottom--;
        }
        // 向上
        if(left<=right){
            for(let i = bottom; i>=top; i--){
            arr.push(matrix[i][left]);
        }
        left++;
        }
        
    }
    return arr;
};
