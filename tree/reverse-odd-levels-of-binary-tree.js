/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 
n = number of nodes in the tree
 time: o(n)
 space: o(n)
 */
var reverseOddLevels = function(root) {
    const dfs = (left, right, level) => {
        if (!left || !right) {
            return 
        }
        if (level % 2 === 1) {
            [left.val, right.val] = [right.val, left.val]
        }

        dfs(left.left,right.right, level + 1)
        dfs(right.left, left.right, level + 1)
    }

    dfs(root.left, root.right, 1)
    return root
};