/**
 * @param {number[][]} events
 * @return {number}

 /*
    example of how i am right
     start:
     events = [[1,10],[2,2],[2,2],[2,2],[2,2]]
     j = 0; res = 0; maxDay = 10, heap = [], day = 1

     events = [[1,10],[2,2],[2,2],[2,2],[2,2]]
     j = 1; res = 0; maxDay = 10, heap = [10], day = 1

      events = [[1,10],[2,2],[2,2],[2,2],[2,2]]
     j = 1; res = 1; maxDay = 10, heap = [], day = 1

     events = [[1,10],[2,2],[2,2],[2,2],[2,2]]
     j = 5; res = 1; maxDay = 10, heap = [2,2,2,2], day = 2

     events = [[1,10],[2,2],[2,2],[2,2],[2,2]]
     j = 5; res = 2; maxDay = 10, heap = [2,2,2], day = 2

     events = [[1,10],[2,2],[2,2],[2,2],[2,2]]
     j = 5; res = 2; maxDay = 10, heap = [2,2,2], day = 3

     events = [[1,10],[2,2],[2,2],[2,2],[2,2]]
     j = 5; res = 2; maxDay = 10, heap = [], day = 3

    no more elements are added to heap so result will finally end with 2 being returned
*/


var maxEvents = function(events) {
    events.sort((a,b) => a[0] - b[0]);
    let maxDay = 0;

    for (const [s,e] of events) {
        maxDay = Math.max(maxDay, e);
    };

    const heap = new PriorityQueue((a,b) => a - b);
    let j = 0;
    let res = 0;

    

    for (let d = 1; d <= maxDay; d++) {
        while (j < events.length && events[j][0] <= d) {
            heap.enqueue(events[j][1]);
            j++;
        };

        while (!heap.isEmpty() && d > heap.front()) {
            heap.dequeue();
        };
        if (heap.isEmpty()) continue;
        heap.dequeue();
        res++;
    };

    return res;

    
};