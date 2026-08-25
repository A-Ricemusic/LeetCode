
var Logger = function() {
    this.hashMap = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}

 {
    foo: 1,
    bar: 2

 
 }
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    let res = true;
    
    if (this.hashMap.has(message)) {
        res = timestamp - this.hashMap.get(message) >= 10
        if (res) {
            this.hashMap.set(message,timestamp)
        }
        return res;
    } 

    this.hashMap.set(message, timestamp);
    return res;
 
    
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */