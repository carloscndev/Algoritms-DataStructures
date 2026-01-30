# Daily Temperatures

You are given an array of integers `temperatures` where `temperatures[i]` represents the daily temperatures on the `ith` day.

Return an array `result` where `result[i]` is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the `ith` day, set `result[i]` to 0 instead.

**Example 1:**
Input: temperatures = [30,38,30,36,35,40,28]
Output: [1,4,1,2,1,0,0]

**Example 2:**
Input: temperatures = [22,21,20]
Output: [0,0,0]

**Constraints:**
 - `1 <= temperatures.length <= 1000`
 - `1 <= temperatures[i] <= 100`

 ## Solution Overview

• Use a monotonic decreasing stack that stores indices of days.
• Iterate through the array of temperatures:
	◦ While the current temperature is greater than the temperature at the index on top of the stack:
		▪︎ Pop the index from the stack.
		▪︎ Compute the difference i - prevIndex and store it in result[prevIndex].
	◦ Push the current index onto the stack.
• Initialize result with zeros since some days may not have a warmer future day.
• Complexity:
	◦ O(n) time → each index is pushed and popped at most once.
	◦ O(n) space → for the stack and result array.

Start
  ↓
Initialize result[n] = 0
Initialize empty stack
  ↓
For i = 0 to n-1:
   While stack not empty AND temperatures[i] > temperatures[stack.top]:
      prevIndex = stack.pop()
      result[prevIndex] = i - prevIndex
  Push i onto stack
  ↓
End loop
Return result
