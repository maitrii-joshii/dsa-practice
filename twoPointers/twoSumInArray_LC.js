// Time Complexity is O(n)

const twoSum = (arr, tar) => {

    if(arr.length < 2) {
        return 'Array should have atleast 2 elements';
    }

    let i = 0;
    let j = arr.length - 1;
    let ans = [];

    while(i < j) {
        let sum = arr[i] + arr[j];

        if(sum > tar) {
            j--;
        } else if(sum < tar) {
            i++;
        } else {
            ans.push(i);
            ans.push(j);
            break;
        }
    }

    return ans;
}

console.log(twoSum([7, 5, 12, 14, 18, 30, 32, 50], 50));