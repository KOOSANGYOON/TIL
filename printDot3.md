별 찍기 3번
==========
이등변 삼각형
-------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var inputNum = prompt("몇 줄?");

for (i = 0; i < inputNum; i++) {
  var point = "";
  for (j = inputNum; j >= 0; j--) {
    if (j <= i) {
      point = point + "*";
    }else {
      point = point + " ";
    }
  }
  for (j = 1; j <inputNum; j++) {
    if (j <= i) {
      point = point + "*";
    }else {
      point = point + " ";
    }
  }
  console.log(point);
  console.log("\n");
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
