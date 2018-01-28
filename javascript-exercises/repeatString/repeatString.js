var repeatString = function(str, count) {
  if (count < 0) {
    return 'ERROR';
  }
  return str.repeat(count);
}

module.exports = repeatString
