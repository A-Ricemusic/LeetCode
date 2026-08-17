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

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    let result: number = 0;
    let queue: TreeNode[] = [];
    queue.push(root);

    while (queue.length > 0) {
        let currentNode = queue.shift();
        if  (currentNode.left === null && currentNode.right === null) {
            continue;
        }
        if (currentNode.left !== null) {
            let tempNode: TreeNode = currentNode.left;
            if (tempNode.left === null && tempNode.right === null) {
                result = result + tempNode.val
            }
        }

        if (currentNode.left !== null) {
            queue.push(currentNode.left)
        }

        if (currentNode.right !== null) {
            queue.push(currentNode.right)
        }
    }
    return result;
};