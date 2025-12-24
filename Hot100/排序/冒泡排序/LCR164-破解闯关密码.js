/**
 * 闯关游戏需要破解一组密码，闯关组给出的有关密码的线索是：

一个拥有密码所有元素的非负整数数组 password
密码是 password 中所有元素拼接后得到的最小的一个数
请编写一个程序返回这个密码。

 

示例 1：

输入：password = [15, 8, 7]
输出："1578"
示例 2：

输入：password = [0, 3, 30, 34, 5, 9]
输出："03033459"
 

提示：

0 < password.length <= 100
说明:

输出结果可能非常大，所以你需要返回一个字符串而不是整数
拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0
 */
/**
 * @param {number[]} password
 * @return {string}
 */
var crackPassword = function(password) {
    // 这一题的思路：遍历数组，如果遇到小的，小的给放到前面,不对，这样的话也有bug,还要看个位数，十位数
    // 所以这中间有什么规律
    const n = password.length;
   
    for(let i= 0 ; i< n; i++){
        for(let j= i ; j < n; j++){
            if(''+password[j]+password[i]+''<''+password[i]+password[j]+''){
                [password[j],password[i]] =  [password[i],password[j]] 
            }
        }
    }
    return password.join('')
};