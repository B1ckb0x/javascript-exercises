const convertToCelsius = function(fahr) {
  let c = (fahr - 32) * (5/9)
  if (Number.isInteger(c)) {
    return c
  } else {
    return c.toFixed(1)
  }
};

const convertToFahrenheit = function(cels) {
  let f = (cels * (9/5)) + 32
  if (Number.isInteger(f)) {
    return f
  } else {
    return f.toFixed(1)
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
