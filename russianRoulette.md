러시안룰렛 게임
==============

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
var randomNum = function() {    //1 ~ 6 사이의 랜덤 넘버를 뽑는 함수(총알이 들어있는 순서)
  var randomNum = Math.ceil(6 * Math.random());
  return randomNum;
}


var player1 = prompt("참여자 1의 이름을 알려주세요.");
var player2 = prompt("참여자 2의 이름을 알려주세요.");

var dieNum = randomNum();

//var firstPlayer = prompt("누가 먼저 시도 하겠습니까? (1 혹은 2 )")

for (var i = 1; i <= 6; i++) {
  alert("<" + i + " 번째 SHOT.>" + player1 + " 님의 차례입니다.");
  if (i === dieNum) {
    alert("빵!!");
    alert(player1 + " 님께서 죽었습니다.");
    break;
  }else {
    alert("철컥!");
    alert("살았습니다. 다음 턴으로 넘어갑니다.");
  }
  i = i + 1;
  alert("<" + i + " 번째 SHOT.>" + player2 + " 님의 차례입니다.")
  if (i === dieNum) {
    alert("빵!!");
    alert(player2 + " 님께서 죽었습니다.");
    break;
  }else {
    alert("철컥!");
    alert("살았습니다. 다음 턴으로 넘어갑니다.");
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
