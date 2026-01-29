# Minimum Stack
Design a stack class that supports the `push`, `pop`, `top`, and `getMin` operations.

- MinStack() initializes the stack object.
- void push(int val) pushes the element val onto the stack.
- void pop() removes the element on the top of the stack.
- int top() gets the top element of the stack.
- int getMin() retrieves the minimum element in the stack.

Each function should run in O(1) time.

Example 1:
```
Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

Output: [null,null,null,null,0,null,2,1]

Explanation:
MinStack minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1
```

Constraints:
- `-2^31 <= val <= 2^31 - 1.`
- `pop, top and getMin will always be called on non-empty stacks.`

## Solution Overview

• Use two stacks:
	◦ stack → stores all values.
	◦ minStack → stores the minimum value at each step.
• On push(val):
	◦ Push val onto stack.
	◦ Push the smaller of val and the current top of minStack onto minStack.
• On pop():
	◦ Pop from both stack and minStack.
• On top():
	◦ Return the top element of stack.
• On getMin():
	◦ Return the top element of minStack.
• All operations run in O(1) time.
• Space complexity: O(n) because we store an extra stack of minimums.

Start
  ↓
Initialize stack and minStack
  ↓
push(val):
  stack.push(val)
  if minStack empty OR val <= minStack.top:
    minStack.push(val)
  else:
    minStack.push(minStack.top)
  ↓
pop():
  stack.pop()
  minStack.pop()
  ↓
top():
  return stack.top
  ↓
getMin():
  return minStack.top
  ↓
End
