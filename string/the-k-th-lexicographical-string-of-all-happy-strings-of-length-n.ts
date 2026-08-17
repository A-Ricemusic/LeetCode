function getHappyString(n: number, k: number): string {
    const letters: string[] = ['a','b','c'];
    const res: string[] = [];
    const curr: string[] = [];
    //space o(n)
    //time o(n2^n)
    const dfs = (par:string) => {
        if (curr.length === n) {
            res.push(curr.join(""));
            return;
        }

        for (let i = 0; i < 3; i++) {
            if (letters[i] === par) continue;
            curr.push(letters[i]);
            dfs(letters[i]);
            curr.pop();
        }


    }

    dfs("");
    if (res.length <= k - 1) return "";
    return res[k - 1]
};