const letterToBraille = {
  a: [1,0,0,0,0,0],
  b: [1,0,0,0,0,0],
  c: [1,0,0,0,0,0],
  d: [1,0,0,0,0,0],
  e: [1,0,0,0,0,0],
};

const brailleGenerator = word => {
	const result = [];
  for (var i = 0, len = word.length; i < len; i++) {
    result.push(letterToBraille[word[i]]);
  }
  return result;
};

export default brailleGenerator;
