export function solve1(input: string[]): number {
    let numOfSafeReports = 0;
    input.forEach((line: string) => {
        const levels = line.split(" ");
        if (isSafe(levels)) {
            numOfSafeReports++;
        }
    });

    return numOfSafeReports;
}

function isSafe(input: string[]): boolean {
    const initialDiff = parseInt(input[0]) - parseInt(input[1]);
    const checkFun: (diff: number) => boolean = getCheckFun(initialDiff);

    for(let i = 0; i < input.length -1; i++) {
        const diff = parseInt(input[i]) - parseInt(input[i+1]);
        if (!checkFun(diff)) {
            return false;
        }
    }

    return true;
}

function getCheckFun(diff: number): (diff: number) => boolean {
    if (diff === 0) {
        return function isSame(_): boolean {
            return false;
        }
    } else if (diff > 0) {
        return function isIncreasing(diff: number): boolean {
            return diff >= 1 && diff <= 3;
        }
    } else if (diff < 0) {
        return function isDecreasing(diff: number): boolean {
            return diff <= -1 && diff >= -3;
        }
    }

    throw new Error("Could not get checkFun");
}
