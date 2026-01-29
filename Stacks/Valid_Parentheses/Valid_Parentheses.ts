function isValid(s: string) {
  const stack = [];
  const openBrackets = new Set(['(', '[', '{']);
  const matchingBrackets = { ')': '(', ']': '[', '}': '{' };

  for (let char of s) {
    if (openBrackets.has(char)) {
      stack.push(char);
    } else {
      const lastOpen = stack.pop();
      if (lastOpen !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const test1 = "()"; // true
const test2 = "()[]{}"; // true
const test3 = "(]"; // false
const test4 = "([)]"; // false
const test5 = "{[]}"; // true

console.log(isValid(test1));
console.log(isValid(test2));
console.log(isValid(test3));
console.log(isValid(test4));
console.log(isValid(test5));
