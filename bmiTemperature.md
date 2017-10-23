BMI 계산 && 섭씨 화씨 변형
==========================

_**1.BMI 계산**_
------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
// BMI 계산 프로그램

// 몸무게 / ( (키 X 0.01) 제곱)

var calBmi = function(weight, height) {   //BMI 계산하는 함수
  var result = 0;

  result = weight / (Math.pow((height * 0.01), 2))
  return result;
}

var bmiResult = function(bmi) {   //BMI 값에 따른 비만도를 알려주는 함수
  if (bmi < 18.5) {
    console.log("You are UNDERWEIGHT. YOUR BMI : " + bmi);
  }else if(18.5 <= bmi && bmi <= 24.9) {
    console.log("You are NORMAL. YOUR BMI : " + bmi);
  }else if(25 <= bmi && bmi <= 29.9) {
    console.log("You are OVERWEIGHT. YOUR BMI : " + bmi);
  }else if(30 <= bmi && bmi <= 34.9) {
    console.log("You are OBESE. YOUR BMI : " + bmi);
  }else {
    console.log("You are EXTREMELY OBESE. YOUR BMI : " + bmi);
  }
}

var ceilNum = function(realBmi) {   //BMI 값을 소수점 3째자리로 끊어주는 함수
  var result = ((Math.round(realBmi * 100)) * 0.01);

  return result;
}

//===============Main Start=
=====================
var weight = parseInt(prompt("몸무게를 입력하세요.(kg)"));
var height = parseInt(prompt("키를 입력하세요.(cm)"));

var bmi = calBmi(weight, height);

var bmiChange = ceilNum(bmi);

bmiResult(bmiChange);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

_**2. 섭씨 화씨 변형 문제**_
-------------------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var cToF = function() {
  var result;
  var fTem;
  var cTem = parseFloat(prompt("섭씨 온도를 입력해주세요."));

  result = ((cTem * 1.8) + 32);

  console.log("섭씨 %f 도는 화씨 %f 도 입니다.", cTem, result);
}

var fToC = function() {
  var result;
  var cTem;
  var fTem = parseFloat(prompt("화씨 온도를 입력해주세요."));

  result = ((fTem - 32) / 1.8);

  console.log("화씨 %f 도는 섭씨 %f 도 입니다.", fTem, result);
}

//===========Program Start===============
var ques1 = parseInt(prompt("[1. 섭씨 → 화씨] [2. 화씨 → 섭씨]"));

if (ques1 === 1) {
  cToF();
}else if (ques1 === 2) {
  fToC();
}else {
  alert("잘못 입력하셨습니다.");
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
