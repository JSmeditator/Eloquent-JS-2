var toFlat = [[1,2,3], [4,5,6],[7,8,"a"]];

console.log(toFlat.reduce(function(a,b) {
  return a.concat(b);
}));