별 찍기 6번
==========
속이 빈 다이아몬드
-----------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var inputNum = parseInt(prompt("몇 줄?"));

for (var i = 0; i < inputNum; i++) {
  var point = "";
  for (var j = inputNum - 1; j >= 0; j--) {
    if (j > i) {
      point = point + " ";
    }else if (j < i) {
      point = point + " ";
    }else {
      point = point + "*";
    }
  }
  for (var j = 1; j < inputNum; j++) {
    if (j > i) {
      point = point + " ";
    }else if (j < i) {
      point = point + " ";
    }else {
      point = point + "*";
    }
  }
  console.log(point);
  console.log("\n");
}

for (var i = 1; i < inputNum; i++) {
  var point = "";
  for (var j = 0; j < inputNum; j++) {
    if (j === i) {
      point = point + "*";
    }else {
      point = point + " ";
    }
  }
  for (var j = inputNum - 2; j >= 0; j--) {
    if (j === i) {
      point = point + "*";
    }else {
      point = point + " ";
    }
  }
  console.log(point);
  console.log("\n");
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
