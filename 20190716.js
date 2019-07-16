// leetcode 
// 两数之和
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
  for(let i = 0 ; i < nums.length; i++){
    for(let j = 1; j < nums.length; j++){
      if(nums[j] === target - nums[i]){
        return [i,j]
      }
    }
  }
}

//方法二 使用es6的 map属性
function twoSum(nums,target){
  let map = new Map()
  for(let i = 0 ; i < nums.length ; i++){
    if(map.has(nums[i])){
      return [map.get(nums[i]),i]
    }else{
      map.set(target - nums[i],i)
    }
  }
}