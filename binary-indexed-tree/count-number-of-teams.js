/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let res = 0;
    const n = rating.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if ((rating[i] < rating[j] && rating[j] < rating[k]) || 
                (rating[i] > rating[j] && rating[j] > rating[k])) {
                    res++;
                }
            }
        }
    }
    return res;    
};