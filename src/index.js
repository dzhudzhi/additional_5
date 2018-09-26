module.exports = function check(str, bracketsConfig) {
  const arrBrackets = bracketsConfig.map(x => x[0] + x[1]);

  prevLen = 0;
  while (str.length != prevLen) {
      prevLen = str.length;
      arrBrackets.forEach(brackets => {
          str = str.replace(brackets, '');
      });
  }
  
  return str.length == 0 ? true : false;
}

