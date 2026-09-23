# Time Complexity is O(nlogn)

def swap(arr, i, j):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

def array_partition(arr, s, e, pe):
    i = s
    j = s

    while(i <= e):
        if(arr[i] <= pe):
            swap(arr, i, j)
            i+= 1
            j+= 1
        else:
            i+= 1

    return j - 1

def quick_sort_helper(arr, s, e):
    if(s > e):
        return
    pe = arr[e]
    pi = array_partition(arr, s, e, pe)
    quick_sort_helper(arr, s, pi - 1)
    quick_sort_helper(arr, pi + 1, e)

def quick_sort(arr):
    n = len(arr)

    quick_sort_helper(arr, 0, n - 1)

arr = [23, 5, 78, 12, 56, 9, 1, 67, 34, 88, 45, 3]
print('Array before sorting:')
print(arr)
quick_sort(arr)
print('Array after sorting:')
print(arr)

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