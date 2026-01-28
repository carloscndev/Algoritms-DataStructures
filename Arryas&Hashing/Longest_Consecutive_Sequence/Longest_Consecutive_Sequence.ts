function longestConsecutive(nums: number[]): number {
    const numsSet = new Set(nums);
    let longest = 0;

    for (let num of numsSet) {
        if (!numsSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numsSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

  return longest;
}

const test1 = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(test1)); // Output: 4

const test2 = [0, -1, 1, 2, -2, 3];
console.log(longestConsecutive(test2)); // Output: 6

const test3 = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
console.log(longestConsecutive(test3)); // Output: 7