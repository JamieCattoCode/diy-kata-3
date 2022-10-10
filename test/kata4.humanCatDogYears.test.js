const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    test("Returns an array containing human years, cat years, and dog years when passed human years.", () => {
        expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
        expect(humanCatDogYears(1)).toStrictEqual([1, 15, 15]);
        expect(humanCatDogYears(2)).toStrictEqual([2, 24, 24]);
        expect(humanCatDogYears(0)).toStrictEqual([0, 0, 0]);
    });
});
