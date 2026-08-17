class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        for char in s:
            if char == ']':
                # Get the encoded string
                decoded_string = ""
                while stack[-1] != '[':
                    decoded_string += stack.pop()
                decoded_string = decoded_string[::-1]  # Reverse the string to correct the order

                # Pop '[' from stack
                stack.pop()

                # Get the number k
                k = 0
                base = 1
                while stack and stack[-1].isdigit():
                    k += (ord(stack.pop()) - ord('0')) * base
                    base *= 10

                # Decode k[decoded_string], by pushing decoded_string k times into stack
                for _ in range(k):
                    for char in decoded_string:
                        stack.append(char)
            else:
                # Push the current character to stack
                stack.append(char)

        # Get the result from stack
        result = "".join(stack)
        return result
