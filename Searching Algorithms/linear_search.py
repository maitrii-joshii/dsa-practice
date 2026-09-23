# Time Complexity is O(n)

def linearSearch(arr, k):
    for i in range(len(arr)):
        if arr[i] == k:
            return i

    return -1            

result = linearSearch([23, 5, 78, 12, 56, 9, 1, 67, 34, 88, 45, 3], 3)
print(f'The index of the target element is: {result}')