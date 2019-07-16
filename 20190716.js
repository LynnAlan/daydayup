// leetcode 

//01 两数之和
/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
  你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

  示例:
  给定 nums = [2, 7, 11, 15], target = 9
  因为 nums[0] + nums[1] = 2 + 7 = 9
  所以返回 [0, 1]

 *  
 */

var nums = [2, 7, 11, 15],target = 9

//方法一 双层for 循环
function twoSum(nums,target){
  for(let i = 0 ; i < nums.length; i++) {
    for(let j = 1; j < nums.length; j++) {
      if(nums[j] === target - nums[i]) {
        return [i,j]
      }
    }
  }
}

//方法二 使用es6的 map属性
function twoSum(nums,target){
  let map = new Map()
  for(let i = 0 ; i < nums.length ; i++) {
    if(!map.has(nums[i])) {
      map.set(target - nums[i],i)
    } else {
      return [map.get(nums[i]),i]
    }
  }
}

/**
 * 02 整数反转
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

  示例 1:
  输入: 123
  输出: 321

  示例 2:
  输入: -123
  输出: -321

  示例 3:
  输入: 120
  输出: 21
  注意:

  假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 *  */
// 方法一：转为数组然后处理
function reverse(num){
  let numToArr = String(Math.abs(num)).split('');
  let reslut = '';
  for(const i = 0 ; i < numToArr.length;){
    reslut += numToArr.pop()
  }
  reslut = num > 0 ?  Number(reslut) : -Number(reslut) 
  if (reslut > Math.pow(2, 31) - 1 || reslut < - Math.pow(2, 31)) {
    reslut = 0;
  }
  return reslut
}

// 方法二 数学方式
function reverse(num){
  let reslut = 0
  let t = Math.abs(num)
  while( t != 0){
    reslut = reslut * 10 + t % 10
    console.log(reslut)
    t = Math.floor(t / 10)
  }
  reslut = num > 0 ?  reslut : reslut
  if (reslut > Math.pow(2, 31) - 1 || reslut < - Math.pow(2, 31)) {
    reslut = 0;
  }
  return reslut
}