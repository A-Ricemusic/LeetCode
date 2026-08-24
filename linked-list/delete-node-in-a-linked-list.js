/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let prev = node
    let curr = node.next
    while (curr) {
        prev.val = curr.val
        if (!curr.next) {
            prev.next = null
            break
        }
        prev = curr
        curr = curr.next

    }
};