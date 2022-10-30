# Median-of-Two-Sorted-Arrays
JavaScript solution to LeetCode question with runtime of 115ms and memory usage of 46.7MB. 

## Description

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

__Example 1:__

```javascript
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

__Example 2:__

```javascript
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

Constraints:

1. nums1.length == m
2. nums2.length == n
3. 0 <= m <= 1000
4. 0 <= n <= 1000
5. 1 <= m + n <= 2000
6. -106 <= nums1[i], nums2[i] <= 106
