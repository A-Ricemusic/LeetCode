from math import gcd

class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        def gcd(a,b):
            while b:
                a,b = b, a % b
            return a
        
        gcd_length = gcd(len(str1), len(str2))

        candidate = str1[:gcd_length]

        if str1 == candidate * (len(str1) // gcd_length) and str2 == candidate * (len(str2) // gcd_length):
            return candidate
        return ''
        
        