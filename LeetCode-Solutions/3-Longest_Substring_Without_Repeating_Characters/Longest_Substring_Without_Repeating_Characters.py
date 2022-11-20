# Given a string s, find the length of the longest 
# substring
#  without repeating characters.


# Example 1:

# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

# Example 2:

# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.

# Example 3:

# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

# Constraints:

# 0 <= s.length <= 5 * 104
# s consists of English letters, digits, symbols and spaces.

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

# we make a dictionary to store the substrings, and three variables for
# Current substring, Current length of the substring and the longest substring we got
        sub = {}
        currentSubStart = 0
        currentLength = 0
        LongestSub = 0

#Looping through every index and getting index and the letter
        for i, letter in enumerate(s):

# Checking for duplicates and resetting the starting point when duplicate found
            if letter in sub and sub[letter] >= currentSubStart:
                currentSubStart = sub[letter] + 1
                currentLength = i - sub[letter]
                sub[letter] = i

# if the letter is not seen before we'll add it to the dictionary
            else:
                sub[letter] = i
                currentLength += 1
                if currentLength > LongestSub:
                    LongestSub = currentLength

        return(LongestSub)



