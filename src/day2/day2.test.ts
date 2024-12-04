import { describe, expect, it } from 'vitest';
import { solve1 } from './day2';
import * as fs from 'fs';

describe("solve day 2", () => {
    it("solve day 2.1 example", () => {
        const input =
            [
                "7 6 4 2 1",
                "1 2 7 8 9",
                "9 7 6 2 1",
                "1 3 2 4 5",
                "8 6 4 4 1",
                "1 3 6 7 9"
            ];
        const result = solve1(input);
        expect(result).toBe(2);
    });

    it("solve day 2.1", () => {
        const fileInput = fs.readFileSync("./src/day2/input2.txt","utf8");
        const result = solve1(fileInput.split("\n"));
        expect(result).toBe(242);
    });
});