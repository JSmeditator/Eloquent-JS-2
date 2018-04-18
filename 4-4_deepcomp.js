var deepComp = function(x, y) {
  if (typeof x === "object" && typeof y === "object" && x !== null && y !== null) {
    for (var i in x) {
      if (x.hasOwnProperty(i) !== y.hasOwnProperty(i)) return false;     
      if (typeof x[i] === "object") {
        if (!deepComp(x[i], y[i])) return false;        
      } else {
        if (x[i] !== y[i]) return false;
      }      
    }
    for (var i in y) {
      if (typeof x[i] === 'undefined') 
      { 
        return false; 
      }
    }
    return true;
  } else {
    return x === y;
  }
}

console.log(deepComp(1,2));
console.log(deepComp(2,2));
console.log(deepComp(3,{}));
console.log(deepComp({tree: 20, castle: {branch: 5}},{tree: 20, castle: {branch: 5}}));