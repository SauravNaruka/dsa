export function binarySearch(haystack: number[], needle: number): boolean {
    let low = 0;
    let middle;
    let high = haystack.length;

    while (low < high) {
        middle = calculateMiddlePoint(low, high);
        // console.log(`low=${low}, middle=${middle} & High=${high}`);

        if (haystack[middle] === needle) {
            return true;
        } else if (haystack[middle] > needle) {
            high = middle;
        } else {
            low = middle + 1;
        }
    }

    return false;
}

function calculateMiddlePoint(low: number, high: number): number {
    return Math.floor(low + (high - low) / 2);
}
