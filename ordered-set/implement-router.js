/**
 * @param {number} memoryLimit
 n = number of packets
 space: o(n)
 */
var Router = function(memoryLimit) {
    this.cap = memoryLimit;
    this.q = [];
    this.head = 0;
    this.packets = new Set();
    this.hashMap = new Map()
    
};


/**
 * Removes the oldest packet from the router.
 * Used by both eviction and forwarding.
 */
Router.prototype.removeOldest = function() {
    if (this.head >= this.q.length) {
        return null;
    }

    const packet = this.q[this.head++];
    const [source, destination, timestamp] = packet;

    // Remove from duplicate detection
    const key = `${source},${destination},${timestamp}`;
    this.packets.delete(key);

    // Logically remove its timestamp from destination
    const data = this.hashMap.get(destination);
    data.head++;

    return packet;
};

/** 
 * @param {number} source 
 * @param {number} destination 
 * @param {number} timestamp
 * @return {boolean}
 time: o(1)
 */
Router.prototype.addPacket = function(source, destination, timestamp) {
    const key = `${source},${destination},${timestamp}`;

    if (this.packets.has(key)) {
        return false;
    }

    this.q.push([source, destination, timestamp]);
    this.packets.add(key);

    if (!this.hashMap.has(destination)) {
        this.hashMap.set(destination, {
            times: [],
            head: 0
        });
    }

    this.hashMap.get(destination).times.push(timestamp);

    // Too many active packets
    if (this.q.length - this.head > this.cap) {
        this.removeOldest();
    }

    return true;
};

/**
 * @return {number[]}
 time: o(1)
 */
Router.prototype.forwardPacket = function() {
    if (this.head >= this.q.length) {
        return [];
    }

    return this.removeOldest();
};

/** 
 * @param {number} destination 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 time: o(log(n))
 */
Router.prototype.getCount = function(destination, startTime, endTime) {
    if (!this.hashMap.has(destination)) {
        return 0;
    }

    const data = this.hashMap.get(destination);
    const arr = data.times;
    const start = data.head;

    // Find first index where arr[index] >= startTime
    const lowerBound = (target) => {
        let l = start;
        let r = arr.length;

        while (l < r) {
            const m = Math.floor((l + r) / 2);

            if (arr[m] >= target) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        return l;
    };

    // Find first index where arr[index] > endTime
    const upperBound = (target) => {
        let l = start;
        let r = arr.length;

        while (l < r) {
            const m = Math.floor((l + r) / 2);

            if (arr[m] > target) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        return l;
    };

    const left = lowerBound(startTime);
    const right = upperBound(endTime);

    return right - left;
   
};

/** 
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */