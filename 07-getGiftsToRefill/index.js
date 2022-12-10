function getGiftsToRefill(a1, a2, a3) {


  const onlyFirst = a1.filter((gift) => ![...a2, ...a3].includes(gift));
  const onlySecond = a2.filter((gift) => ![...a1, ...a3].includes(gift));
  const onlyThird = a3.filter((gift) => ![...a2, ...a1].includes(gift));

  return [...(new Set([...onlyFirst, ...onlySecond, ...onlyThird]))];
}

module.exports = getGiftsToRefill;
