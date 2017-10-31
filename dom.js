var h1 = document.createElement("h1");
h1.innerHTML = '코딩 놀이터';
h1.id = "title";
document.body.appendChild(h1);


var div = document.createElement("div");
div.id = "main";
document.body.appendChild(div);

var p = document.createElement("p");
p.innerHTML = "0000 0000";
p.id = "display<br>";
document.body.appendChild(p);

var button = document.createElement("button");
button.id = "btn1";
button.innerHTML = "click me";
div.appendChild(button);
