# This exercise is written in Python:
# I used the method For in :
# Define an array with elements 1,2,3,4,5

arr = [1,2,3,4,5]; 

# Initialize a variable to store the sum

sum = 0; 

# Loop through each element in the array
#len means the length of the array

for i in range(0, len(arr)):

# Add the current element to the sum    

    sum = sum + arr[i]; 

# Print the result 
print("Sum of all the elements of an array: " + str(sum)); 

