'use strict';

/**
 * @param {string[]} strings 
 * @param {string[]} valueNames
 */
module.exports = function partial(strings, ...valueNames) {
  /** @param {object} values */
  return function(values) {
    let finalString = strings[0];

    for (let i = 0; i < valueNames.length; i++) {
      if (!Reflect.has(values, valueNames[i])) {
        throw new ReferenceError(`Property ${valueNames[i]} is not present on the supplied object.`);
      }
      finalString += values[valueNames[i]] + strings[i + 1];
    }

    return finalString;
  }
};
