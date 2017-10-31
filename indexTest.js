function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
  var i = 0;
  while(true) {
    if (document.getElementById('main').id === 0) {
      resultArray[i] = document.getElementById('main');
      i++;
    }else {
      break;
    }
  }
}

var resultArray = [];

var p = document.getElementById('main');
var p1 = document.getElementById('main1');
var p2 = document.getElementById('output');

p.innerHTML = "계산기 프로그램<br><br>";

var button = document.createElement('button');
button.id=1;
button.innerHTML = 1;
p.appendChild(button);

var button2 = document.createElement('button');
button2.id=2;
button2.innerHTML = 2;
p.appendChild(button2);

p2.innerHTML = "버튼" + button[0].id + "를 클릭";

/*
for(var i = 1; i<= 3; i++){
    var button = document.createElement('button');
    button.id="button"+i;
    button.innerHTML = i;

    (function(m) {
      button.onclick = function () {
          p2.innerHTML = "버튼" + m + "를 클릭";
      };
    })(i);

    p.appendChild(button);
}
*/
