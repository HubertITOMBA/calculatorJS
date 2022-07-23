module.exports = function substract(a, b) {
  if(b > a) {
        throw new error('Negative result not allowed')
  }  
    return a - b
}

