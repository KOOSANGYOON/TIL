# DAY 7 (2017.10.24.)

# TIL (객체)

## **객체란 무엇인가?**
- 상태(속성)와 행동(메소드)을 가진다.
- 많은 데이터 값을 효율적으로 저장하고 관리하기 위해 사용한다.
- 꼭 필요한 데이터만 가지고 만들어져야 한다.

  *Q) 객체를 생성할 때 데이터가 많을수록 좋다?*

  > NO! 그렇지 않다. 오히려 가장 필요한 만큼만 데이터를 가진것이 좋다.

## **동기 / 비동기**
- 동기(Sync) : 순서대로 일을 처리한다.
  - 프로그램을 순서대로 실행하고, A가 B에게 일을 시켰다면, B가 일이 끝날때까지 A는 대기한다.
- 비동기(Async) : 순서대로 X, 복잡한 실행 순서.
  - A가 B에게 일을 시켰다면, B가 일이 끝나지 않더라도 A는 그대로 다른 업무 수행한다.
    B가 일을 종료하는 event가 언제 발생할 지 알 수 없다.

*javascript는 오래걸리는 작업은 무조건 비동기로 인식하고 처리한다.*

*따라서 모든 작업을 비동기로 처리하는 셈이다. 비동기로 처리하면 일의 처리속도는 빨라진다.*

*하지만 코드가 복잡해지는 단점이 있다.*

## **객체지향 프로그래밍의 특징**
- 유지보수가 쉬워진다.
- 대용량 (대형) 프로그램을 작성하기 쉬워진다.
- 객체와 객체가 협력해서 일을 한다.
- 객체는 자신의 일에 책임을 진다.
- 객체는 객체에 메세지를 보낸다.
- 객체는 자율적으로 일을 한다.

  *Q) this 키워드는 무엇인가요?*

  > 함수(메소드) 안에서 사용 시, 주로 함수를 소유한 객체를 가르킨다.
  > 객체 안에서 사용 시, 객체 자체를 가르킨다.

   ex) A라는 객체를 만들 때, 아래와 같이 사용한다.

```javascript
var A = {
  name: "KOO",
  hp: 100,
  mp: 100,
  power: 70,
  A.attack: function(target) {
    target.hp -= this.power;        //A.power라고 쓰지 않는다. 객체 내에서 자기자신을 의미.
  }
};
```

## **Level 1. 생성자 없이 객체를 생성하는 방법**

- 이 경우는 하드코딩 해야한다.

```javascript
var m1 = {
  name: "Honux",
  hp: 100,
  mp: 50,
  power: 10,
  attack: function(target) {
    target.hp -= this.power;
  },
  eat: function(target) {
    this.hp += target.energy;
  }
};

var m2 = {
  name: "Jack",
  hp: 100,
  mp: 50,
  power: 10,
  attack: function(target) {
    target.hp -= this.power;
  },
  eat: function(target) {
    this.hp += target.energy;
  }
};

var m3 = {
  name: "Koo",
  hp: 100,
  mp: 50,
  power: 10,
  attack: function(target) {
    target.hp -= this.power;
  },
  eat: function(target) {
    this.hp += target.energy;
  }
};

var c1 = {
  type: "Coffee",
  energy: 10
};
```

## **Level 2. 생성자를 만들어서 객체 생성 시**

- 한번 생성자 생성 후에는 자유롭게 생성 가능

```javascript
function Human(name, hp, mp, power) {
  this.name = name;   //m1.name = name; 와 같은 뜻
  this.hp = hp;
  this.mp = mp;
  this.power = power;

  this.attack = function(target) {
    target.hp -= this.power;
  };
  this.show = function() {
    console.log("%s %d %d %d", this.name, this.hp, this.mp, this.power);
  }
  this.eat = function(target) {
    this.hp += target.energy;
  }
};

function Food(name, energy) {
  this.name = name;
  this.energy = energy;
}
```

## **Level 3. prototype을 이용하여 객체 내 메소드 정의**

- 각각의 객체마다 같은 이름이지만 다른 공간을 차지하는 메소드들을 하나로 묶어준다.
- 이로인해 효율적인 프로그래밍이 가능해진다.
- 위의 attack(target), eat(target) 등을 따로 선언해준다.

```javascript
Human.prototype.attack = function(target) {
  target.hp -= this.power;
}

Human.prototype.eat = function(target) {
  this.hp += target.energy;
}

Human.prototype.show = function() {
  console.log("%s %d %d %d", this.name, this.hp, this.mp, this.power);
}

Human.prototype.showAll = function() {
  var result = Object.keys(this);
  console.log(result.join());
  console.log("%s %d %d %d", this.name, this.hp, this.mp, this.power);
}

var keys = Object.keys(m1);

for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  console.log(key + ": " + m1[key]);
}
```

# Today Code

## **1단계 : 배열을 만들고 1~100까지 임의의 정수를 20개 넣는다.**

```javascript
var mkList = function(list) {
  for(var i = 0; i < 20; i++) {
    var randomNum = Math.ceil(100 * Math.random());
    list[i] = randomNum;
  }
}

var resultList = [];
mkList(resultList);
```

## **1.5단계 : 배열에서 최대값과 최소값을 구하는 함수 myMin(), myMax()를 구현한다.**

```javascript
var myMin = function(list) {
  var temp = 0;
  for(var i = 0; i < list.length; i++) {
    if(list[i] > list[i + 1]) {
      temp = list[i + 1];
      list[i + 1] = list[i];
      list[i] = temp;
    }
  }
}

var myMax = function(list) {
  var temp = 0;
  for(var i = 0; i < list.length; i++) {
    if(list[i] < list[i + 1]) {
      temp = list[i + 1];
      list[i + 1] = list[i];
      list[i] = temp;
    }
  }
}

var resultList = [];
myMin(resultList);
myMax(resultList);
```

## **1.8단계 : 배열의 주어진 위치의 원소를 교체하는 Swap()을 구현한다.**
```javascript
(ex)
var mySwap = function(arr, idx1, idx2) {
  //...
}
```

```javascript
var mySwap = function(list, idx1, idx2) {
  var temp = 0;
  temp = list[idx1];
  list[idx1] = list[idx2];
  list[idx2] = temp;
}

var resultList = [];
mySwap(resultList, 0, 3);
```

## **2단계 : 이 배열을 정렬한다. (직접 구현)**

- *mySort(arr)*

```javascript
var mySort = function(list) {
  for(var i = 0; i < list.length - 1; i++) {
    myMax(list);
  }
  console.log("내림차순 결과 : " + list);
  for(var i = 0; i < list.length - 1; i++) {
    myMin(list);
  }
  console.log("오름차순 결과 : " + list);
}

var resultList = [];
mysort(resultList);
```

## **2.5단계 : Array.sort() 를 사용하여 내림차순을 구한다.**

```javascript
resultList.sort(function(a, b) {
    return b - a;
});
```
