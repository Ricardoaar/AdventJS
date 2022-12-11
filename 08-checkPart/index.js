function checkPart(part) {
  const reverseWord = word => word.split("").reverse().join("");
  const isPalindrome = word => word === reverseWord(word);


  if (isPalindrome(part)) return true;
  const splitPart = part.split("");
  return splitPart.some((_, idx) => {
    const splitCopy = [...splitPart];
    splitCopy.splice(idx, 1);
    const newWord = splitCopy.join("");

    return isPalindrome(newWord);
  });


}

console.log(checkPart("zzzoonzzz"));
module.exports = checkPart;
