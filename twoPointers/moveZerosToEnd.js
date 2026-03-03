// Time Complexity is O(n)

const moveZerosToEnd = (arr) => {

    if(arr.length < 2) {
        return 'Array should have atleast 2 elements';
    }

    let i = 0;
    let j = 0;
    let n = arr.length;

    while(i < n) {
        let temp;

        if(arr[i] !== 0) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j++;
        } else {
            i++;
        }
    }

    return arr;
}

console.log(moveZerosToEnd([7, 8, 10, 0, 1, 0, 5, 1, 6, 0, 15]));