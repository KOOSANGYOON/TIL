_**무작위 짝코딩 멤버를 추천해주는 프로그램**_
==============================================

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~javascript
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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
