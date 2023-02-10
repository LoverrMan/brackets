module.exports = function check(str, bracketsConfig) {
  let result = brackConf(str, bracketsConfig);
  function brackConf(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
     const a = bracketsConfig[i][0]
     const b = bracketsConfig[i][1]
      if (str.includes(`${a}${b}`)) {str = str.replace(`${a}${b}`, ``);
        return brackConf(str, bracketsConfig);}}
    return str;
  }
  return result.length === 0;
};