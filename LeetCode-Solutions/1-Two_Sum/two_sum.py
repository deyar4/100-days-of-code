# Solution 1: Double for loop. Brute Force O(n^2)

class Solution_1:
    def twoSum(self, nums:List[int], target: int) -> List[int]:

        for i in range(len(nums)-1):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    return([i,j])

# Solution 2: Dictionary Storage. O(n)

class Solution_2:
    def twoSum(self, nums:List[int], target: int) -> List[int]:

        checked = {}

        for i, num in enumerate(nums):
            if target - num in checked:
                return([checked[target - num], i])
            elif num not in checked:
                checked[num] = i
