def productExceptSelf(nums: list[int]) -> list[int]:
  n = len(nums)
  prefix = [1] * n
  suffix = [1] * n
  res = [1] * n

  for i in range(1, n):
    prefix[i] = prefix[i - 1] * nums[i - 1]

  for i in range(n - 2, -1, -1):
    suffix[i] = suffix[i + 1] * nums[i + 1]

  for i in range(n):
    res[i] = prefix[i] * suffix[i]

  return res

if __name__ == '__main__':
  nums = [1, 2, 3, 4]
  result = productExceptSelf(nums)
  print(f'result: {result}')
