// Time Complexity is O(n)

const removeDuplicatesFromSortedArray = (arr) => {

    if(arr.length < 2) {
        return 'Array should have atleast 2 elements';
    }

    let j = 0;
    let n = arr.length;

    for(let i = 0; i < n; i++) {
        if(arr[i] > arr[j]) {
            j+= 1;
            arr[j] = arr[i];
        }
    }

    return j + 1;
}

console.log(removeDuplicatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));