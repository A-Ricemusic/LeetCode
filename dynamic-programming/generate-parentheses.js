/**
 * @param {number} n
 * @return {string[]}
    "("

 */
var generateParenthesis = function(n) {
    let res = []
    const dfs = (l,r, curr) => {
        if (curr.length === 2 * n) {
            res.push(curr.join(""))
        }
        if (l < n) {
            curr.push("(")
            dfs(l + 1, r, curr)
            curr.pop()
        } 
        if (r < l) {
            curr.push(")")
            dfs(l, r + 1, curr)
            curr.pop()
        }
    }


    dfs(0,0,[])
    return res
    
};