# Given an integer x, return true if x is a 
# palindrome
# , and false otherwise.

 

# Example 1:

# Input: x = 121
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.
# Example 2:

# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
# Example 3:

# Input: x = 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

# Constraints:

# -2^31 <= x <= 2^31 - 1



# Solution1: String Conversion.

class Solution_1:
    def isPalindrome(self, x:int) -> bool:

# convert the numbers to a string and checking if it's equal to the reversed string.
        return(str(x) == str(x)[::-1])

# Solution2: Solving without converting to string

class Solution_2:
    def isPalindrome(self, x:int) -> bool:

# Since the question says if the number is negative the palindrome will be false.

        if x < 0:       
            return(False)
        
        reverse = 0
        digits = 0

# we use floor division of numbers with base 10 to know when to break the loop 
# since it's not a string meaning we can't just get the length of it.

        while(x // (10**digits) != 0):

# we use modulus to reverse the position of each number
            reverse = (reverse * 10) + (x // (10**digits) %10)
            digits +=1

# compare the reversed to the given number, if it's palindrome return=True.
        return(x == reverse)