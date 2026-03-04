#include<unordered_set>
#include<vector>
#include<iostream>

using namespace std;

class Solution {
  public:
    bool containsDuplicate(const vector<int>& nums) {
      unordered_set<int> numSet(nums.begin(), nums.end());
      return numSet.size() != nums.size();  
    }
};


//Example usage
int main() {
    Solution sol;
    vector<int> nums = {1, 2, 3, 1};
    vector<int> nums2 = {1, 2, 3, 4};
    
    bool result1 = sol.containsDuplicate(nums);
    bool result2 = sol.containsDuplicate(nums2);

    cout << (result1 ? "true" : "false") << endl; // Output: true
    cout << (result2 ? "true" : "false") << endl; // Output: false
    
    return 0;
}