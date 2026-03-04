// Time Complexity is O(n)

const sortColors = (arr) => {

    if(arr.length < 2) {
        return 'Array should have atleast 2 elements';
    }

    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while(mid <= high) {
        let temp;

        if(arr[mid] == 0) {
            temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        } else if(arr[mid] == 1) {
            mid++;
        } else {
            temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }

    return arr;
}


console.log(sortColors([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));