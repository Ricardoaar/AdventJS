const countNoWorkHours = require("./index.js");
describe("CountNoWorkHours", () => {
  test("CountNoWorkHours is a function", () => {
    expect(typeof countNoWorkHours).toEqual("function");
  });

  test("Should return four hours with 2 holiday days", () => {
    const year = 2022;
    const holidays = ["01/06", "04/01", "12/25"];
    const extraHours = countNoWorkHours(year, holidays);
    expect(extraHours).toEqual(4);
  });

  test("Should return 10 extra hours for 5 holiday days", () => {
    const extraHours = countNoWorkHours(1985, ["01/01", "01/06", "02/02", "02/17", "02/28", "06/03", "12/06", "12/25"]);
    expect(extraHours).toEqual(10);
  });

});

