// Time Complexity is O(nlogn)

const mergeSortedArrays = (arr1, arr2) => {
    let n1 = arr1.length;
    let n2 = arr2.length;
    let ansArr = new Array(n1 + n2);

    let i = 0;
    let j = 0;
    let k = 0;

    while(i < n1 && j < n2) {
        if(arr1[i] > arr2[j]) {
            ansArr[k++] = arr2[j++];
        } else {
            ansArr[k++] = arr1[i++];
        }
    }

    while(i < n1) ansArr[k++] = arr1[i++];
    while(j < n2) ansArr[k++] = arr2[j++];

    return ansArr;
};

const mergeSortHelper = (arr, s, e) => {
    if(s == e) {
        return [arr[s]];
    } else {
        let mid = Math.floor((s + e) / 2);
        let lsarr = mergeSortHelper(arr, s, mid);
        let rsarr = mergeSortHelper(arr, mid + 1, e);
        resultArr = mergeSortedArrays(lsarr, rsarr);
        return resultArr;
    }
};

const mergeSort = (arr) => {
    let n = arr.length;
    
    return mergeSortHelper(arr, 0, n - 1);
};

let result = mergeSort([23, 5, 78, 12, 56, 9, 1, 67, 34, 88, 45, 3]);

console.log('Array before sorting: ', [23, 5, 78, 12, 56, 9, 1, 67, 34, 88, 45, 3]);
console.log('Array after sorting: ', result);

// Test Arrays
// [5, 3, 8, 4, 2],                  // Random numbers
// [1, 2, 3, 4, 5],                  // Already sorted
// [5, 4, 3, 2, 1],                  // Reverse sorted (worst case)
// [4, 2, 5, 2, 1, 4],               // Duplicates
// [-3, -1, -7, -4, -2],             // Negative numbers
// [10, -5, 3, 0, -8, 7],            // Positive & negative
// [2.5, 1.1, 3.8, 0.9],             // Decimal numbers
// [5, 2.5, -1.2, 3, 0],             // Integers & decimals
// [42],                             // Single element
// [],                               // Empty array
// [7, 7, 7, 7, 7],                  // All same elements
// [999, 1, 500, 1000, -100],        // Large values
// [12, 4, 56, 17, 8, 99, 1, 45],    // Mixed values
// [3, 1, 2, 3, 1, 2, 3],            // Many duplicates
// [23, 5, 78, 12, 56, 9, 1, 67, 34, 88, 45, 3] // Larger array