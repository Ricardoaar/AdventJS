const selectSleigh = require("./index.js");
describe("selectSleigh", () => {
  test("selectSleigh is a function", () => {
    expect(typeof selectSleigh).toEqual("function");
  });

  test("Should return correct name", () => {

    const distance = 30;
    const sleighs = [
      { name: "Gorusuke", consumption: 0.3 },
      { name: "Madeval", consumption: 0.5 },
      { name: "Lolivier", consumption: 0.7 },
      { name: "Hyuuh", consumption: 1 }
    ];

    const result = selectSleigh(distance, sleighs);
    expect(result).toEqual("Madeval");
  });

});

