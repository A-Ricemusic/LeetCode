/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const hashMap = new Map();
    const hasPar = new Set();

    for (const [par, child, isLeft] of descriptions) {
        if (!hashMap.has(par)) {
            hashMap.set(par, new TreeNode(par));
        }
        if (!hashMap.has(child)) {
            hashMap.set(child, new TreeNode(child));
        }
        const parNode = hashMap.get(par);
        const childNode = hashMap.get(child);
        if (isLeft === 1) {
            parNode.left = childNode;
        } else {
            parNode.right = childNode;
        }
        hasPar.add(child);
    }


    for (const [par, child, isLeft] of descriptions) {
        if (!hasPar.has(par)) return hashMap.get(par)
    }
    
};