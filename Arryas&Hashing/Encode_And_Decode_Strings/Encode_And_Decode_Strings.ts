function encode(strs: string[]): string {
  let encoded = "";
  
  for (let s of strs) {
    encoded += s.length + "#" + s;
  }
  
  return encoded;
}

function decode(str: string): string[] {
  let res = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    
    let length = parseInt(str.substring(i, j));
    let strDecoded = str.substring(j + 1, j + 1 + length);
    res.push(strDecoded);
    
    i = j + 1 + length;
  }

  return res;
}

// Example:
const strings = ["hello", "world", "TypeScript", "is", "awesome"];
const encodedStr = encode(strings);
console.log("Encoded:", encodedStr);

const decodedStrs = decode(encodedStr);
console.log("Decoded:", decodedStrs);
// Output:
// Encoded: 5#hello5#world10#TypeScript2#is7#awesome
// Decoded: [ 'hello', 'world', 'TypeScript', 'is', 'awesome' ]