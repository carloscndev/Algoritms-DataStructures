#include<unordered_map>
#include<iostream>
#include<vector>
#include<string>
#include<algorithm>

using namespace std;

class Solution {
    public:
    vector<vector<string>> groupAnagrams(const vector<string>& strs){
        unordered_map<string, vector<string>> wordKeys;
        for(const auto& currentWord: strs){
            string key = currentWord;
            sort(key.begin(), key.end());

            if(wordKeys.find(key) == wordKeys.end()){
                wordKeys[key] = vector<string>{currentWord};
            } else {
                wordKeys[key].push_back(currentWord);
            }
        }

        vector<vector<string>> result;
        for(const auto& pair: wordKeys){
            result.push_back(pair.second);
        }

        return result;
    }
};

int main(){
    Solution sol;
    vector<string> strs = {"eat", "tea", "tan", "ate", "nat", "bat"};

    vector<vector<string>> result = sol.groupAnagrams(strs);
    for (const auto& group : result) {
        cout << "[ ";
        for (const auto& word : group) {
            cout << word << " ";
        }
        cout << "]" << endl;
    }

    return 0;
}
