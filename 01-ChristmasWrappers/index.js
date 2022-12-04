function wrappingGifts(gifts = []) {
  const wrapperSymbol = "*";

  return gifts.map((gift) => {

    const wrapperSize = gift.length + 2;

    const edgeWrappers = wrapperSymbol.repeat(wrapperSize);

    return `${edgeWrappers}\n*${gift}*\n${edgeWrappers}`;
  });
}

module.exports = wrappingGifts;
