// Time Complexity is O(N²)

const bubbleSort = (arr) => {
    let n = arr.length;

    if(n <= 1) {
        return arr;
    } else {
        for(let itt = 0; itt < n - 1; itt++) {
            for(let j = 0; j < n - itt - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    let temp;
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    return arr;
};

console.log('Unsorted Array: ', [2.5, 1.1, -3.7, 0.0, 2.4]);
console.log('Sorted Array', bubbleSort([2.5, 1.1, -3.7, 0.0, 2.4]));

// Arrays:
// 1. []
// 2. [5]
// 3. [2, 5]
// 4. [5, 4, 3, 2, 1]
// 5. [3, 3, 3, 3]
// 6. [-3.7, 0.0, 1.1, 2.4, 2.5]
