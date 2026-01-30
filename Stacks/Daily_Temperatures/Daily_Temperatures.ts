function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const result: number[] = new Array(n).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex: number = stack.pop()!;
      result[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return result;
}

const test1 = [73, 74, 75, 71, 69, 72, 76, 73];
const test2 = [30, 40, 50, 60];
const test3 = [30, 60, 90];

console.log(dailyTemperatures(test1)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures(test2)); // Output: [1, 1, 1, 0]
console.log(dailyTemperatures(test3)); // Output: [1, 1, 0]
