/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 dummy -> 7
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
    const parentMap = new Map()
    const dummy = new ListNode(Infinity)
    parentMap.set(head,dummy)
    dummy.next = head
    let curr = head
    while (curr) {
        while (parentMap.get(curr).val < curr.val) {
            const nodeToRemove = parentMap.get(curr)
            const prev = parentMap.get(nodeToRemove)
            prev.next = curr;
            nodeToRemove.next = null;
            parentMap.set(curr,prev)
        }
        if (curr.next) parentMap.set(curr.next, curr)
        curr = curr.next
    }

    return dummy.next
    
};