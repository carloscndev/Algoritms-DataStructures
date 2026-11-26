from collections import defaultdict

def groupAnagrams(strs: list[str]) -> list[list[str]]:
    word_keys = defaultdict(list)

    for word in strs:
        key = ''.join(sorted(word))
        word_keys[key].append(word)

    return list(word_keys.values())


if __name__ == '__main__':
    test_words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
    result = groupAnagrams(test_words)
    print(f'result: {result}')
