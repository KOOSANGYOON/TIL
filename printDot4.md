별 찍기 4번
==========
다이아몬드 모양
--------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
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
for (i = 1; i < inputNum; i++) {
  var point = " ";
  for (j = 0; j < inputNum; j++) {
    if (j >= i) {
      point = point + "*";
    }else {
      point = point + " ";
    }
  }
  for (j = inputNum - 1; j >= 0; j--) {
    if (j <= i) {
      point = point + " ";
    }else {
      point = point + "*";
    }
  }
  console.log(point);
  console.log("\n");
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
