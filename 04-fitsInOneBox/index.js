function fitsInOneBox(boxes) {

  const foundBiggestIndex = boxes.findIndex((box, idx) => {
    return boxes.every((anotherBox, anotherIdx) => {
      return Object.keys(anotherBox).every((key) => {
        const isTheSameBox = idx === anotherIdx;
        return box[key] > anotherBox[key] || isTheSameBox;
      });
    });
  });


  if (foundBiggestIndex === -1) return false;
  let biggestBox = boxes[foundBiggestIndex];
  let restBoxes = [...boxes.slice(0, foundBiggestIndex), ...boxes.slice(foundBiggestIndex + 1)];

  while (restBoxes.length > 0) {
    const biggestIndex = restBoxes.findIndex((box, idx) => {
      return restBoxes.every((otherBox, otherIdx) => {
        return Object.keys(box).every(key => {
          const isTheSameBox = idx === otherIdx;
          const isHigherThanOther = box[key] > otherBox[key];
          const isLowerThanBiggest = box[key] < biggestBox[key];
          return (isHigherThanOther && isLowerThanBiggest) || isTheSameBox;
        });
      });
    });
    if (biggestIndex === -1) return false;
    biggestBox = restBoxes[biggestIndex];

    restBoxes = [...restBoxes.slice(0, biggestIndex), ...restBoxes.slice(biggestIndex + 1)];
  }
  return true;
}
