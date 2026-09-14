/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 dummy -> 1 -> 

 [, [1,node], [2,node], [4,node]]
 */
var mergeKLists = function(lists) {
    const minHeap = new PriorityQueue((a,b) => a[0] - b[0]);
    const dummy = new ListNode(0)
    for (const l of lists) {
        minHeap.enqueue([l.val,l])
    }
    let curr = dummy;
    while (!minHeap.isEmpty()) {
        const [_, node] = minHeap.dequeue();
        curr.next = node;
        curr = curr.next
        if (node.next) {
            minHeap.enqueue([node.val,node])
        }
    }

    return dummy.next;
    
};