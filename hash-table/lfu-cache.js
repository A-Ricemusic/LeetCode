var ListNode = function(key,val) {
    this.val = val
    this.key = key
    this.freq = 1
    this.next = null
    this.prev = null
}

var LinkedList = function() {
    this.left = new ListNode(0,0)
    this.right = new ListNode(0,0)
    this.left.next = this.right
    this.right.prev = this.left
    this.size = 0
}

LinkedList.prototype.length = function() {
    return this.size
}

LinkedList.prototype.pushRight = function(newNode) {
    const prev = this.right.prev
    prev.next = newNode
    newNode.prev = prev
    newNode.next = this.right
    this.right.prev = newNode
    this.size++;
}

LinkedList.prototype.pop = function(node) {
    const prev = node.prev
    const next = node.next
    prev.next = next
    next.prev = prev
    node.next = null
    node.prev = null
    this.size--;
}

LinkedList.prototype.popLeft = function() {
    const node = this.left.next
    this.pop(node)
    return node; 
}


/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.lfuCount = 0;
    this.nodeMap = new Map();
    this.listMap = new Map();
};

LFUCache.prototype.counter = function(node) {
    const count = node.freq;
    this.listMap.get(count).pop(node);
    if (count === this.lfuCount && this.listMap.get(count).length() === 0) {
        this.lfuCount++;
    }

    node.freq++;
    if (!this.listMap.has(node.freq)) {
        this.listMap.set(node.freq, new LinkedList());
    }

    this.listMap.get(node.freq).pushRight(node);

}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (!this.nodeMap.has(key)) return -1;
    const node = this.nodeMap.get(key);
    this.counter(node);
    return node.val;

    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (this.capacity === 0) return

    if (this.nodeMap.has(key)) {
        const node = this.nodeMap.get(key);
        node.val = value;
        this.counter(node);
        return;
    }

    if (this.nodeMap.size === this.capacity) {
        const toRemove = this.listMap.get(this.lfuCount).popLeft();
        this.nodeMap.delete(toRemove.key);
    }

    const node = new ListNode(key, value);
    this.nodeMap.set(key,node);
    if (!this.listMap.has(1)) {
        this.listMap.set(1, new LinkedList());
    }
    this.listMap.get(1).pushRight(node);
    this.lfuCount = 1;
    
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */