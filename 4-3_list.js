var arrayToList = function(arr) {
  newList = {};
  for (var i = 0; arr.length; i++) {
    currList = {};
    if (i == 0) {      
      currList.value = arr.pop();
      currList.rest = null;
    } else {
      currList.rest = newList;      
      currList.value = arr.pop();
      
    }
    newList = currList;
  }
  return newList; 
}

var listToArray = function(list) {
  var arr = [];
  while (list.rest !== null) {
    arr.push(list.value);
    list = list.rest;
  }
  arr.push(list.value);
  return arr;
}

var prepend = function(el, list) {
  var newObj = {
    value: el,
    rest: list,
  }
  return newObj;
}

var nth = function(list, place) {
  if (place === 1) {
    return list.value;
  } else if (list.rest === null) {
    return "too high";
  } else {
    nth(list.rest, place - 1);
  }
}


var arr = [1,2,3]
var list = arrayToList(arr);
list = prepend(0, list);

console.log(list);
console.log(listToArray(list));

console.log(nth(arrayToList([10, 20, 30]), 1));