function containsDuplicate(nums: number[]): boolean {
    let numsSet: Set<number> = new Set(nums);
		
		return nums.length !== numsSet.size;
}

const testArray1 = [1, 2, 3, 4];
const testArray2 = [1, 2, 3, 1];

console.log(containsDuplicate(testArray1));
console.log(containsDuplicate(testArray2)); 