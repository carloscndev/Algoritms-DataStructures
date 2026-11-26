def encode(strs: list[str]) -> str:
    encoded_parts = []
    for value in strs:
        encoded_parts.append(f"{len(value)}#{value}")
    return "".join(encoded_parts)

def decode(data: str) -> list[str]:
    result = []
    i = 0

    while i < len(data):
        j = i
        while data[j] != "#":
            j += 1
        length = int(data[i:j])
        value_start = j + 1
        result.append(data[value_start:value_start + length])
        i = value_start + length

    return result

if __name__ == "__main__":
    strings = ['hello', 'world', 'Python', 'is', 'awesome']
    encoded_str = encode(strings)
    decode_str = decode(encoded_str)
    print(f'encoded: {encoded_str}')
    print(f'decoded: {decode_str}')
