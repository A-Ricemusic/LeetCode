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
    let q = [root];
    let head = 0;
    let level = 0;
    while (q.length - head > 0) {
        const size = q.length - head;
        const arr = []
        for (let i = 0; i < size; i++) {
            const node = q[head++];
            arr.push(node)
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        if (level % 2 === 1) {
            let l = 0;
            let r = arr.length - 1;
            while (l < r) {
                [arr[l].val, arr[r].val] = [arr[r].val, arr[l].val]
                l++;
                r--;
            }
        }
        level++;
    }
   
    return root;

    
};