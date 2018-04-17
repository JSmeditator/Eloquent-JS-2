var spot = "#";
var space = " ";
var size = 20;
var board = "";

for (var line = 0; line < size; line++) {
  for (var i = 0; i < size; i++) {
    if (line % 2 === 0) {
      if (i % 2 === 0) {
        board += spot;  
      } else {
        board += space;
      }
    } else {
      if (i % 2 === 0) {
        board += space;  
      } else {
        board += spot;
      }
    }  
  }
  board += "\n";
}

console.log(board);


