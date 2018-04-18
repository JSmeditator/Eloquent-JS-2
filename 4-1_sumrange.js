var range = function(start, end, step) {
  if (step === undefined) step = 1;
  var range = [];
  if (step > 0) {
    for (var i = start; i < end + 1; i += step) {
      range.push(i);
    }
    return range;
  }
  else {
    for (var i = start; i > end - 1; i += step) {
      range.push(i);
    }
    return range;
  }
}

var sum = function(numArr) {
  var total = 0;
  for (i in numArr) {
    total += numArr[i];
  }
  return total;
}

console.log(range(5,2,-1));