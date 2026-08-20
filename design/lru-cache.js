/**
 * @param {number} capacity
    cap = 2
    {
    2: 1(0)
    1: 1(1)
    }

    1(0) <- 1(1)


 */
var ListNode = function(key,val) {
    this.val = val;
    this.key = key
    this.prev = null;
    this.next = null;
}


var LinkedList = function() {
    this.dummyHead = new ListNode(0,0);
    this.dummyTail = new ListNode(0,0);
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead

}

LinkedList.prototype.push = function(node) {
    const right = this.dummyTail.prev;
    this.dummyTail.prev = node
    right.next = node
    node.next = this.dummyTail
    node.prev = right
}

LinkedList.prototype.pop = function() {
    const left = this.dummyHead.next;
    const next = left.next;
    left.next = null;
    left.prev = null;
    this.dummyHead.next = next
    next.prev = this.dummyHead
    return left;
}

LinkedList.prototype.delete = function(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode 
    nextNode.prev = prevNode 
    node.prev = null;
    node.next = null;
}



var LRUCache = function(capacity) {
    this.hashMap = new Map();
    this.cap = capacity;
    this.length = 0;
    this.linkedList  = new LinkedList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.hashMap.has(key)) {
        const node = this.hashMap.get(key);
        this.linkedList.delete(node);
        this.linkedList.push(node);
        return node.val
    } else {
        return -1
    }
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}

 cap = 2
 length = 2
    {
    2: 3
    1: 1(1)
    }

     1(1) <- 3

    newNode(key = 2, val = 3)

 */
LRUCache.prototype.put = function(key, value) {
    const newNode = new ListNode(key,value)
    if (this.hashMap.has(key)) {
        const nodeToDelete = this.hashMap.get(key);
        this.linkedList.delete(nodeToDelete)
        this.length--;
    }
    this.hashMap.set(key, newNode)
    this.linkedList.push(newNode)
    this.length++;
    if (this.length > this.cap) {
        const delNode = this.linkedList.pop()
        this.hashMap.delete(delNode.key)
        this.length--;
    }
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */