# Valid_Parentheses

You are given a string `s` consisting of the following characters: `'(', ')', '{', '}', '['` and `']'`.

The input string s is valid if and only if:
- Every open bracket is closed by the same type of close bracket.
- Open brackets are closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

Return `true` if s is a valid string, and `false` otherwise.

**Example 1:**
```
Input: s = "[]"
Output: true
```

**Example 2:**
```
Input: s = "([{}])"
Output: true
```

**Example 3:**
```
Input: s = "[(])"
Output: false
```

Explanation: The brackets are not closed in the correct order.

Constraints:
- `1 <= s.length <= 1000`

## Solution Overview
• Use a stack to keep track of opening brackets.
• Iterate through each character in the string:
	◦ If it’s an opening bracket ((, [, {), push it onto the stack.
	◦ If it’s a closing bracket (), ], }):
		▪︎ Pop the top element from the stack.
		▪︎ Check if the popped element matches the corresponding opening bracket.
		▪︎ If not, return false.
• At the end, the string is valid only if the stack is empty.
• Complexity: O(n) time, O(n) space.

Start
  ↓
Initialize empty stack
  ↓
For each character in string:
  ↓
  If opening bracket:
    Push onto stack
  Else (closing bracket):
    If stack empty → return false
    Pop top element
    If not matching pair → return false
  ↓
Repeat until end
  ↓
If stack empty → return true
Else → return false
  ↓
End
