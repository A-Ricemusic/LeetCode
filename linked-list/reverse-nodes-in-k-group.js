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
var reverseKGroup = function(head, k) {
    let revCount = 0;
    const dummy = new ListNode(0);
    let prev = dummy;
    let curr = head;
    let last = head;
    let count = 1;

    while (curr) {
        const next = curr.next;
        if (count === k) {
            reverseList(last, curr);
            prev.next = curr;
            prev = last;
            revCount++;
            count = 0;
            last = next;
        }
        count++;
        curr = next;
    }
    prev.next = last

    return revCount >= 1? dummy.next : head;
    
};

const reverseList = function(last, curr) {
    let prev = null;
    while (prev !== curr) {
        const nxt = last.next
        last.next = prev;
        prev = last
        last = nxt;
    }
}