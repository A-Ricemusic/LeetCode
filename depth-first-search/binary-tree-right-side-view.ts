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

function rightSideView(root: TreeNode | null): number[] {


    let queue : TreeNode[] = [root];
    let result : number[] = [];

    if (!root) {
        return result;
    }

    while (queue.length > 0) {
        let levelSize: number = queue.length;
        let rightMostNodeVal: number | undefined;

        for (let i : number = 0; i < levelSize; i++) {
            let currentNode : TreeNode = queue.shift()!;

            rightMostNodeVal = currentNode.val;

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        if (rightMostNodeVal !== undefined) {
            result.push(rightMostNodeVal);
        }
    }
    return result;
};