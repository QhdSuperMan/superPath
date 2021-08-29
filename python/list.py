'''
Author: 吴玉荣
LastEditors: 吴玉荣
Date: 2021-08-03 11:48:05
LastEditTime: 2021-08-03 12:00:35
info: 描述
'''
class Solution:
    def findUnsortedSubarray(self, nums) -> int:
        sortList = list(nums);
        sortList.sort();
        i = 0;
        n = len(sortList);
        j = n - 1;
        while (i < n and sortList[i] == nums[i]):
          i = i + 1
        while (j > i and sortList[j] == nums[j]):
          j = j - 1
        return j - i + 1;

aaa = Solution()

aaa.findUnsortedSubarray([2,6,4,8,10,9,5,15])