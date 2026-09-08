/**
 * @param {number} memoryLimit
 */
var Router = function(memoryLimit) {
    this.cap = memoryLimit;
    this.q = [];
    this.head = 0;
    this.packets = new Set();
    
};

/** 
 * @param {number} source 
 * @param {number} destination 
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function(source, destination, timestamp) {
    const key2 = `${source},${destination},${timestamp}`;
    if (this.packets.has(key2)) return false;
    this.q.push([source, destination, timestamp]);
    this.packets.add(key2);
    if (this.q.length - this.head > this.cap) {
        const arr = this.q[this.head++];
        const key = `${arr[0]},${arr[1]},${arr[2]}`
        this.packets.delete(key);
    }
    return true; 
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function() {
    if (this.q.length - this.head === 0) return [];
    const arr = this.q[this.head++];
    const key = `${arr[0]},${arr[1]},${arr[2]}`
    this.packets.delete(key);
    return arr; 
};

/** 
 * @param {number} destination 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function(destination, startTime, endTime) {
    let res = 0;
    for (let i = this.head; i < this.q.length; i++) {
        const [source, des, timestamp] = this.q[i];
        if (des === destination && startTime <= timestamp && timestamp <= endTime) {
            res++;
        }
    }

    return res;
};

/** 
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */