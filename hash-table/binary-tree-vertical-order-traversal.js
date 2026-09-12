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
 * @return {number[][]}
 hashMap = {
  []
 }
 
 */
var verticalOrder = function(root) {
    if (!root) return []
    const hashMap = new Map();

    const q = [[root,0]]
    let head = 0;
    while (q.length - head > 0) {
        const [node, idx] = q[head++];
        if (!hashMap.has(idx)) {
            hashMap.set(idx, []);
        }
        hashMap.get(idx).push(node.val);
        if (node.left) {
            q.push([node.left, idx - 1])
        }

        if (node.right) {
            q.push([node.right, idx + 1])
        }
    }

   

    
    const entries = [...hashMap.entries()].sort((a,b) => a[0] - b[0]);

    const res = []
    for (const [k,v] of entries) {
        res.push(v)
    }

    return res;
};