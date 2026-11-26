def twoSum(nums: list[int], target: int) -> list[int]:
    seen: dict[int, int] = {}

    for idx, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], idx]

        seen[num] = idx

    return []

if __name__ == '__main__':
    testNums = [2, 7, 11, 15];
    testTarget = 9;
    result = twoSum(testNums, testTarget)
    print(f'result: {result}')
