function topKFrequent(nums: number[], k: number): number[] {
  const freqMap: { [key: number]: number } = {};
  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

 const buckets: number[][] = Array(nums.length + 1).fill(null).map(() => []);
  for (let num in freqMap) {
      const freq = freqMap[num];
    buckets[freq].push(Number(num));
  }

  const result: number[] = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }

  return result.slice(0, k);
}

const testNums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(testNums, k));