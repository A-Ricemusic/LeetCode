/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const less = [];
    const greater = [];
    const dummy = new ListNode(0);
    let curr = head;
   
    while (curr) {
        if (curr.val < x) {
            less.push(curr);
        } else {
            greater.push(curr);
        }
        curr = curr.next;
    };


    curr = dummy;
    for (const node of less) {
        curr.next = node;
        curr = node;
    }

    for (const node of greater) {
        curr.next = node;
        curr = node;
    }
    curr.next = null;

    return dummy.next;
    
};