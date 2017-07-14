const letterToBraille = {
  a: [1,0,0,0,0,0],
  b: [1,0,0,0,0,0],
  c: [1,0,0,0,0,0],
  d: [1,0,0,0,0,0],
  e: [1,0,0,0,0,0],
};

export default word => word.map(letter => letterToBraille[letter]);