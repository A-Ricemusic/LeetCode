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
 * @return {number}
    
 */
var widthOfBinaryTree = function(root) {
    if (!root) return 0

    res = 0
    const q = [];
    let head = 0;
    q.push([root, 0])

    while (q.length - head > 0) {
        const size = q.length - head;
        const firstIdx  = q[head][1]
        let lastIdx = 0;
        for (let i = 0; i < size; i++) {
            const [n2, originalIdx] = q[head++];
            const idx = originalIdx - firstIdx
            lastIdx = idx
            if (n2.left) {
                q.push([n2.left, 2 * idx])
            }
            if (n2.right) {
                q.push([n2.right, 2 * idx + 1])
            }
        }
        res = Math.max(res, lastIdx + 1)
    }

    return res
    
};