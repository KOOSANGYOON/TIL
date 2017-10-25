# DAY 8 (2017.10.25.)

# TIL (Atom 사용법 숙달 및 도전과제 실행)

- Atom 을 사용하기 시작함.

  → mark down 파일 미리보기 기능을 이용하여 편리하게 편집 가능했기 때문

- Atom 내의 여러 패키지를 다운받아 실행

  → Git Bash 프로그램을 Atom 내에서 사용 가능하게 세팅

    - Platformio-ide-terminal 사용

  → FireFox의 scratch pad 기능을 Atom 내에서 사용 가능하게 세팅

    - Atom-runner 사용

  → Git plus 이용하여 GitHub와 연동 완료

# Today Coding

## _**도전과제 1번 - 배열로 숫자 회오리모양 찍기**_

- 방식은 아래와 같이 구현했다.

(함수 1) N X N 배열의 모든 값을 0으로 초기화 해주는 함수

(함수 2) 좌측에서 우측으로 배열 한 칸 씩 숫자를 채워주는 함수

(함수 3) 위에서 아래로 배열 한 칸 씩 숫자를 채워주는 함수

(함수 4) 우측에서 좌측으로 배열 한 칸 씩 숫자를 채워주는 함수

(함수 5) 아래에서 위로 배열 한 칸 씩 숫자를 채워주는 함수

  **작동 순서**

(함수 1)→(함수 2)───→(함수 3)───→(함수 4)──→(함수 5)┐

             ↑   전체 배열을 다 채울때까지 2~5 반복.    ↓

             └────────────────────────────────────────┘
## **상세 Coding**

```javascript
/*
00 01 02 03 04
10 11 12 13 14
20 21 22 23 24
30 31 32 33 34
40 41 42 43 44
*/

var makeList = function(list, sizeNum) {  //배열 초기화 함수1
  for(var i = 0; i < sizeNum; i++) {
    list[i] = new Array(sizeNum);
  }
  for(var i = 0; i < sizeNum; i++) {
    for(var j = 0; j < sizeNum; j++) {
      list[i][j] = 0;
    }
  }
};

//좌에서 우로 숫자 채워주는 함수
var leftToRight = function(list, horNum, verNum, countNum) {
  console.log("바퀴시작");
  var range = list.length - horNum;
  for(var i = verNum; i < range; i++) {
    if (list[horNum][i] !== 0){
      console.log("111111");
      return 0;
    }else {
      list[horNum][i] = countNum;
      countNum++;
      console.log(list);
    }
  }
  verNum = i - 1;
  horNum ++;
  if (list[horNum][verNum] !== 0) {
    return 0;
  }else {
    upToDown(list, horNum, verNum, countNum);
  }
};

//위에서 아래로 숫자 채워주는 함수
var upToDown = function(list, horNum, verNum, countNum) {
  var range = 1 + verNum;
  for(var i = horNum; i < range; i++) {
    if (list[i][verNum] !== 0){
      return 0;
    }else {
      list[i][verNum] = countNum;
      countNum++;
      console.log(list);
    }
  }
  verNum --;
  horNum = i - 1;
  rightToLeft(list, horNum, verNum, countNum);
};

//우에서 좌로 숫자 채워주는 함수
var rightToLeft = function(list, horNum, verNum, countNum) {
  var range = list.length - (1 + horNum);
  for(var i = verNum; i >= range; i--) {
    if (list[horNum][i] !== 0){
      return 0;
    }else {
      list[horNum][i] = countNum;
      countNum++;
      console.log(list);
    }
  }
  verNum = i + 1;
  horNum --;
  downToUp(list, horNum, verNum, countNum);
};

//아래에서 위로 숫자 채워주는 함수
var downToUp = function(list, horNum, verNum, countNum) {
  var range = (1 + verNum);
  var l = 0;
  for(var i = horNum; i >= range; i--) {
    if (list[i][verNum] !== 0){
      //console.log(l);
      return 0;
    }else {
      list[i][verNum] = countNum;
      countNum++;
      console.log(list);
    }
  }
  verNum ++;
  horNum = i + 1;
  leftToRight(list, horNum, verNum, countNum);
};

//-----main program start-----
var size = 6;   //parseInt(prompt("사이즈를 입력해주세요."));
var list = [];
makeList(list, size);
//console.log(list);
leftToRight(list, 0, 0, 1);

var resultList = list.join("\n");
console.log(resultList);

```
