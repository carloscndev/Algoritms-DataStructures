def is_anagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    letters: dict[str, int] = {}

    for letter in s:
        letters[letter] = letters.get(letter, 0) + 1

    for letter in t:
        if letter in letters:
            letters[letter] = letters.get(letter, 0) - 1

        else:
            return False

    for letter in letters:
        if letters[letter] != 0:
            return False

    return True

if __name__ == '__main__':
    str1 = 'anagram'
    str2 = 'nagaram'
    str3 = 'rat'

    result1 = is_anagram(str1, str2)
    result2 = is_anagram(str1, str3)

    print(f'result 1: {result1}')
    print(f'result 2: {result2}')
