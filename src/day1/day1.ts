export function solve1(input: string[]): number {
    const list1: number[] = []
    const list2: number[] = []

    input.forEach((line: string) => {
        const parts = line.split("   ");
        list1.push(parseInt(parts[0]))
        list2.push(parseInt(parts[1]))
    })

    list1.sort();
    list2.sort();

    if (list1.length != list2.length) {
        throw new Error("Lists should have the same length!");
    }

    let totalDistance = 0;
    list1.forEach((locationId1, index) => {
        totalDistance += Math.max(locationId1, list2[index]) - Math.min(locationId1, list2[index]);
    })

    return totalDistance;
}