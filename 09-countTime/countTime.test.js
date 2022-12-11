const countTime = require("./index.js");
describe("countTime", () => {
  test("countTime is a function", () => {
    expect(typeof countTime).toEqual("function");
  });

  test.each(
    [{ leds: [0, 1, 1, 0, 1], expected: 7 }, { leds: [0, 0, 0, 1], expected: 21 }, {
      leds: [0, 0, 1, 0, 0], expected: 28
    }])("Should return time to set every led on", ({ leds, expected }) => {
    const result = countTime(leds);
    expect(result).toEqual(expected);
  });

});

