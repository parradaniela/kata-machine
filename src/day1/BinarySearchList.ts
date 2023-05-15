export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const midpoint = Math.floor(low + (high - low) / 2);
        const value = haystack[midpoint];

        if (value === needle) {return true}
        else if (value > needle) {
            // If the midpoint is greater than the needle (the thing we're looking for), then that means everything on the right side of the array is going to be bigger than what we're looking for. So we want to reduce the right side to the midpoint, and exclude the midpoint because we already checked it. Therefore, reassign the high variable
            high = midpoint;
        } else {
            // If the midpoint is smaller than the needle we're looking for, then that means everything on the left/bottom side of the array will also be smaller, and we can therefore skip it. So we reassign the low variable to midpoint + 1 because we already know the midpoint is smaller
            low = midpoint + 1
        }
    } while (low < high)
    return false

// Rewriting with the regular while format I'm used to
//     let hi = haystack.length;
//     let lo = 0;
//     const m = Math.floor(lo + (hi - lo) / 2)
//     const val = haystack[m]

//     while (lo < hi) {
//         if (val === needle) return true
//         else if (val < needle) {
//             hi = m
//         } else {
//             lo = m + 1
//         }
//     }
//     return false
}

