const carryGifts = require("./index.js");
describe("carryGifts", () => {
  test("carryGifts is a function", () => {
    expect(typeof carryGifts).toEqual("function");
  });

  test("Should return packed gifts", () => {
    const expected = ["game bike", "book toy"];
    const result = carryGifts(["game", "bike", "book", "toy"], 10);
    expect(expected).toEqual(result);
  });

});

