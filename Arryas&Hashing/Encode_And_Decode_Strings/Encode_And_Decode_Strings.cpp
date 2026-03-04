#include<iostream>
#include<string>
#include<vector>

using namespace std;

class Solution {
    public:
    string encode(const vector<string>& strs) {
        string encoded = "";

        for(const auto& word: strs){
            encoded += to_string(word.size()) + "#" + word;
        }

        return encoded;
    }

    public:
    vector<string> decode(string str){
        vector<string> decoded;
        int i=0;

        while(i<str.size()){
            int j = i;
            while(str[j] != '#'){
                j++;
            }

            int len = stoi(str.substr(i,j));
            string strDecoded = str.substr(j + 1, len);
            decoded.push_back(strDecoded);

            i = j + 1 + len;
        }

        return decoded;
    }
};

int main(){
    Solution sol;

    vector<string> test = {"hello", "world", "c++", "is", "awesome"};
    string enc = sol.encode(test);
    vector<string> dec = sol.decode(enc);

    cout << "encoded:" << enc << endl;

    cout << "decoded:" << endl;
    for(const auto& word: dec){
        cout << word << endl;
    }

    return 0;
}
