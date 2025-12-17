/**
 * https://leetcode.cn/problems/plus-one/
 * 66. 加一
给定一个表示 大整数 的整数数组 digits，其中 digits[i] 是整数的第 i 位数字。这些数字按从左到右，从最高位到最低位排列。这个大整数不包含任何前导 0。

将大整数加 1，并返回结果的数字数组。

 

示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
加 1 后得到 123 + 1 = 124。
因此，结果应该是 [1,2,4]。
示例 2：

输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
加 1 后得到 4321 + 1 = 4322。
因此，结果应该是 [4,3,2,2]。
示例 3：

输入：digits = [9]
输出：[1,0]
解释：输入数组表示数字 9。
加 1 得到了 9 + 1 = 10。
因此，结果应该是 [1,0]。
 

提示：

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits 不包含任何前导 0。
 */
/** 
 * 一些方法复盘
 * 数组转字符串：arr.join('')  arr.toString()  JSON.stringify(arr)
 * 字符串转数组：str.split(separator,limit)   [...str]  Array.from(str)   JSON.parse(str)
 * 字符串转Number：Number(str)  +str parseInt(str) parseFloat(str)
 * Number转字符串：String(num)  num.toString()
 * 
 * map() 方法创建一个新数组，其结果是该数组中的每个元素调用一个提供的函数后返回的结果。
 * Number本身就是一个函数，map里面放回调函数
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// ·  方法一：模拟加法·
var plusOne = function(digits) {
    // 将数组转为字符串
    let num = BigInt(digits.join(''));
    num = num + 1n;
    return Array.from(String(num)).map(Number);
};
// ·  方法二：进制转换 模拟竖式加法
var plusOne = function(digits){
    const len = digits.length;
    // 从数组的最后一个开始循环
    for(let i = len-1; i>=0;i--){
        digits[i] ++;
        digits[i]%=10;
        if(digits[i]!==0){
            // 说明没有进位
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}
