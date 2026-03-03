// Time Complexity is O(n²)

const optimizedBubbleSort = (arr) => {

    if(arr.length < 2) {
        return 'Array should have atleast 2 elements';
    }

    let n = arr.length;
    let swapped;

    for(let itt = 0; itt < n - 1; itt++) {
        swapped = false;
        for(let j = 0; j < n - 1 - itt; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp;
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if(!swapped) break;
    }

    return arr;
}

console.log(optimizedBubbleSort([5, 9, 8, 0, 2, 1, -5, -3, 100, 0]));