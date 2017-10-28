# DAY 9 (2017.10.26.)

# TIL(조건문/반복문 & HTML기초)


---
**복습부분**

- 다음과 같은 프로그램을 구현해보자.
 - name 안에 들어있는 이름과 동일한 이름의 변수값을 10으로 바꾼다.
 - 바꾸고 해당 변수를 출력해준다.

    → 배열의 장점을 이용하면 된다.
  > 장점1. 한꺼번에 여러 값을 저장할 수 있다.

   > 장점2. idx값을 이용하여 저장된 값을 쉽게 바꿔줄 수 있다.

```javascript
//  (ex)

var a = 3;
var b = 5;
var c = 7;

var name = prompt("변수이름");

console.log(name);

var arr = [1, 2, 3];

var idx = parseInt(prompt("위치"));
arr[idx];
console.log(arr[idx]);
```

---
## `객체`에서도 사용할 수 있다.

(객체를 배열처럼 제어하는 이유)

**(ex 1) 잘못된 코딩**
```javascript
var h = {name: "해나",
         status: "잠못잠",
         money: 99999999};
h.money -= 5000;

var x = prompt("어떤 속성을 바꿀래요?");   //"money" 입력
var y = prompt("어떤 값으로 바꿀래요?");   //"10억" 이라고 입력

console.log(x, y);

h.x = y;    //이렇게 쓰면 변형되지 않는다.. ㅋㅋ

console.log(h);
```

> 결과값 : Object { name: "해나", status: "잠못잠", money: 99999999, x:"십억"}


**(ex 2) 코딩 수정(올바른 코딩)**

```javascript
var h = {name: "해나",
         status: "잠못잠",
         money: 99999999};
h.money -= 5000;

var x = prompt("어떤 속성을 바꿀래요?");   //"status" 입력
var y = prompt("어떤 값으로 바꿀래요?");   //"궁금함" 이라고 입력

console.log(x, y);

h[x] = y;    // h[x] = h["money"];

console.log(h);
```

> 결과값 : Object { name: "해나", status: "궁금함", money: 99999999"}

---
## (조건문과 반복문 & HTML의 기본)

### for ... in 문법

```javascript
var a = [2, 4, 6, 8, 10];
for (var x in a) {
  console.log(x);
}
```
> 결과값 : 0 1 2 3 4  → 배열의 인덱스가 찍혀 나온다.

```javascript
//따라서 배열은 쓰지 않고, 객체를 사용함.

var h = {name: "해나",
         status: "잠못잠",
         money: 99999999};

for (var x in h) {
  console.log(x);
}
```
> 결과값 : name status money → 객체의 key 값이 출력된다.

- _**객체의 키와 값을 같이 출력하려면 ?**_

```javascript
var h = {name: "해나",
         status: "잠못잠",
         money: 99999999,
         age: 23,
         pc: 5,
         pet: ['에비츄', '스누피', '가필드'],
         work: function(money) {
           this.money += money;
         }
       };
// 위와 같이 객체가 있을 때,

var result = 0;   //숫자 데이터를 모두 합하기 위한 변수 선언
for (var x in h) {
  console.log("%s: %s", x, h[x]);   //키와 값이 같이 출력됨.

  if (typeof(h[x]) === "number") {
    result += h[x];   //숫자 데이터 합산
    console.log("debug", h[x], result);    //debug 하는 부분
  }
}
console.log(result);    //합산 된 값 출력
```

## 조건문

- const a = 변수의 값을 변경할 수 없다.
- let a = 범위를 벗어나면 변수가 사라진다. 값을 변경할 수 있다.
- var a = 범위를 벗어나도 변수가 사라지지 않는다. 값도 변경 가능.

### break 구문
- 1번 예제

```javascript
console.log("start");

for (var i = 0; i < 5; i++) {
  console.log("1 %d", i);
  if (i ==3) {
    break;
  }
  console.log("2 %d", i);
}
console.log("%d", i);
console.log("end");
```

- 2번 예제

```javascript
console.log("start");

for (let i = 0; i < 5; i++) {
  console.log("1 %d", i);
  if (i ==3) {
    break;
  }
  console.log("2 %d", i);
}
console.log("%d", i);
console.log("end");
```

> 1번과 2번을 실행한 결과값은 달라진다.

> var i, 와 let i 로 선언한 차이이다. 확인해보자.

### continue 구문

```javascript
console.log("start");

for (var i = 0; i < 5; i++) {
  console.log("1 %d", i);
  if (i >=3) {
    continue;
  }
  console.log("2 %d", i);
}

console.log("end");
```

> continue를 만나는 순간 반복문 처음으로 돌아간다.

> for문에서는 for(①, ②, ③) 중 ③번 으로 가서 반복한다.

# HTML 과 WWW

## DOM (Document Object Model)

- 문서를 객체를 이용하여 트리구조로 표현함
- 표준 : W3CDOM
- 구현체 : Gecko (firefox의 개발 엔진), Webkit (apple의 개발 엔진) 등

> DOM을 BROWSER에 뿌려주는(찍어주는)것이 Webkit

## 엘리먼트 (Elememt)

- 여는 태그와 닫는 태그로 이루어짐
- 태그 사이에 콘텐츠를 가짐
- 태그 안에 속성과 속성의 값을 가짐
- 단일 태그에 콘텐츠가 없을 경우 <tag /> 처럼 표현하는것이 원칙.

 하지만 그냥 여는 태그만 가질수도 있다.

## 속성 (Attributes)

```HTML
<a href="gttp://codesquad.kr" title="코드스쿼드">
 ```
 - 여기에서 a 태그의 콘텐츠는 2개이다.

   - href
   - title

### 블록 엘리먼트
- `p, h1, div` 처럼 줄이 바뀌는 엘리먼트

### 인라인 엘리먼트
- `span, img, input, button, a` 처럼 줄바뀜이 없는 엘리먼트

### html 객체

- HTML 문서도 객체로 간주된다.

---
## 연습문제

- 1. 숫자게임을 개량해 봅시다.
- 2. w3c html과 css를 공부해봅시다.
- 3. 간단한 웹 페이지를 골라서 비슷하게 만들어봅시다.


## _**도전과제!!**_
> 생활코딩 사이트에서 `웹 애플리케이션 만들기`

> 도전해보기!
