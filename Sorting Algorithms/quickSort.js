// Time Complexity is O(nlogn)

const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const arrayPartition = (arr, s, e, pe) => {
    let i = s;
    let j = s;

    while(i <= e) {
        if(arr[i] <= pe) {
            swap(arr, i, j);
            i++;
            j++;
        } else i++;
    }

    return j - 1;
};

const quickSortHelper = (arr, s, e) => {
    if(s > e) {
        return;
    } 
    let pe = arr[e];
    let pi = arrayPartition(arr, s, e, pe);
    quickSortHelper(arr, s, pi - 1);
        quickSortHelper(arr, pi + 1, e);
};

const quickSort = (arr) => {
    let n = arr.length;
    
    quickSortHelper(arr, 0, n - 1);
};

let arr = [23, 5, 78, 12, 56, 9, 1, 67, 34, 88, 45, 3];
console.log('Array before sorting:');
console.log(arr);
quickSort(arr);
console.log('Array after sorting:');
console.log(arr);

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