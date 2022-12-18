const getFilesToBackup = require("./index.js");
describe("getFilesToBackup", () => {
  test("getFilesToBackup is a function", () => {
    expect(typeof getFilesToBackup).toEqual("function");
  });

  test("Should return ids that need backup", () => {
    const lastBackup = 1546300800;

    const changes = [
      [3, 1546301100],
      [2, 1546300800],
      [1, 1546300800],
      [1, 1546300900],
      [1, 1546301000]
    ];

    expect(getFilesToBackup(lastBackup, changes)).toEqual([1, 3]);
  });

});

