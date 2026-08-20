/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return mergeSort(nums,0, nums.length - 1)
    
};

/* 

 nums = [5,2,3,1]
     [5,2]. [3, 1]
    [5] [2] [3] [1]


*/

const mergeSort = function(nums,s,e) {
        if (e - s + 1 <= 1) return nums;
        const m = Math.floor(s + (e - s) / 2)
        mergeSort(nums,s,m)
        mergeSort(nums,m + 1, e)
        merge(nums,s,m,e)
        return nums
}


const merge = function(nums,s,m,e) {
    const L = nums.slice(s, m + 1);
    const R = nums.slice(m + 1, e + 1);
    let i = 0;
    let j = 0;
    let k = s;

    while (i < L.length && j < R.length) {
        if (L[i] < R[j]) {
            nums[k] = L[i];
            i++;
        } else {
            nums[k] = R[j];
            j++;
        }
        k++;
    }


    while (i < L.length) {
        nums[k] = L[i];
        i++;
        k++;
    }

    while (j < R.length) {
        nums[k] = R[j];
        j++;
        k++;
    }
}