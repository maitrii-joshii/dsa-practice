// Time Complexity is O(n)

const linearSearch = (arr, k) => {
    let n = arr.length;

    for(let i = 0; i < n; i++) {
        if(arr[i] === k) return i;
    }

    return -1;
}

let result = linearSearch([23, 5, 78, 12, 56, 9, 1, 67, 34, 88, 45, 3], 3);
console.log(`The index of the target element is: ${result}`);