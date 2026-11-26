def longest_consecutive_sequence(nums: list[int]) -> int:
    nums_set = set(nums)
    longest = 0

    for num in nums_set:
        if num - 1 not in nums_set:
            current_num = num
            current_streak = 1

            while current_num + 1 in nums_set:
                current_num += 1
                current_streak += 1

            longest = max(longest, current_streak)

    return longest


if __name__ == "__main__":
    test1 = [100, 4, 200, 1, 3, 2]
    test2 = [0, -1, 1, 2, -2, 3]
    test3 = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]

    result1 = longest_consecutive_sequence(test1)
    result2 = longest_consecutive_sequence(test2)
    result3 = longest_consecutive_sequence(test3)

    print(f"result 1: {result1}")
    print(f"result 2: {result2}")
    print(f"result 3: {result3}")
