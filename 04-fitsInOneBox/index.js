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

console.log(fitsInOneBox([{ l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 2 }])
);


