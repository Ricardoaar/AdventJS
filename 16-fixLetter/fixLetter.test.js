const fixLetter = require("./index.js");
describe("fixLetter", () => {
  test("fixLetter is a function", () => {
    expect(typeof fixLetter).toEqual("function");
  });

  test("Should return formatted text", () => {
    const result = fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `);
    const expected = "Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.";
    expect(result).toEqual(expected);

  });

});

