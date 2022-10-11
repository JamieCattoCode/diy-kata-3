const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const person1 = { name: "Bart" };
    const person2 = { name: "Lisa" };
    const person3 = { name: "Maggie" };
    const person4 = { name: "Marge" };
    const person5 = { name: "Homer" };

    expect(joinNames([person1, person2, person3])).toBe("Bart, Lisa & Maggie");
    expect(joinNames([person3, person2, person1])).toBe("Maggie, Lisa & Bart");
    expect(joinNames([person2, person1, person3])).toBe("Lisa, Bart & Maggie");
    expect(joinNames([person1, person2, person3, person4])).toBe("Bart, Lisa, Maggie & Marge");
    expect(joinNames([person2, person4, person1, person3, person5])).toBe("Lisa, Marge, Bart, Maggie & Homer");
  });
});
