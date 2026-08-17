/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
  // Handle edge cases: empty list or a single-node list
  if (!head || !head.next) {
    return null;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  // --- Phase 1: Find the meeting point inside the cycle ---
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // A cycle is detected, and slow/fast are at the meeting point.
    if (slow === fast) {
      // --- Phase 2: Find the start of the cycle ---
      let ptr1: ListNode | null = head; // Start a new pointer from the head
      let ptr2: ListNode | null = slow; // Keep one pointer at the meeting point

      // Move both pointers one step at a time until they meet.
      // The meeting point is the start of the cycle.
      while (ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
      }
      return ptr1; // or ptr2, they are the same node
    }
  }

  // If the loop finishes, it means fast reached the end, so no cycle.
  return null;
}