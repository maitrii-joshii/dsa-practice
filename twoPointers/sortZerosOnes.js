// Time Complexity is O(n)

const sortZerosOnes = (arr) => {

    if(arr.length < 2) {
        return 'Array should have atleast 2 elements';
    }

    let i = 0;
    let j = 0;
    let n = arr.length;

    while(i < n) {
        let temp;

        if(arr[i] == 0) {
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

console.log(sortZerosOnes([0, 1, 0, 1, 1, 0, 0, 1]));