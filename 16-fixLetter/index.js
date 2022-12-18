function fixLetter(letter) {
  const symbols = [".", "?", "!"];


  const newLetter = letter.replaceAll(/\s+/g, " ")
    .replaceAll(/\s*,\s*/g, ", ")
    .replaceAll(/santa claus/gi, "Santa Claus")
    .replaceAll(/\?+/g, "?")
    .replaceAll(/\s+\.\s+/g, ". ")
    .replaceAll(/\s+\?\s+/g, "? ")
    .replace(/([:(\?|\.|!)]\s+)(.)/g, function(matches) {
      return matches.toUpperCase();
    })
    .trim();


  const endInPoint = symbols.includes(newLetter[newLetter.length - 1]);


  const final = `${newLetter}${endInPoint ? "" : "."}`;
  return final.charAt(0).toUpperCase() + final.slice(1);

}

console.log(fixLetter(` hello.  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `));


module.exports = fixLetter;


// Remove spaces at the beginning and end of the prase              X
// Remove multiple spaces and leave only one            x
// Leave a space after each comma and point                X
// Remove spaces before comma or point            X
// Questions must only end with a question mark           X
// The first letter of each sentence must be capitalized
// Put the word "Santa Claus" in uppercase if it appears in the letter X
// Put a point at the end of the sentence if it does not have punctuation X