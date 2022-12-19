const dryNumber = require("./index.js");
describe("dryNumber", () => {
  test("dryNumber is a function", () => {
    expect(typeof dryNumber).toEqual("function");
  });


  test("Should return numbers that need ink", () => {
    const result = dryNumber(1, 15);
    const expected = [1, 10, 11, 12, 13, 14, 15];
    expect(expected).toEqual(result);

  });
});

