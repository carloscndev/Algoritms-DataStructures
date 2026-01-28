# Products of Array Except Self
Given an integer array `nums`, return an array `output` where `output[i]` is the product of all the elements of `nums` except `nums[i]`.

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in `O(n)` time without using the division operation?

**Example 1:**
Input: nums = [1,2,4,6]
Output: [48,24,12,8]

**Example 2:**
Input: nums = [-1,0,1,2,3]
Output: [0,-6,0,0,0]

**Constraints:**
- `2 <= nums.length <= 1000`
- `-20 <= nums[i] <= 20`

## Solution Overview
We solve the problem in O(n) time without division by combining prefix and suffix products:
• Step 1: Build a prefix array where prefix[i] = product of all elements before index i.
• Step 2: Build a suffix array where suffix[i] = product of all elements after index i.
• Step 3: For each index i, the result is prefix[i] * suffix[i].
This ensures each element is excluded from its own product.

Start
  ↓
Initialize prefix[0] = 1
Initialize suffix[n-1] = 1
  ↓
Build prefix array:
  prefix[i] = prefix[i-1] * nums[i-1]
  ↓
Build suffix array:
  suffix[i] = suffix[i+1] * nums[i+1]
  ↓
For each i:
  result[i] = prefix[i] * suffix[i]
  ↓
Return result
  ↓
End
