function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const prefix = new Array(n).fill(1);
  const suffix = new Array(n).fill(1);
  const res = new Array(n);

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }
  
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    res[i] = prefix[i] * suffix[i];
  }

  return res; 
}

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]