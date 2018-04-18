function every(arr, f){
  var final = true;
  arr.forEach(function (el){
    var result = true;
    result = f(el);
    if (result === false) final = false;
  })  
  return final;  
};


function some(arr,f){
  for (var i in arr) {
    if (f(arr[i]) === true) return true;
  }
  return false;
}

// Using isNaN per the example tests.


console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false