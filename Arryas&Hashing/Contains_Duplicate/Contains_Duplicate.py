def contains_duplicate(nums: list[int]) -> bool:
  return len(nums) != len(set(nums))

if __name__ == "__main__":
    test_array1 = [1, 2, 3, 4]
    test_array2 = [1, 2, 3, 1]

    r1 = contains_duplicate(test_array1)
    r2 = contains_duplicate(test_array2)

    print("result 1: ", r1)
    print("result 2: ", r2)
