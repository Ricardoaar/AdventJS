const distributeGifts = require("./index.js");
describe("distributeGifts", () => {
  test("distributeGifts is a function", () => {
    expect(typeof distributeGifts).toEqual("function");
  });
  test("Should return number of packaged equal 2 when reindeers capacity is 24 and weight of gifts 12", () => {
    const packOfGifts = ["book", "doll", "ball"];
    const reindeers = ["dasher", "dancer"];


    const distributedGifts = distributeGifts(packOfGifts, reindeers); // 2
    expect(distributedGifts).toEqual(2);
  });

  test("Should return entire numbers when exact capacity is decimal", () => {
    const packOfGifts = ["cat", "book", "ball"];
    const reindeers = ["supername"];
    const distributedGifts = distributeGifts(packOfGifts, reindeers);
    expect(distributedGifts).toEqual(1);
  });

});

