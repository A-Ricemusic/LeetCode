/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1: number = m - 1;
    let p2: number = n - 1;
    for (let p3 = n + m - 1; p3 >= -1; p3--) {
        if (p2 === -1) {
            break;
        }
        if (nums1[p1] > nums2[p2] && p1 >= 0) {
            nums1[p3] = nums1[p1]
            p1--;
        } else {
            nums1[p3] = nums2[p2]
            p2--;
        }
    }

    
};