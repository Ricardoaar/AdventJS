function dryNumber(dry, numbers) {
  const superArray = [...Array(numbers + 1).keys()];

  return superArray.slice(1).filter(n => n.toString().includes(dry));
}

const expected = dryNumber(0, 1);
console.log(expected);
module.exports = dryNumber;
