# Top K Frequent Elements

Given an integer array nums and an integer `k`, return the `k` most frequent elements within the array.
The test cases are generated such that the answer is always unique.
You may return the output in any order.

**Example 1:**
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]

**Example 2:**
Input: nums = [7,7], k = 1
Output: [7]

**Constraints:**
- `1 <= nums.length <= 10^4`
- `-1000 <= nums[i] <= 1000`
- `1 <= k <= number of distinct elements in nums`

## Solution Overview
• Count the frequency of each number using a hash map.
• Create an array of buckets where the index represents the frequency.
• Place each number into the bucket corresponding to its frequency.
• Traverse the buckets from highest to lowest, collecting numbers until we have k.
This ensures we get exactly the k most frequent elements in `O(n)` time.

Start
  ↓
Initialize empty hash map (frequency)
  ↓
For each number in nums:
  - Increment count in hash map
  ↓
Create buckets (array of lists) indexed by frequency
  ↓
For each [number, freq] in hash map:
  - Place number in buckets[freq]
  ↓
Traverse buckets from highest to lowest frequency
  - Collect numbers until k elements are gathered
  ↓
Return collected elements
  ↓
End
