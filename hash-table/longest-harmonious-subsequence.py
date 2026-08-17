from collections import Counter

class Solution:
    def findLHS(self, nums: List[int]) -> int:
        # Edge case for empty or single element lists
        if len(nums) == 0 or len(nums) == 1:
            return 0
        
        # Count the frequency of each number
        freq = Counter(nums)
        
        longest_harmonious = 0
        
        # Iterate over the unique numbers in the frequency dictionary
        for num in freq:
            # Check if the next consecutive number exists
            if num + 1 in freq:
                # The length of the harmonious subsequence is the sum of the counts of num and num + 1
                longest_harmonious = max(longest_harmonious, freq[num] + freq[num + 1])
        
        return longest_harmonious

                


        