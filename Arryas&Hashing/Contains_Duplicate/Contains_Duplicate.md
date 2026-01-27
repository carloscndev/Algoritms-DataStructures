# Contains Duplicate

### Problem

Given an integer array nums, return `true` if any value appears more than once in the array, otherwise return `false`.

**Example 1:**
	Input: nums = [1, 2, 3, 1]
	Output: true

**Example 2:**
	Input: nums = [1, 2, 3, 4]
	Output: false

**Example 3:**
	Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
	Output: true

## Solution Overview

For this problem we use a data structure called Set.
A Set is a collection that stores unique values, automatically removing any duplicates. The idea is to convert the original array into a Set and then compare its size with the length of the array.
• If the size of the Set is smaller, it means there were repeated elements.
• If the size is equal, all the elements were unique.

Start
  ↓
Create a Set from nums
  ↓
Compare:
  Is nums.length ≠ Set.size ?
    ├─ Yes → return TRUE (duplicates exist)
    └─ No  → return FALSE (all elements are unique)
  ↓
End
