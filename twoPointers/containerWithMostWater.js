// Time Complexity is O(n)

const containerWithMostWater = (arr) => {

    if(arr.length < 2) {
        return 'Array should have atleast 2 elements';
    }

    let i = 0;
    let j = arr.length - 1;
    let mostWater = 0;

    while(i < j) {
        let height = Math.min(arr[i], arr[j]);
        let width = j - i;
        let currentWater = height * width;
        mostWater = Math.max(mostWater, currentWater);

        if(arr[i] > arr[j]) {
            j--;
        } else {
            i++;
        }
    }

    return mostWater;
}

console.log(containerWithMostWater([7, 5, 12, 14, 18, 30, 32, 50]));