#!/bin/bash

BASE_DIR="./"
RED="\e[1;31m"   # Red
NC='\e[0m'       # No Color
GREEN="\e[1;32m" # Green

echo "Enter the challenge name: "
read -r new_challenge

challenge_name=$new_challenge
challenge_folder_path="$BASE_DIR/$new_challenge"

# Check if challenge name has the challenge conventions
for ((i = 0; i < ${#new_challenge}; ++i)); do

  if [[ "${new_challenge:$i:1}" == "-" ]]; then
    challenge_name=${new_challenge:$i+1}
  fi
done

if [[ "$challenge_name" == "$new_challenge" ]]; then
  echo -e "${RED}Challenge name is not valid ${NC}"

  echo "Remember to add the index to the challenge name"
  echo "Example: 01-HelloWorld"
  echo -e "${GREEN}Good luck!${NC}"
  exit 1
fi

# Create the challenge directory
mkdir "$challenge_folder_path"

# Create file
challenge_file="$challenge_folder_path/index.js"

touch "$challenge_file"

echo "const $challenge_name = () => {
  // Your code goes here
}

module.exports = $challenge_name;" >"$challenge_file"

# Create test file
touch "$challenge_folder_path/$challenge_name.test.js"
echo "const $challenge_name = require(\"index.js\");
describe(\"$challenge_name\", () => {
  test(\"$challenge_name is a function\", () => {
    expect(typeof $challenge_name).toEqual(\"function\");
  });
});
" >"$challenge_folder_path"/"$challenge_name".test.js
