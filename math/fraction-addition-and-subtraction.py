import re

class Solution:
    def gcd(a,b):
        while b != 0:
            a,b = b, a % b
        return a

    def lcm(a,b):
        return abs(a * b) // gcd(a,b)

    def fractionAddition(self, expression: str) -> str:
         # Use regex to find all fractions in the expression
        fractions = re.findall(r'[+-]?\d+/\d+', expression)
        
        # Initialize numerator and denominator for the result
        result_numerator = 0
        result_denominator = 1
        
        for frac in fractions:
            # Split the fraction into numerator and denominator
            numerator, denominator = map(int, frac.split('/'))
            
            # Find the least common denominator (LCD) for the fractions
            new_denominator = lcm(result_denominator, denominator)
            
            # Update the result numerator and denominator
            result_numerator = result_numerator * (new_denominator // result_denominator) + numerator * (new_denominator // denominator)
            result_denominator = new_denominator
        
        # Simplify the result by dividing by the GCD
        common_divisor = gcd(abs(result_numerator), result_denominator)
        result_numerator //= common_divisor
        result_denominator //= common_divisor
        
        # Handle special case if result numerator is 0
        if result_numerator == 0:
            return "0/1"
        
        return f"{result_numerator}/{result_denominator}"