function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const letters: { [key: string]: number } = {};

    for (let letter of s) {
      if(letter in letters) letters[letter]++;
      else letters[letter] = 1;
    }

    for(const letter of t) {
      if(letter in letters) letters[letter]--;
      else return false;
    }
        
    for(const letter in letters) {
      if(letters[letter] !== 0) return false;
    }

    return true;
}

const str1 = "anagram";
const str2 = "nagaram";
const str3 = "rat";

console.log(isAnagram(str1, str2));
console.log(isAnagram(str1, str3));
console.log(isAnagram(str2, str3));