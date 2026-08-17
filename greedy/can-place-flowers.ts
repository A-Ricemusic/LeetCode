function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    for (let i: number = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if ((i - 1 < 0 || flowerbed[i - 1] === 0) && (i + 1 === flowerbed.length || flowerbed[i + 1] === 0)) {
                flowerbed[i] = 1
                n--;
            }

        } else {
            continue;
        }
    }
    return n <= 0;
};