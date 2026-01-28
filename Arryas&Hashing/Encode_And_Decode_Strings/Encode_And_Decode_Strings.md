# Encode and Decode Strings

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:
```
string encode(vector<string> strs) {
    // ... your code
    return encoded_string;
}
```

Machine 2 (receiver) has the function:
```
vector<string> decode(string s) {
    //... your code
    return strs;
}
```

So Machine 1 does:
```
string encoded_string = encode(strs);
```

and Machine 2 does:
```
vector<string> strs2 = decode(encoded_string);
```

`strs2` in Machine 2 should be the same as `strs` in Machine 1.

Implement the `encode` and `decode` methods.

**Example 1:**
```
Input: dummy_input = ["Hello","World"]

Output: ["Hello","World"]

Explanation:
Machine 1:
Codec encoder = new Codec();
String msg = encoder.encode(strs);
Machine 1 ---msg---> Machine 2

Machine 2:
Codec decoder = new Codec();
String[] strs = decoder.decode(msg);
```
**Example 2:**
```
Input: dummy_input = [""]

Output: [""]
```

***Constraints:**
- `0 <= strs.length < 100`
- `0 <= strs[i].length < 200`
- `strs[i] contains any possible characters out of 256 valid ASCII characters.`

## Solution Overview
We need two functions:
• encode(list of strings → single string)
• decode(single string → list of strings)
The challenge: strings can contain any characters (including spaces, commas, etc.), so we can’t just join them with a delimiter like "," because decoding would break if a string itself contains commas.

The standard trick is to prefix each string with its length, followed by a special marker (like #), then the string itself.
Example:
Input: ["hello", "world"]
Encoded: "5#hello5#world"
Decoded: we read 5, then #, then the next 5 characters → "hello". Repeat.
This works because:
• The length tells us exactly how many characters to read.
• The # separates the length from the content.
• No matter what characters are inside the string, decoding is unambiguous.

Encode:
Start
  ↓
For each string in list:
  - Compute length
  - Append length + '#' + string to result
  ↓
Return concatenated result
  ↓
End

Decode:
Start
  ↓
Initialize empty list
Set index = 0
  ↓
While index < encoded string length:
  - Read characters until '#'
  - Convert to integer → length
  - Read next 'length' characters → actual string
  - Append to list
  - Move index forward
  ↓
Return list of strings
  ↓
End
