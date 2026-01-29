function evalRPN(tokens: string[]): number {
  let stack: number[] = [];
  const operators: string[] = ['+', '-', '*', '/'];
  const operations: { [key: string]: (n1: number, n2: number) => number } = { 
    '+' : (n1: number, n2: number) => n1 + n2,
    '*' : (n1: number, n2: number) => n1 * n2,
    '-' : (n1: number, n2: number) => n1 - n2,
    '/' : (n1: number, n2: number) => Math.trunc(n1 / n2),
  };

  for(let token of tokens){
    if(!(operators.includes(token))) {
      stack.push(Number(token))
    }
    else {
      let num2 = stack.pop() ?? 0;
      let num1 = stack.pop() ?? 0;
      stack.push(operations[token](num1, num2));
    }
  }

  return stack.pop() ?? 0;
}

// Example usage:
const tokens1 = ["2", "1", "+", "3", "*"]; // ((2 + 1) * 3) = 9
const tokens2 = ["4", "13", "5", "/", "+"]; // (4 + (13 / 5)) = 6
const tokens3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]; // 22

console.log(evalRPN(tokens1)); // Output: 9
console.log(evalRPN(tokens2)); // Output: 6
console.log(evalRPN(tokens3)); // Output: 22