/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}


    Input: nums = [2,3], head = [1,2,3,4,5]
    nums => set(2,3) 

    tmp = 2
    curr = 2
    prev = 1
   
 */
var modifiedList = function(nums, head) {
    const mySet = new Set(); // new Set([...nums])
    for (const num of nums) {
        mySet.add(num)
    };
    const dummy = new ListNode(0,head);
    let prev = dummy;
    let curr = head;
    while (curr) {
        const tmp = curr.next
        if (mySet.has(curr.val)) {
            prev.next = tmp;
            curr.next = null;
        } else {
            prev = curr;
        }
        curr = tmp;
    }
    return dummy.next
};