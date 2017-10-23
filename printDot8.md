별 찍기 8번
==========
원 그리기
--------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var square = function(length) {         //반지름을 제곱해주는 함수(피타고라스 공식에 쓰임)
  var squareLength = length * length;
  return squareLength;
}


var inputNum = parseInt(prompt("반지름 몇? (짝수만 가능)"));
var sqNum = square(inputNum);

if (inputNum % 2 === 0 && inputNum >= 2) {
  for (var i = 0; i <= inputNum; i++) {
    var point = "";
    for (var j = 0; j <= inputNum; j++) {
      if (square(inputNum - i) + square(inputNum - j) <= sqNum) {
        point = point + "* ";
      }else {
        point = point + "  ";
      }
    }
    for (var j = 0; j <= inputNum; j++) {
      if (square(inputNum - i) + square(j) <= sqNum) {
        point = point + "* ";
      }else {
        point = point + " ";
      }
    }
    console.log(point);
   // console.log("\n");
  }
  for (var i = 0; i <= inputNum; i++) {
    var point = "";
    for (var j = 0; j <= inputNum; j++) {
      if (square(i) + square(inputNum - j) <= sqNum) {
        point = point + "* ";
      }else {
        point = point + "  ";
      }
    }
    for (var j = 0; j <= inputNum; j++) {
      if (square(i) + square(j) <= sqNum) {
        point = point + "* ";
      }else {
        point = point + " ";
      }
    }
    console.log(point);
  }
}else {
  alert("잘못 입력하셨습니다. (ㅠ.,ㅠ) 짝수만 입력해 주세요.");
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
