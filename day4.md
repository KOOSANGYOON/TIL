# Today Coding

## 러시안룰렛 게임

### _**my code**_

```javascript
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

```

### _**Honux code**_

```javascript
// 러시안 룰렛 구현하기

//초기 상태 - 총은 비어있는 상태 (0 = empty, 1 = bullet)
var gun = [0, 0, 0, 0, 0, 0];
//탄창의 위치
var bPos = 0;

var inputName = function(n) {
  var name = prompt("사용자 " + n + " 의 이름을 입력해주세요.");
  return name;
}

//player shot gun.
//return true if alive
var shot = function(player) {
  console.log("당겼다.");
  var alive = true;
  if (gun[bPos] == 1) {
    alive = false;
    console.log("빠아아아아아아아아아앙!!!");
    console.log(player + " : 컥");
  }else {
    console.log(player + " : 휴~");
  }
  bPos++;
  return alive;
}

//fill one bullet to random position of gun
var reload = function(chong) {
  var i = Math.random() * 6;  //0.01 ~ 5.99
  i = Math.floor(i);          //0, 1, 2, 3, 4, 5
  chong[i] = 1;
}

//====START POINT====

console.log("게임을 시작하지.");
var p1 = inputName(1);
var p2 = inputName(2);

//총을 한 발 넣는다.
reload(gun);
console.log(gun);

// 6번 반복
for (i = 0; i < 3; i++) {
  var alive;
  alive = shot(p1); //p1이 쏜다.
  if (!alive) {
    alert(p1 + " 가 죽었습니다.");
    break;
  }
  alive = shot(p2); //p2이 쏜다.
  if (!alive) {
    alert(p2 + " 가 죽었습니다.");
    break;
  }
}
console.log("The end.");
```
