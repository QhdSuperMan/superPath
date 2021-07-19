'''
Author: your name
Date: 2021-06-29 22:34:00
LastEditTime: 2021-07-12 16:56:18
LastEditors: 吴玉荣
Description: In User Settings Edit
FilePath: \albb\python\class\class.py
'''

class Solution:
    def hIndex(self, citations):
        n = len(citations)
        left = 0; right = n - 1
        while left <= right:
            mid = left + (right - left) // 2
            if citations[mid] >= n - mid:
                right = mid - 1
            else:
                left = mid + 1
        return n - left

print(Solution().hIndex([0,1,3,5,6]))

