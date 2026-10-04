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
 */
var balanceBST = function(root) {
    const arr = [];

    const inorder = (curr) => {
        if (!curr) return;
        inorder(curr.left);
        arr.push(curr.val);
        inorder(curr.right);
    }

    inorder(root);

    const dfs = (l,r) => {
        if (l > r) return null;
        const m = Math.floor((l + r) / 2);
        const node = new TreeNode(arr[m]);
        node.left = dfs(l, m - 1);
        node.right = dfs(m + 1, r);
        return node;
    };
    

    return dfs(0, arr.length - 1)

    
};