/**
 * @param {number} n
 * @return {string[]}
    "("

 */
var generateParenthesis = function(n) {
    let res = []
    const dfs = (l,r, curr) => {
        if (r === n) {
            res.push(curr.join(''))
            return 
        }
        if (l === n) {
            curr.push(")")
            dfs(l, r + 1, curr)
            curr.pop();
            return;
        }
        if (l === r) {
            curr.push("(")
            dfs(l + 1, r, curr)
            curr.pop()
            return;
        }
        curr.push("(")
        dfs(l + 1, r, curr)
        curr.pop()
        curr.push(")")
        dfs(l, r + 1, curr)
        curr.pop()
    }


    dfs(0,0,[])
    return res
    
};