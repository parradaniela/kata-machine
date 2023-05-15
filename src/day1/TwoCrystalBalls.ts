export default function two_crystal_balls(breaks: boolean[]): number {
    // We're going to check our array/jump through it by checking in at the square root of it
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    // We use our first crystal ball to see where it breaks
    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        // Keep increasing the jumpAmount by the square root until you find a truthy. The first crystal ball breaks at this point
        if (breaks[i]) {
            // Literally break out of this loop once it finds this
            break;
        }
    }
    // We now know that we're within one square root amount from the ball breaking. So we move our pointer back by one instance of the square root amount
    i -= jumpAmount;

    // And now we can do a linear check through only that square root of the array to find the first truthy element, which is the first point at which the crystal balls would break. Make sure to include the && condition in case the point is not in the array at all, as we don't want to iterate past the array length
    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i
        }
    }
    // If there are no true values in the array then return -1
    return -1
}