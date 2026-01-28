# Longest Consecutive Sequence

Given an array of integers `nums`, return the length of the longest consecutive sequence of elements that can be formed.

A consecutive sequence is a sequence of elements in which each element is exactly `1` greater than the previous element. The elements do not have to be consecutive in the original array.

You must write an algorithm that runs in `O(n)` time.

**Example 1:**
Input: nums = [2,20,4,10,3,4,5]
Output: 4
Explanation: The longest consecutive sequence is [2, 3, 4, 5].

**Example 2:**
Input: nums = [0,3,2,5,4,6,1,1]
Output: 7

Constraints:
- `0 <= nums.length <= 1000`
- `10^9 <= nums[i] <= 10^9`

## Solution Overview
• Convert the array into a Set to remove duplicates and allow O(1) lookups.
• Iterate through each number in the set:
	◦ If num - 1 does not exist in the set, then num is the start of a sequence.
	◦ Expand the sequence forward with a while loop, checking num + 1, num + 2, etc., until the sequence ends.
	◦ Track the length of this sequence.
• Update the maximum length found across all sequences.
• Return the maximum length as the result.
• Complexity: O(n) time, since each number is processed at most once in the expansion step, and O(n) space for the set.

Start
  ↓
Convert nums into a Set
Initialize longest = 0
  ↓
For each num in Set:
  ↓
  If (num - 1) not in Set:
  → currentNum = num
  → currentStreak = 1
  ↓
  While (currentNum + 1) in Set:
    currentNum += 1
    currentStreak += 1
  ↓
  longest = max(longest, currentStreak)
  ↓
Repeat for all numbers
  ↓
Return longest
  ↓
End
