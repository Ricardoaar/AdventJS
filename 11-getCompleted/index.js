function getCompleted(part, total) {
  const greaterCommuneDenominator = (a, b) => {
    return b ? greaterCommuneDenominator(b, a % b) : a;
  };

  const [partHours, partMinutes, partSeconds] = part.split(":");
  const [totalHours, totalMinutes, totalSeconds] = total.split(":");

  const secondsInHour = 3600;
  const minutesInHour = 60;
  const totalTime = totalHours * secondsInHour + totalMinutes * minutesInHour + totalSeconds;
  const partTime = partHours * secondsInHour + partMinutes * minutesInHour + partSeconds;
  const fraction = partTime / totalTime;

  const [integers, decimals] = fraction.toString().split(".");
  const numerator = decimals;
  const denominator = Math.pow(10, numerator.length);
  const gcdFractions = greaterCommuneDenominator(numerator, denominator);


  if (gcdFractions === 1) {

    return ``;
  }
  const integersAsFraction = integers * gcdFractions;
  const topFraction = numerator / gcdFractions;
  const bottomFraction = denominator / gcdFractions;


  return `${topFraction + integersAsFraction}/${bottomFraction}`;

}

console.log(getCompleted("01:00:00", "03:00:00"));

module.exports = getCompleted;
