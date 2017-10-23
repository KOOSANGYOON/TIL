별 찍기 9번
==========
하트 그리기
----------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var square = function(length) {         //반지름을 제곱해주는 함수(피타고라스 공식에 쓰임)
  var squareLength = length * length;
  return squareLength;
}

var inputNum = parseInt(prompt("크기를 입력해주세요. (0 ~ 7)"));
var sqNum = square(inputNum);

if (inputNum >= 1 && inputNum <= 7){
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
          point = point + "  ";
        }
      }
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
          point = point + "  ";
        }
      }
      console.log(point);
  }

  for (var i = 0; i <= inputNum * 2 + 1; i++) {
    var point = "";
    for (var j = 0; j <= inputNum * 2 + 1; j++) {
      if (j >= i) {
        point = point + "* ";
      }else {
        point = point + "  ";
      }
    }
    for (var j = inputNum * 2 + 1; j >= 0; j--) {
      if (j >= i) {
        point = point + "* ";
      }else {
        point = point + "  ";
      }
    }
    console.log(point);
  }
}else {
  alert("범위를 초과하셨습니다. ㅜ.,ㅜ");
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

