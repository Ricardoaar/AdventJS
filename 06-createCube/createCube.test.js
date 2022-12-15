const createCube = require("./index.js");
describe("createCube", () => {
  test("createCube is a function", () => {
    expect(typeof createCube).toEqual("function");
  });

  test("Should return a 3x3 cube when input is 3", () => {

    const expectedCube =
` /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/`;
  });

});

