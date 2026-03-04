// Time Complexity is O(n)

const isValidPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let i = 0;
    let j = str.length - 1;

    while(i < j) {
        if(str[i] !== str[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
}

console.log(isValidPalindrome('A man, a plan, a canal: Panama'));