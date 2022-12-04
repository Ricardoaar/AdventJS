const christmasWrapper = require("./index.js");
const ChristmasWrappers1 = require("./index");

describe("ChristmasWrappers", function() {

  test("ChristmasWrappers is a function", () => {
    expect(typeof ChristmasWrappers1).toEqual("function");
  });

  test("Should return an array with the wrapped gift", () => {
    const wrappedGifts = christmasWrapper(["Hello World"]);
    expect(wrappedGifts).toEqual(
      ["*************\n" +
      "*Hello World*\n" +
      "*************"]);
  });

  test("Should return an array with the wrapped gifts", () => {

    const wrappedGifts = christmasWrapper(["Hello World", "Cats are amazing"]);

    expect(wrappedGifts).toEqual(
      ["*************\n" +
      "*Hello World*\n" +
      "*************",
        "******************\n" +
        "*Cats are amazing*\n" +
        "******************"]
    );
  });

  test("Should return an empty array if no gifts are passed", () => {
    const wrappedGifts = christmasWrapper();
    expect(wrappedGifts).toEqual([]);
  });
});
