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
 n = number of nodes in linked list
 m = number of elements in nums array
 time: o(n)
 space: o(m)
 */
var modifiedList = function(nums, head) {
    const mySet = new Set([...nums])
    
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