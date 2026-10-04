/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k === 0) return head
    let l = 0;
    let curr = head;
    while (curr !== null) {
        tail = curr;
        curr = curr.next;
        l++;
    }
    tail.next = head;

    k = k % l;
    let cnt = 0;
    curr = head;

    while (cnt < l - k - 1) {
        curr = curr.next
        cnt++;
    }
    const nxt = curr.next;
    curr.next = null;
    return nxt
};