const sumAll = function(final, last) {
    if (typeof final !== 'number' || typeof last !== 'number' || final < 0 || last < 0) {
        return 'ERROR';
      }
    
      // Swap values if final is greater than last
      if (final > last) {
        [final, last] = [last, final];
      }
    
      let sum = 0;
    
      // Loop through the range and calculate the sum
      for (let i = final; i <= last; i++) {
        sum += i;
      }
    
      return sum;
}

// Do not edit below this line
module.exports = sumAll;
