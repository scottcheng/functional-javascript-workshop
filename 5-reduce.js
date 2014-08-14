function countWords(inputWords) {
  return inputWords.reduce(function (countMap, word) {
    if (countMap[word]) { countMap[word]++; } else { countMap[word] = 1; }
    return countMap;
  }, {});
}

module.exports = countWords;
