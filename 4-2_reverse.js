var reverseArray = function(arr) {
  var newArr = [];
  for (i in arr) {
    newArr.unshift(arr[i]);
  }
  return newArr;
}

var reverseArrayInPlace = function(arr) {
  var middle = Math.floor(arr.length / 2);
  for (var i = 0; i < middle; i++) {    
    var cur = arr[i];    
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = cur;        
  } 
  return arr;  
}

var arr = [1,2,3,4,5,6];
var newArr = reverseArray(arr);

console.log(arr);
console.log(newArr);
arr = reverseArrayInPlace(arr);
console.log(arr);

newArr = reverseArray(arr);
console.log(newArr);