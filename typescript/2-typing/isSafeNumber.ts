const MAX = 9_007_199_254_740_992;

function isSafeNumber(value: number): boolean {
    return (
        Number.isFinite(value) &&
        Math.round(value) === value &&
        Math.abs(value) <= MAX
    );
}

export = isSafeNumber;
