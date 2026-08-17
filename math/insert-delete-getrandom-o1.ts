class RandomizedSet {
    private dict: { [key: number]: number};
    private list: number[];
    constructor() {
        this.dict = {};
        this.list = [];
    }

    insert(val: number): boolean {
        if (val in this.dict) return false;
        this.dict[val] = this.list.length;
        this.list.push(val);
        return true; 
    }

    remove(val: number): boolean {
        if (val in this.dict) {
            const idxToRemove: number = this.dict[val];
            const lastElement: number = this.list[this.list.length - 1]
            this.list[idxToRemove] = lastElement;
            this.dict[lastElement] = idxToRemove;
            this.list.pop();
            delete this.dict[val];
            return true;
        }
        return false
        
    }

    getRandom(): number {
        const randomIdx = Math.floor(Math.random() * this.list.length)
        return this.list[randomIdx]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */