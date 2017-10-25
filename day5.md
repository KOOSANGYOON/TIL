# DAY 5 (2017.10.20.)

# Today Coding

## _**무작위 짝코딩 멤버를 추천해주는 프로그램**_

```javascript
var inputName = function(totalNum) {
  for (var i = 0; i < totalNum; i++) {
    peopleList[i] = prompt((i + 1) + "번 이름을 입력해주세요.");
  }
};

var selPeople = function() {
  var selMan = [];
  for (var i = 0; i < totalPeopleNum; i++) {
    var randomNum = Math.ceil(Math.random() * peopleList.length) - 1;
    selMan[i] = peopleList.splice(randomNum, 1)[0];
  }

  for (var i = 0; i < selMan.length - 1; i = i + 2) {
    console.log(selMan[i] + " 와 " + selMan[i+1] + " 은 짝입니다.");
  }

  if (selMan.length % 2 === 1) {
    console.log(selMan[selMan.length - 1] + " !!!! 혼자 짝입니다.");
  }
};




var totalPeopleNum = parseInt(prompt("총 인원을 입력해주세요."));
console.log("%d 명을 2인 1개조로 나눠드리겠습니다.", totalPeopleNum);

var peopleList = [];
var result = [];

if (totalPeopleNum === 0 || totalPeopleNum < 0) {
  console.log("잘못 입력되었습니다.");
}else if (totalPeopleNum % 2 === 0){
  inputName(totalPeopleNum);
  selPeople();
}else {
  console.log("1명은 혼자서 하셔야 합니다..");
  inputName(totalPeopleNum);
  selPeople();
}
```

## _**BMI를 계산해주는 프로그램**_

```javascript
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
```

## _**섭씨온도/화씨온도 변환 프로그램**_

```javascript
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
```
