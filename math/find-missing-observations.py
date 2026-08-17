class Solution:
    def missingRolls(self, rolls: List[int], mean: int, n: int) -> List[int]:
        m = len(rolls)
        total_sum = mean * (n + m)
        
        # Calculate observed sum from the given rolls
        observed_sum = sum(rolls)
        
        # Calculate missing sum
        missing_sum = total_sum - observed_sum
        
        # Check feasibility of the missing_sum
        if missing_sum < n or missing_sum > 6 * n:
            return []  # No valid solution
        
        # Initialize the result array with 1s (minimum possible roll value)
        result = [1] * n
        missing_sum -= n  # Account for the initial sum (n * 1)
        
        # Distribute the remaining sum to each slot without exceeding 6
        for i in range(n):
            add_value = min(5, missing_sum)  # We can add at most 5 more (1 + 5 = 6)
            result[i] += add_value
            missing_sum -= add_value
            if missing_sum == 0:
                break
        
        return result
        
        
            
                

        
        