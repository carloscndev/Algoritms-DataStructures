function groupAnagrams(strs: string[]): string[][] {
    const wordKeys: { [key: string]: string[] } = {};
    
    for(let currentWord of strs) {
        const key = currentWord.split('').sort().join();
        if(!(key in wordKeys)) wordKeys[key] = [];

        wordKeys[key].push(currentWord)
    }

    return Object.values(wordKeys);
}

const testWords = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(testWords));