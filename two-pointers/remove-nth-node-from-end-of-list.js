/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    const reverseList = (node) => {
        let prev = null
        let curr = node;
        while (curr) {
            const tmp = curr.next;
            curr.next = prev
            prev = curr;
            curr = tmp;
        }
        return prev;
    }

    let nodeToRemove = reverseList(head);
    let count = 1;
    while (count < n) {
        nodeToRemove = nodeToRemove.next;
        count++;
    }
    const prev = nodeToRemove.next;
    reverseList(head);
    const next =  nodeToRemove.next
    prev.next = next;
    nodeToRemove.next = null;
    return dummy.next;
    
};