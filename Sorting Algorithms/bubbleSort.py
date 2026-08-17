# Time Complexity is O(n²)

def bubbleSort(arr):
    for i in range(1, len(arr)):
        swapped = False
        for j in range(len(arr) - i):
            if arr[j] > arr[j + 1]:
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swapped = True
        if swapped == False: break
    return arr                    


result = bubbleSort([23, 5, 78, 12, 56, 9, 1, 67, 34, 88, 45, 3])

print('Array before sorting: ', [23, 5, 78, 12, 56, 9, 1, 67, 34, 88, 45, 3])
print(f'Array after sorting: {result}')

# Test Arrays
# [5, 3, 8, 4, 2],                  Random numbers
# [1, 2, 3, 4, 5],                  Already sorted
# [5, 4, 3, 2, 1],                  Reverse sorted (worst case)
# [4, 2, 5, 2, 1, 4],               Duplicates
# [-3, -1, -7, -4, -2],             Negative numbers
# [10, -5, 3, 0, -8, 7],            Positive & negative
# [2.5, 1.1, 3.8, 0.9],             Decimal numbers
# [5, 2.5, -1.2, 3, 0],             Integers & decimals
# [42],                             Single element
# [],                               Empty array
# [7, 7, 7, 7, 7],                  All same elements
# [999, 1, 500, 1000, -100],        Large values
# [12, 4, 56, 17, 8, 99, 1, 45],    Mixed values
# [3, 1, 2, 3, 1, 2, 3],            Many duplicates
# [23, 5, 78, 12, 56, 9, 1, 67, 34, 88, 45, 3] Larger array