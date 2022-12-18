const checkJump = require("./index.js");
describe("checkJump", () => {
  test("checkJump is a function", () => {
    expect(typeof checkJump).toEqual("function");
  });

  test.each([[[1, 3, 8, 5, 2], true], [[1, 7, 3, 5], false]])
  ("Should return expected value %b", (
    input,
    expected
  ) => {
    expect(checkJump(input)).toEqual(expected);
  });

});

