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
 level
 */
var reverseOddLevels = function(root) {
    const levels = [];
    let q = [root];
    let head = 0;
    // levels = []
    while (q.length - head > 0) {
        const size = q.length - head;
        const arr = []
        for (let i = 0; i < size; i++) {
            const node = q[head++];
            arr.push(node.val)
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        levels.push(arr)
    }

    q = [root];
    head = 0;
    let level = 0;

    while (q.length - head > 0) {
        const size = q.length - head;
        const isOdd = level % 2 === 1;
        const isLeft = true

        for (let i = 0; i < size; i++) {
            const node = q[head++];
            if (isOdd) {
                const arr2 = levels[level]
                const value = arr2[arr2.length - 1 - i]
                node.val = value
            }
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        level++;
    }

    return root;

    
};