var ftoc = function(fahrenheit) {
  return parseFloat(((fahrenheit - 32) * .5556).toFixed(1));
}

var ctof = function(celsius) {
  return parseFloat(((celsius * 1.8) + 32).toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
