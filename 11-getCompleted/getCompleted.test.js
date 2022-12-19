const getCompleted = require("./index.js");

const tests = [
  { result: getCompleted("01:00:00", "03:00:00"), expected: "1/3" },
  { result: getCompleted("02:00:00", "04:00:00"), expected: "1/2" },
  { result: getCompleted("01:00:00", "01:00:00"), expected: "1/1" },
  { result: getCompleted("00:10:00", "01:00:00"), expected: "1/6" },
  { result: getCompleted("01:10:10", "03:30:30"), expected: "1/3" },
  { result: getCompleted("03:30:30", "05:50:50"), expected: "3/5" }];


describe("getCompleted", () => {
  test("getCompleted is a function", () => {
    expect(typeof getCompleted).toEqual("function");
  });

  test.each(tests)("Should return completed tasks %#", ({ result, expected }) => {
    expect(result).toEqual(expected);
  });

});

