/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
    if (root === null) {
        return root;
    }

    let leftMost: _Node = root;

    while (leftMost.left) {
        let current: _Node = leftMost;

        while (current) {
            current.left.next = current.right;

            if (current.next) {
                current.right.next = current.next.left;
            }
            current = current.next;
        }
        leftMost = leftMost.left;
    }
    return root;
};