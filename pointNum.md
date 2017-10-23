숫자 찍기 과제
=============
_**1. 시작수부터 끝수까지 일렬로 나열**_
---------------------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var printNum = function(start, end) {   //시작 수, 끝 수를 입력받아 문자열로 출력해주는 함수
  if(start > end) {
    alert("[ERROR] 시작값이 끝값보다 클 수 없습니다.");
  }else {
    var result = "";
    for (var i = 0; i < end - start + 1; i++) {
      if (i != 0){
        result = result + " " + (start + i);
      }else {
        result = result + (start + i);
      }
    }
    console.log(result);
  }
}

var startNum = parseInt(prompt("시작 수를 입력해주세요."));
var endNum = parseInt(prom
pt("끝 수를 입력해주세요."));

printNum(startNum, endNum);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

_**2. 4개씩 나열하기**_
--------------------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var printNum = function(num) {
  for (var i = 0; i < num; i++) {
    var result = "";
    for (var j = 1; j <= num; j++) {
      if (j % num != 0) {
        result = result + (num * i + j) + " ";
      }else {
        result = result + (num * i + j) + " ";
        console.log(result);
      }
    }
  }
}

var inputNum = parseInt(prompt("숫자를 입력해 주세요."));

printNum(inputNum);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

_**3. N X N 배열을 M 단위로 나눠 출력**_
--------------------------------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var printNum = function(length, space) {
  for (var i = 1; i <= length; i++) {
    var result = "";
    var k = (i * space) - (space - 1);
    for (var j = 1; j <= length; j++) {
      if(j % length != 0) {
        result = result + (k + space * (j - 1)) + " ";
      }else {
        result = result + (k + space * (j - 1)) + " ";
        console.log(result);
      }
    }
  }
}

var inputLength = parseInt(prompt("길이를 얼마나 나열할까요?"));
var inputSpace = parseInt(prompt("각 수의 간격은 몇으로 할까요?"));

printNum(inputLength, inputSpace);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

_**4. 뱀처럼 꼬불꼬불 나열**_
---

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var printNum = function(length) {
  for (var i = 0; i < length; i++) {
    var result = "";

    if (i % 2 === 0) {
      for (var j = 1; j <= length; j++) {
        if (j % length != 0) {
          result = result + ((length * i) + j) + " ";
        }else {
          result = result + ((length * i) + j) + " ";
          console.log(result);
        }
      }
    }else {
      for (var j = 1; j <= length; j++) {
        if (j % length != 0) {
          result = result + (length * (i + 1) - (j-1)) + " ";
        }else {
          result = result + (length * (i + 1) - (j-1)) + " ";;
          console.log(result);
         }
      }
    }
  }
}

var inputLength = parseInt(prompt("가로, 세로 길이를 얼마나 나열할까요?"));

printNum(inputLength);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

_**5. 직각 삼각형으로 쌓기 (배열사용)**_
---

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var printNum = function(num) {
  for (var i = 1; i <= num; i++) {
    var result = [];
    for (var j = 0; j < num; j++) {
      var k = j + 1;
      if (j < i) {
        result.push(k);
      }
    }
    console.log(result);
  }
}

var inputLength = parseInt(prompt("몇 층으로 나열할까요?"));

printNum(inputLength);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

_**6. 두 수의 차이를 입력받아 2열로 나열하기**_
---

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var printNum = function(num) {
  var result = [];
  
  for (var i = 0; i <= num; i++) {
    var resultNum = num - i;
    result.push(resultNum);
    result.push(i);
    
    console.log(result);
    
    result.pop();
    result.pop();
  }
}

var inputNum = parseInt(prompt("숫자를 입력하세요."));

printNum(inputNum);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

