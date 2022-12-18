function createCube(size) {
  let top = "";
  let bottom = "";
  for (let i = size; i > 0; i--) {
    const lateralTrim = i - 1;
    top += " ".repeat(lateralTrim);
    top += "/\\".repeat(size - i + 1);
    top += "_\\".repeat(size);
    top += "\n";

    const bottomTrim = size - i;
    bottom += " ".repeat(bottomTrim);
    bottom += "\\/".repeat(i);
    bottom += "_/".repeat(size);
    if (i !== 1) bottom += "\n";
  }
  return top + bottom;
}

console.log(createCube(1));


module.exports = createCube;
