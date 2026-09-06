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

    //d -> 1 -> 2 -> 3 -> 4 -> 5
    const dummy = new ListNode(0);
    dummy.next = head;

    const reverseList = (node,prev) => {
        let curr = node;
        while (curr) {
            const tmp = curr.next;
            curr.next = prev
            prev = curr;
            curr = tmp;
        }
        return prev;
    }

    let tail = reverseList(head, dummy);
    let nodeToRemove = tail;
    let count = 1;
    while (count < n) {
        nodeToRemove = nodeToRemove.next;
        count++;
    }
    const prev = nodeToRemove.next;
    reverseList(tail, null);
    const next =  nodeToRemove.next
    prev.next = next;
    nodeToRemove.next = null;
    return dummy.next;
    
};