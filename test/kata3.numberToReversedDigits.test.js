const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toStrictEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(36449)).toStrictEqual([9, 4, 4, 6, 3]);
    expect(numberToReversedDigits(15845)).toStrictEqual([5, 4, 8, 5, 1]);
  });
});