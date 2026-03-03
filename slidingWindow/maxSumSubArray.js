// Time Complexity is O(n)

const maxSumSubArray = (arr, k) => {

    if(arr.length < 2) {
        return 'Array should have atleast 2 elements';
    }

    let maxSum = 0;
    let currSum = 0;
    let n = arr.length;

    for(let i = 0; i < k; i++) {
        currSum += arr[i];
    }

    maxSum = currSum;

    for(let i = k; i < n; i++) {
        currSum = currSum + arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

console.log(maxSumSubArray([7, 8, 10, 0, 1, 0, 5, 1, 6, 0, 15], 4));