# Group Anagrams

Given an array of strings `strs`, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

**Example 1:**
Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

**Example 2:**
Input: strs = ["x"]
Output: [["x"]]

**Example 3:**
Input: strs = [""]
Output: [[""]]

**Constraints:**
- `1 <= strs.length <= 1000`
- `0 <= strs[i].length <= 100`
- `strs[i]` is made up of lowercase English letters.

## Solution Overview

To group anagrams, we use a hash map where the key is the sorted version of each word.
• For every word in the input list, sort its characters alphabetically.
• The sorted word acts as a unique key because all anagrams share the same sorted form.
• Insert the original word into the hash map under that key.
• At the end, the values of the hash map represent groups of anagrams.
This approach is simple and intuitive, with a time complexity of `O(n · k log k)`, where n is the number of words and k is the average word length (due to sorting each word).

Start
  ↓
Initialize empty hash map (groups)
  ↓
For each word in strs:
  - Sort characters in word → key
  - If key not in hash map → create new list
  - Append word to list under key
  ↓
After processing all words:
  - Return all lists (hash map values)
  ↓
End
