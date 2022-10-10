const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns 'Yes' when passed a true boolean", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  it("returns 'Yes' when passed a true boolean", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
