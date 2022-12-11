const checkPart = require("./index.js");
describe("checkPart", () => {
  test("checkPart is a function", () => {
    expect(typeof checkPart).toEqual("function");
  });
  test.each([{ part: "uwu", expected: true }, {
    part: "miidim",
    expected: true
  },
    {
      part: "midu",
      expected: false
    }])("Test %s Check part results", ({ part, expected }) => {

    const result = checkPart(part); // true
    expect(result).toEqual(expected);

  });

});

