function decorateTree(base) {
  const trimmedBase = base.replaceAll(" ", "");

  let tree = [base];
  const threeLength = trimmedBase.length;
  let temporalStage = trimmedBase;
  const combinations = ["R", "B", "P"];

  for (let i = 1; i < threeLength; i++) {
    let currentStage = [];


    for (let j = 1; j < temporalStage.length; j++) {
      const curr = temporalStage[j];
      const next = temporalStage[j - 1];

      if (curr === next) {
        currentStage.push(curr);
        continue;
      }

      const actualDecorations = [curr, next];

      const nextDecoration = combinations.find((decoration) => {
        return !actualDecorations.includes(decoration);
      });

      currentStage.push(nextDecoration);
    }

    temporalStage = [...currentStage];
    tree.push(currentStage.join(" ").trim());
  }
  return tree.reverse();
}

console.log(decorateTree("B P R P"));
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]);

module.exports = decorateTree;
