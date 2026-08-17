/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {

    if (!root) return 0;
    
    let queue: TreeNode[] = [root]
    let count: number = 0;

    while (queue.length > 0) {
        count++;
        let currentSize: number = queue.length;
        for (let i = 0; i < currentSize; i++) {
            let currentNode: TreeNode = queue.shift();
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
    }


    return count;
    
};