function selectSleigh(distance, sleighs) {
  return sleighs.reduce((prev, { name, consumption }, idx) => {


    const distanceXConsumption = distance * consumption;

    if (distanceXConsumption <= 20 && distanceXConsumption > prev.consumption) {
      return { name, consumption };
    }
    return prev;
  }, { name: null, consumption: Number.MIN_SAFE_INTEGER }).name;

}


module.exports = selectSleigh;
