var result = Math.ceil(100 * Math.random());
var challengeNum = 1;
console.log(result);

document.write("게임을 시작합니다.<br>");

while(1) {
  var inputNum = parseInt(prompt("숫자를 입력해주세요."));
  if (inputNum > result) {
    document.write(challengeNum + " 번째 시도, 땡! " + inputNum + "보다 작은 값입니다.<br>");
  }else if (inputNum < result) {
    document.write(challengeNum + " 번째 시도, 땡! " + inputNum + "보다 큰 값입니다.<br>");
  }else {
    document.write(challengeNum + " 번째 시도, 딩동댕! 정답은 " + inputNum + "입니다!<br>");
    break;
  }
  challengeNum++;
}

document.write("게임이 끝났습니다.<br>");
