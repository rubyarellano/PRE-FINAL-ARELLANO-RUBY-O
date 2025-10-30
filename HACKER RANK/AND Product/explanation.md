I created this function to find the bitwise AND of all numbers between a and b.
It works by shifting both numbers to the right until they become equal, counting each shift.
This removes the bits that would become zero in the final result.
Once the numbers are the same, I shift the value back to the left to restore its original position.
The final output represents the common leftmost bits shared by all numbers in the range.