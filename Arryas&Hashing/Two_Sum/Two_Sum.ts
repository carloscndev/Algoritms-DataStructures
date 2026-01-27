function twoSum(nums: number[], target: number): number[] {
  const seen: { [key: number]: number } = {};

  for(let i=0;i<nums.length;i++) {
    let complement = target - nums[i];
    if(complement in seen){
        return [seen[complement], i]
    }
    seen[nums[i]] = i;
  }

  return [];
}

const testOneNums = [2, 7, 11, 15];
const testOneTarget = 9;
console.log(twoSum(testOneNums, testOneTarget));

const testTwoNums = [3, 2, 4];
const testTwoTarget = 6;
console.log(twoSum(testTwoNums, testTwoTarget));

const testThreeNums = [3, 3];
const testThreeTarget = 6;
console.log(twoSum(testThreeNums, testThreeTarget));
