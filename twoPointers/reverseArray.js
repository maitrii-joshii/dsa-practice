// Time Complexity is O(n)

const reverseArray = (arr) => {

    if(arr.length < 2) {
        return 'Array should have atleast 2 elements';
    }

    let i = 0;
    let j = arr.length - 1;

    while(i < j) {
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    return arr;
}

console.log(reverseArray([5, 9, 8, 0, 2, 1, -5, -3, 100, 0]));