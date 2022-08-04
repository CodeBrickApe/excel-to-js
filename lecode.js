/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var nums = [2, 3, 4], target = 6
var twoSum = function (nums, target) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) arr = [i, j]
    }
  }
  return arr
};
console.log(twoSum(nums, target));

// 整数反转
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function (x) {
  let y = parseInt(x.toString().split('').reverse().join(''))
  if (x < 0) y = -y
  return y > 2147483647 || y < -2147483648 ? 0 : y;
};
console.log(reverse(-2147483647));

// 回文数
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let y = ''
  let arr = []
  for(i of x.toString()){
    arr.unshift(i)
  }
  y = Number(arr.join(''))
  return x === y
};
console.log(isPalindrome(121));