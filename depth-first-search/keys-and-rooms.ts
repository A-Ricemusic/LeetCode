function canVisitAllRooms(rooms: number[][]): boolean {
    const amountOfRooms = rooms.length
    const seen : boolean[] = new Array(amountOfRooms)
    const stack : number[] = [0]

    seen.fill(false)
    seen[0] = true

    while (stack.length > 0) {
        const roomIndex = stack.pop();
        for (const key of rooms[roomIndex]) {
            if (!seen[key]) {
                seen[key] = true;
                stack.push(key);

            }
        }
    }
    return seen.every(isVisited => isVisited);
};