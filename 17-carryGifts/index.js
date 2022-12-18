function carryGifts(gifts, maxWeight) {
  const packedGifts = [];
  let temporalPackage = [];
  let currentSizeOfPackage = 0;
  for (let i = 0; i < gifts.length; i++) {
    const currentGift = gifts[i];
    const giftWeight = currentGift.length;

    if (giftWeight > maxWeight) continue;

    if (giftWeight + currentSizeOfPackage > maxWeight) {
      packedGifts.push(temporalPackage.join(" "));
      temporalPackage = [currentGift];
      currentSizeOfPackage = currentGift.length;
      continue;
    }

    currentSizeOfPackage += currentGift.length;
    temporalPackage.push(currentGift);
  }

  if (temporalPackage.length > 0) {
    packedGifts.push(temporalPackage.join(" "));
  }
  return packedGifts;
}

module.exports = carryGifts;
