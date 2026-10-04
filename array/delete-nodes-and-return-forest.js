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
 * @param {number[]} to_delete
 * @return {TreeNode[]} 
 
 {
 1: node
 
 }

 time: O(n)
 space: O(n)
 */
var delNodes = function(root, to_delete) {
    if (!root) return [];
    const setToDelete = new Set([...to_delete]);
    const res = new Map();
    res.set(root.val, root);
    const dfs = (node, par) => {
        if (!node) return;
        const leftNode = node.left;
        const rightNode = node.right
        if (setToDelete.has(node.val)) {
            if (res.has(node.val)) {
                res.delete(node.val);
            }
            if (node.left) {
                res.set(leftNode.val, leftNode);
            };
            if (node.right) {
                res.set(rightNode.val, rightNode);
            }
            if (par) {
                if (par.left === node) {
                    par.left = null;
                } else if(par.right === node) {
                    par.right = null;
                }
            }
        }
        dfs(leftNode,node);
        dfs(rightNode,node);
    };

    dfs(root, null) ;

    return [...res.values()]    
};