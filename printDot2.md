별 찍기 2번
==========
직각 삼각형 (좌우 변형)
-----------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var inputNum = prompt("몇 줄?");

for (i = 0; i < inputNum; i++) {
  var point = "";
  for (j = 0; j <inputNum; j++) {
    if (j <= i) {
      point = point + "*";
    }else {
      point = point + " ";
    }
  }
  console.log(point);
  console.log("\n");
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
