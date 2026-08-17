/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.

 */
var reorderList = function(head) {
    let mid = head
    let fast = head
    while (fast && fast.next) {
        mid = mid.next
        fast = fast.next.next
    }
    let tail = null
    while (mid) {
        const tmp = mid.next
        mid.next = tail
        tail = mid
        mid = tmp
    }

    let l = head
    let r = tail

    while (l !== r) {
        let tmp = l.next
        l.next = r
        l = tmp
        if (l === r) break
        tmp = r.next
        r.next = l
        r = tmp
    }

    return head
};