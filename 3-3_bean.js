var countBs = function(toCheck) {
  return countChar(toCheck, "B");
}

var countChar = function(toCheck, char){
  var count = 0;
  var target = char;
  for (i in toCheck) {
    if (toCheck.charAt(i) === target) count++;
  }
  return count;
}

console.log(countBs("helloBBBB"));
console.log(countChar("helloBBBB", "l"));