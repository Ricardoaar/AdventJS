const fitsInOneBox = require("./index.js");
describe("fitsInOneBox", () => {
  test("fitsInOneBox is a function", () => {
    expect(typeof fitsInOneBox).toEqual("function");
  });


  test("Should return true when boxes are correctly ordered and spaces are compatible", () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ];

    const fitsInBox = fitsInOneBox(boxes);
    expect(fitsInBox).toBe(true);
  });

  test("Should return false when boxes are correctly ordered but spaces are not compatible", () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ];

    const fitsInBox = fitsInOneBox(boxes);
    expect(fitsInBox).toBe(false);
  });

  test("Should return false when box are not ordered and dont fit", () => {
    const fitsInBox = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 }
    ]);

    expect(fitsInBox).toBe(false);
  });

});

