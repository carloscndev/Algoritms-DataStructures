# Valid Anagram

Given two strings `s` and `t`, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.


**Example 1**:
Input: s = "racecar", t = "carrace"
Output: true

**Example 2**:
Input: s = "jar", t = "jam"
Output: false

**Constraints**:
s and t consist of lowercase English letters.

## Solution Overview

For this problem we use a frequency counter implemented with a JavaScript object.
The idea is to count how many times each character appears in the first string `s`, then subtract counts using the second string `t`.
• If at any point a character in t does not exist in the counter, we return false.
• After processing both strings, if all counts are zero, the two strings are anagrams.
• If any count is non‑zero, they are not anagrams.

Start
  ↓
Check: Is s.length ≠ t.length ?
  ├─ Yes → return FALSE (cannot be anagrams)
  └─ No  → continue
  ↓
Create empty frequency counter (object)
  ↓
For each letter in s:
  - Increment count in counter
  ↓
For each letter in t:
  - If letter not in counter → return FALSE
  - Else decrement count
  ↓
Check all counts in counter:
  - If any ≠ 0 → return FALSE
  - Else → return TRUE (strings are anagrams)
  ↓
End
