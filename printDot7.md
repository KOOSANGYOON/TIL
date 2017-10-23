별 찍기 7번
==========
모래시계
--------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var inputNum = parseInt(prompt("몇 줄?"));

for (var i = 0; i < inputNum; i++) {
  var point = "";
  for (var j = 0; j < inputNum; j++) {
    if (i != 0) {
      if (j === i) {
        point = point + "*";
      }else {
        point = point + " ";
      }
    }else {
      if (j >= i) {
        point = point + "*";
      }
    }
  }

  if (i === 0) {
    point = point + "*";
  }

  for (var j = inputNum - 1; j >= 0; j--) {
    if (i != 0) {
      if (j === i) {
        point = point + " *";
      }else {
        point = point + " ";
      }
    }else {
      point = point + "*";
    }
  }
  console.log(point);
  console.log("\n");
}

for (var i = 0; i < inputNum; i++) {
  var point = "";
  for (var j = inputNum - 1; j >= 0; j--) {
    if (i != inputNum - 1) {
      if (j === i) {
        point = point + "*";
      }else {
        point = point + " ";
      }
    }else {
      point = point + "*";
    }
  }
  if (i === inputNum - 1) {
    point = point + "*";
  }

  for (var j = 0; j < inputNum; j++) {
    if (i != inputNum - 1) {
      if (j === i) {
        point = point + " *";
      }else {
        point = point + " ";
      }
    }else {
      point = point + "*";
    }
  }
  console.log(point);
  console.log("\n");
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
