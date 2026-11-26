def topKElements(nums: list[int], k: int) -> list[int]:
    freqMap: dict[int, int] = {}
    for num in nums:
        freqMap[num] = freqMap.get(num, 0) + 1

    buckets: list[list[int]] = [[] for _ in range(len(nums) + 1)]
    for num, freq in freqMap.items():
        buckets[freq].append(num)

    result: list[int] = []
    for i in range(len(buckets) - 1, -1, -1):
        if len(result) >= k:
            break
        if len(buckets[i]) > 0:
            result.extend(buckets[i])

    return result[:k]

if __name__ == '__main__':
    testNums = [1, 1, 1, 2, 2, 3]
    k = 2
    r = topKElements(testNums, k)
    print(f'result: {r}')
