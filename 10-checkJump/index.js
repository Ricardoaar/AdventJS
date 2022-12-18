function checkJump(heights) {

  if (heights.length <= 2) return false;

  let direction = "up";
  let isOnDirection = true;
  let hasGoneDown = false;
  let hasGoneUp = false;

  const fnByDirection = {
    up: (current, next = Number.MAX_SAFE_INTEGER) => current <= next,
    down: (current, next = Number.MIN_SAFE_INTEGER) => current >= next
  };


  for (let i = 0; i < heights.length; i++) {
    const checkDirection = fnByDirection[direction];

    const currentHeight = heights[i];

    const nextHeight = heights[i + 1];

    const isCorrectDirection = checkDirection(currentHeight, nextHeight);


    if (direction === "up") {

      if (!isCorrectDirection && !hasGoneUp) break;

      if (!isCorrectDirection) direction = "down";

      if (currentHeight !== nextHeight) hasGoneUp = true;
    } else {

      if (isCorrectDirection) hasGoneDown = true;
      if (!isCorrectDirection) {
        isOnDirection = false;
        break;
      }
    }

  }

  return direction === "down" && isOnDirection && hasGoneDown && hasGoneUp;
}


console.log(checkJump([1, 2, 0]));