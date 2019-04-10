'use strict';

/**
 * Implement capitalsFirst function:
 *
 * Create a function that takes an input String and returns a String, where all
 * the uppercase words of the input String are in front and all the lowercase
 * words at the end. The order of the uppercase and lowercase words should be
 * the order in which they occur.
 *
 * If a word starts with a number or special character, skip the word and leave
 * it out of the result. Input String will not be empty.
 *
 * capitalFirst("hey You, Sort me Already!") === "You, Sort Already! hey me"
 *
 * capitalsFirst(1, 2) === 3
 * capitalsFirst(1, 11) === 12
 *
 * @param {string} str
 *
 * @returns {string} - string with uppercase words in front
 */
function capitalsFirst(str) {
  const arrayOfStr = str.split(' ');
  let capitalsFirstArr = [];
  let nonCapitalsFirstArr = [];

  for (let i = 0; i < arrayOfStr.length; i++) {
    const firstLetterCode = arrayOfStr[i][0].charCodeAt();

    if (firstLetterCode >= 65 && firstLetterCode <= 90) {
      capitalsFirstArr.push(arrayOfStr[i]);
    }

    if (firstLetterCode >= 97 && firstLetterCode <= 122) {
      nonCapitalsFirstArr.push(arrayOfStr[i]);
    }
  }

  return (capitalsFirstArr.concat(nonCapitalsFirstArr)).join(' ');
}

module.exports = capitalsFirst;
