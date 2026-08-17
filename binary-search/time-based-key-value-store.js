
var TimeMap = function() {
    this.hashMap = new Map();
    
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.hashMap.has(key)) {
        this.hashMap.set(key, [])
    }
    this.hashMap.get(key).push([timestamp,value]);
    
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.hashMap.has(key)) return "";
    const arr = this.hashMap.get(key);
    let l = 0;
    let r = arr.length - 1;
    let res = "";
    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2)
        if (arr[m][0] > timestamp) {
            r = m - 1
        } else if (arr[m][0] < timestamp) {
            res = arr[m][1]
            l = m + 1
        } else {
            res = arr[m][1];
            break;
        }
    }
    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */