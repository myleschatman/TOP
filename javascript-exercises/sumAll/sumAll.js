var sumAll = function(n1, n2) {
  let max = 0;
  let min = 0;
  let sum = 0;

  if (n1 < 0 || n2 < 0) {
    return 'ERROR';
  }

  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    return 'ERROR';
  }

  if (n1 > n2) {
    max = n1
    min = n2;
  } else {
    max = n2;
    min = n1;
  }

  for (var i = max; i >= min; i--) {
    sum += i;
  }
  return sum;
}

module.exports = sumAll
