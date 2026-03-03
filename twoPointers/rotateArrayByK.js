// Time Complexity is O(n)

const rotateArrayByK = (arr, k) => {
    let n = arr.length;
    k = k % arr.length;

    if(arr.length < 2) {
        return 'Array should have atleast 2 elements';
    }

    const reverseArray = (arr, s, e) => {
        let i = s;
        let j = e;

        while(i < j) {
            let temp;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    reverseArray(arr, 0, n - 1);
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, n - 1);

    return arr;
}

console.log(rotateArrayByK([2, 4, 6, 8, 10], 3));