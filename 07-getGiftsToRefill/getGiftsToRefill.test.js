const getGiftsToRefill = require("./index.js");
describe("getGiftsToRefill", () => {
  test("getGiftsToRefill is a function", () => {
    expect(typeof getGiftsToRefill).toEqual("function");
  });

  test.only("Should return unrepeated elements", () => {
    const a1 = ["bike", "car", "bike", "bike"];
    const a2 = ["car", "bike", "doll", "car"];
    const a3 = ["bike", "pc", "pc"];

    const gifts = getGiftsToRefill(a1, a2, a3);
    expect(gifts).toEqual(["doll", "pc"]);
  });

});

