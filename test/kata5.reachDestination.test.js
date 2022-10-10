const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(10, 40)).toBe("I should be there in 0.5 hours");
    expect(reachDestination(80, 40)).toBe("I should be there in 2 hours");
    expect(reachDestination(236, 63)).toBe("I should be there in 3.5 hours");
    expect(reachDestination(192, 34)).toBe("I should be there in 5.5 hours");
  });
});
