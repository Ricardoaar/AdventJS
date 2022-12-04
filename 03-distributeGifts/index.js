function distributeGifts(packOfGifts, reindeers) {
  const reindeersWeightCapacity = reindeers.reduce((accWeight, reindeer) => accWeight + reindeer.length * 2, 0);
  const giftsWeight = packOfGifts.reduce((accWeight, gift) => accWeight + gift.length, 0);
  return parseInt(reindeersWeightCapacity / giftsWeight);
}

module.exports = distributeGifts;
