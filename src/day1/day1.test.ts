import { describe, expect, it } from 'vitest';
import { solve1, solve2 } from './day1';
import * as fs from 'fs';

describe("solve day 1", () => {
    it("solve day 1.1 example", () => {
        const input =
            [
                "3   4",
                "4   3",
                "2   5",
                "1   3",
                "3   9",
                "3   3"
            ];
        const result = solve1(input);
        expect(result).toBe(11);
    });

    it("solve day 1.1", () => {
        const fileInput = fs.readFileSync("./src/day1/input1.1.txt","utf8");
        const result = solve1(fileInput.split("\n"));
        expect(result).toBe(2756096);
    });

    it("solve day 1.2 example", () => {
        const input =
            [
                "3   4",
                "4   3",
                "2   5",
                "1   3",
                "3   9",
                "3   3"
            ];
        const result = solve2(input);
        expect(result).toBe(31);
    });

    it("solve day 1.2", () => {
        const fileInput = fs.readFileSync("./src/day1/input1.1.txt","utf8");
        const result = solve2(fileInput.split("\n"));
        expect(result).toBe(23117829);
    });
});