# Two Sum

Given an array of integers `nums` and an integer `target`, return the indices `i` and `j` such that `nums[i] + nums[j] == target` and `i != j`.
You may assume that every input has exactly one pair of indices `i` and `j` that satisfy the condition.

Return the answer with the smaller index first.

**Example 1:**
Input: 
nums = [3,4,5,6], target = 7
Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

**Example 2:**
Input: nums = [4,5,6], target = 10
Output: [0,2]

**Example 3:**
Input: nums = [5,5], target = 10
Output: [0,1]

**Constraints:**
- `2 <= nums.length <= 1000`
- `10,000,000 <= nums[i] <= 10,000,000`
- `10,000,000 <= target <= 10,000,000`
- Only one valid answer exists.

## Solution Overview

For this problem we use a hash map to store previously seen numbers and their indices.
The idea is to iterate through the array and, for each number, calculate its complement (target - num).
• If the complement is already in the hash map, we have found the pair and return their indices.
• If not, we store the current number with its index in the hash map.
Since the problem guarantees exactly one solution, this approach will always find the correct pair.

Start
  ↓
Initialize empty hash map (seen)
  ↓
Loop through nums with index i
  ↓
Calculate complement = target - nums[i]
  ↓
Is complement in hash map?
  ├─ Yes → return [seen[complement], i]
  └─ No  → store nums[i] in hash map with index i
  ↓
Continue loop until pair is found
  ↓
End
