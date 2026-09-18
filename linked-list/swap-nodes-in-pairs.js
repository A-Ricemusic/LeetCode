/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) return head;
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let n1 = head;
    let n2 = head.next;

    while (n1 && n2) {
        const nxt = n2.next;
        prev.next = n2;
        n2.next = n1;
        n1.next = nxt
        prev = n1
        n1 = nxt;
        n2 = n1 === null? null : n1.next;
    }
    return dummy.next;
};