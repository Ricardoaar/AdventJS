function fitsInOneBox(boxes) {
  const newBoxes = [];

  const operationsByValues = {
    "equal": (a, b) => a !== b,
    "lower": (a, b) => a < b,
    "higher": (a, b) => a > b
  };

  return boxes.every((box) => {
    const isValid = newBoxes.every((newBox) => {
      let operation = "equal";
      return Object.keys(newBox).every((key, keyIdx) => {
        const newBoxValue = newBox[key];
        const boxValue = box[key];

        const isKeyValid = operationsByValues[operation](newBoxValue, boxValue);

        if (!isKeyValid) return false;

        if (keyIdx === 0) {
          operation = newBoxValue > boxValue ? "higher" : "lower";
        }
        return true;
      });

    });

    if (isValid) newBoxes.push(box);
    return isValid;
  });
}

module.exports = fitsInOneBox;

