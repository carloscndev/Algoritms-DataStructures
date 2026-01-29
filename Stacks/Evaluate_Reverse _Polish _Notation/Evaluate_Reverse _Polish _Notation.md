# Evaluate Reverse Polish Notation

You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.
Return the integer that represents the evaluation of the expression.

- The operands may be integers or the results of other operations.
- The operators include `'+'`, `'-'`, `'*'`, and `'/'`.
- Assume that division between integers always truncates toward zero.

**Example 1:**
Input: tokens = ["1","2","+","3","*","4","-"]
Output: 5
Explanation: ((1 + 2) * 3) - 4 = 5

Constraints:
- `1 <= tokens.length <= 1000`
- `tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100]`

## Solution Overview
• Use a stack to evaluate the expression.
• Iterate through each token in the array:
	◦ If the token is a number, convert it to integer and push it onto the stack.
	◦ If the token is an operator (+, -, *, /):
		▪︎ Pop the top two numbers from the stack.
		▪︎ Apply the operator in the correct order (num1 operator num2).
		▪︎ Push the result back onto the stack.
• At the end, the stack contains a single element, which is the final result.
• Division must truncate toward zero → use Math.trunc() in JavaScript.
• Complexity: O(n) time, O(n) space.

Start
  ↓
Initialize empty stack
  ↓
For each token in tokens:
  ↓
  If token is number:
    Push onto stack
  Else (operator):
    Pop num2
       Pop num1
    result = num1 operator num2
    Push result back
  ↓
Repeat until all tokens processed
  ↓
Final result = stack.pop()
  ↓
End
