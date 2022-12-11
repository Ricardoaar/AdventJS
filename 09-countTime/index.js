function countTime(leds) {

  const time = 7;
  let repetitions = 0;


  while (leds.some((el) => !el)) {
    leds = leds.map((el, idx) => {
      const prev = idx === 0 ? leds.length - 1 : idx - 1;

      if (leds[prev] || el) return 1;
      return 0;
    });

    repetitions++;
  }


  return repetitions * time;
}


console.log(countTime([0, 0, 0, 1]));
module.exports = countTime;