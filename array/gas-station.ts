function canCompleteCircuit(gas: number[], cost: number[]): number {
    let sumGas: number = gas.reduce((num,acc) => num + acc, 0);
    let sumCost: number = cost.reduce((num,acc) => num + acc, 0);
    if (sumCost > sumGas) {
        return - 1
    }

    let startStation: number = 0;
    let currentGas: number = 0;
    for (let i = 0; i < gas.length; i++) {
        if (currentGas < 0) {
            startStation = i;
            currentGas = 0;
        }
        currentGas += (gas[i] - cost[i]);
    }
    return startStation;

    
};