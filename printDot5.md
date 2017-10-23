별 찍기 5번
==========
사각형(속이 빈 사각형)
----------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var inputNum = parseInt(prompt("숫자를 입력해 주세요."));

for (var i = 1; i <= inputNum; i++) {
  var result = "";
  for (var j = 1; j <= inputNum; j++) {
    if (i === 1 || i === inputNum) {
      result = result + "*";
    }else {
      if (j === 1 || j === inputNum) {
        result = result + "*";
      }else {
        result = result + " ";
      }
    }
  }
  console.log(result);
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
