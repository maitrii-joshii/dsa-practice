# Time Complexity is O(nlogn)

def merge_sorted_arrays(arr1, arr2):
    n1 = len(arr1)
    n2 = len(arr2)
    ans_arr = [0] * (n1 + n2)
    i = 0
    j = 0
    k = 0

    while i < n1 and j < n2:
        if arr1[i] > arr2[j]:
            ans_arr[k] = arr2[j]
            k += 1
            j += 1
        else:
            ans_arr[k] = arr1[i]
            k += 1
            i += 1

    while i < n1:
        ans_arr[k] = arr1[i]
        k += 1
        i += 1

    while j < n2:
        ans_arr[k] = arr2[j]
        k += 1
        j += 1  

    return ans_arr

def merge_sort_helper(arr, s, e):
    if s == e:
        return [arr[s]]
    else:
        mid = (s + e) // 2
        lsa = merge_sort_helper(arr, s, mid)
        rsa = merge_sort_helper(arr, mid + 1, e)
        result_arr = merge_sorted_arrays(lsa, rsa)

    return result_arr      

def merge_sort(arr):
    n = len(arr)

    return merge_sort_helper(arr, 0, n - 1)                    


result = merge_sort([23, 5, 78, 12, 56, 9, 1, 67, 34, 88, 45, 3])

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