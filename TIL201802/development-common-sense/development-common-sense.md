# TIL (개발 상식)

# 2018.02.01 ~ 2018.02.23 (예정)

## 1. 객체 지향 프로그래밍이란 무엇인가 ?

## 2. RESTful API란 ?

## 3. TDD란 무엇이며 어떠한 장점이 있는가 ?

## 4. 함수형 프로그래밍 ?

## 5. MVC 패턴이란 무엇인가 ?

## 6. Git과 GitHub에 대해서

---
## 1. 객체 지향 프로그래밍이란 무엇인가 ?

### Object Oriented Programming

객체지향 프로그래밍이란 프로그램을 어떻게 설계해야 하는지에 대한 일종의 개념이자 방법론이다.

- 어떻게 등장했는가 ?

  객체 지향 프로그래밍이 등장하기 이전 시대에서는, `'컴퓨터가 사고하는대로'`, `'컴퓨터가 처리하는 순서대로'` 프로그래밍을 하는것이 프로그래밍 패러다임이었다. 모든 프로그램을 단순히 데이터와 처리 방법으로 나누었고, `'어떻게', '어떤' 논리를 '어떠한 순서대로' 써나가는 것인가` 로 간주되었다. 이러한 프로그래밍을 `절차적 프로그래밍` 이라고 한다. 그렇기 때문에 프로그램 자체가 가지는 기능에 대해서만 신경을 썼고, 이 프로그램이 어떤 데이터를 취급하는 것인지에 대해서는 관심이 없었다. 하지만 이러한 코딩 기법은 간단한 알고리즘을 처리하기엔 훌륭했지만, 조금만 복잡해지면 순서도로 나타내는것이 불가능할 정도로 복잡한 코드를 만들어내기 일쑤였다.

  이를 극복하기 위한 대안으로 등장한 것이 바로 객체 지향 프로그래밍이다. 큰 문제를 작게 쪼개는 것이 아니라, 먼저 작은 문제들을 해결할 수 있는 객체들을 만든 뒤, 이 객체들을 조합해서 큰 문제를 해결하는 상향식(Bottom-up) 해결법을 도입한 것이다. 뛰어난 재사용성 때문에, 각각의 객체들을 일단 한번 독립성/신뢰성이 높게 만들어 놓기만 하면 코딩에 드는 비용과 시간이 굉장히 절감되었다.

- 객체 지향 프로그래밍 ?

  객체 지향 프로그래밍이란 `인간 중심적 프로그래밍 패러다임`이라고 할 수 있다. 즉, 현실 세계를 프로그래밍으로 옮겨와 프로그래밍하는 것을 말한다. 현실 세계의 사물들을 객체라고 보고 그 객체로부터 개발하고자 하는 애플리케이션에 필요한 특징들을 뽑아와 프로그래밍 하는 것이다. 이것을 `추상화`라한다.

- 객체 지향 프로그래밍의 장점 ?

  OOP로 코드를 작성하면 이미 작성한 코드에 대한 `재사용성`이 높다. 자주 사용되는 로직을 라이브러리로 만들어두면 계속해서 사용할 수 있으며 그 신뢰성을 확보 할 수 있다. 또한 라이브러리를 각종 예외상황에 맞게 잘 만들어두면 개발자가 사소한 실수를 하더라도 그 에러를 컴파일 단계에서 잡아낼 수 있으므로 `버그 발생이 줄어든다`. 또한 내부적으로 어떻게 동작하는지 몰라도 개발자는 라이브러리가 제공하는 기능들을 사용할 수 있기 때문에 `생산성`이 높아지게 된다. 객체 단위로 코드가 나눠져 작성되기 때문에 `디버깅이 쉽고 유지보수에 용이`하다. 또한 데이터 모델링을 할 때 객체와 매핑하는 것이 수월하기 때문에 요구사항을 보다 명확하게 파악하여 프로그래밍 할 수 있다.

- 객체 지향 프로그래밍의 단점 ?

  객체 간의 정보 교환이 모두 메시지 교환을 통해 일어나므로 실행 시스템에 `많은 overhead가 발생`하게 된다. 하지만 이것은 하드웨어의 발전으로 많은 부분 보완되었다. 객체 지향 프로그래밍의 치명적인 단점은 함수형 프로그래밍 패러다임의 등장 배경을 통해서 알 수 있다. 바로 객체가 상태를 갖는다는 것이다. 변수가 존재하고 이 변수를 통해 객체가 예측할 수 없는 상태를 갖게 되어 애플리케이션 내부에서 버그를 발생시킨다는 것이다. 이러한 이유로 함수형 패러다임이 주목받고 있다. 또한, 객체 지향 프로그래밍의 강점인 상속을 무분별하게 이용하여 다중 상속이 되면 코드를 읽기에 매우 어려워진다. 이렇게 상속이 복잡하게 얽혀 소스 분석이 어려워진 코드는 라자냐 코드 라고 불리워 진다. (이탈리아 음식 라자냐의 생김새처럼 복잡하게 꼬인 꼴의 코드)

- 객체 지향적 설계원칙

  - SRP(Single Responsibility Principle) : 단일 책임 원칙
클래스는 단 하나의 책임을 가져야 하며 클래스를 변경하는 이유는 단 하나의 이유이어야 한다.

  - OCP(Open-Closed Principle) : 개방-폐쇄 원칙
확장에는 열려 있어야 하고 변경에는 닫혀 있어야 한다.

  - LSP(Likov Substitution Principle) : 리스코프 치환 원칙
상위 타입의 객체를 하위 타입의 객체로 치환해도 상위 타입을 사용하는 프로그램은 정상적으로 동작해야 한다.

  - ISP(Interface Segregation Principle) : 인터페이스 분리 원칙
인터페이스는 그 인터페이스를 사용하는 클라이언트를 기준으로 분리해야 한다.

  - DIP(Dependency Inversion Principle) : 의존 역전 원칙
고수준 모듈은 저수준 모듈의 구현에 의존해서는 안된다.

- 객체 지향 설계 과정
1. 제공해야 하는 기능을 찾고 (혹은 세분화하고) 그 기능에 알맞은 객체를 할당한다.

-> 기능을 구현하는데 필요한 데이터를 객체 내부에 추가한다.

-> 객체에 데이터를 먼저 추가하고 그 데이터를 이용하는 기능들을 넣는다.

-> 각 객체내의 데이터들을 private로 설정하는 등 내부로 꼭꼭 감춘다.(== 최대한 캡슐화한다.)

2. 객체 간에 어떻게 메세지를 주고받을 지 결정한다.

### Reference

- https://github.com/JaeYeopHan/Interview_Question_for_Beginner

---
## 2. RESTful API란 ?

 ![Image](./restapi.png)

### RESTful API의 탄생

  REST는 `REpresentational State Transfer` 의 약자이며, 이를 있는 그대로 해석하면, '재현 상태 전송' 이다. 2000년도에 로이 필딩 (Roy Fielding)의 박사학위 논문에서 최초로 소개되었다. 로이 필딩은 HTTP의 주요 저자 중 한 사람으로 그 당시 웹(HTTP) 설계의 우수성에 비해 제대로 사용되어지지 못하는 모습에 안타까워하며 웹의 장점을 최대한 활용할 수 있는 아키텍처로써 REST를 발표했다.

### REST 의 구성

  REST 는 다음의 세가지로 이루어져 있다.

  - 자원(RESOURCE) - URI
  - 행위(Verb) - HTTP METHOD
  - 표현(Representations)


### REST 의 특징

  1) Uniform (유니폼 인터페이스)

  > Uniform Interface는 URI로 지정한 리소스에 대한 조작을 `통일되고 한정적인 인터페이스로 수행`하는 아키텍처 스타일이다.

  2) Stateless (무상태성)

  > REST는 무상태성 성격을 갖는다. 즉, 작업을 위한 `상태정보를 따로 저장하고 관리하지 않는다.` 세션 정보나 쿠키정보를 별도로 저장하고 관리하지 않기 때문에 API 서버는 들어오는 요청만 단순히 처리하면 되기 때문에, `서비스의 자유도가 높아지고` 서버에서 `불필요한 정보를 관리하지 않음으로써 구현이 단순` 하다.

  3) Cacheable (캐시 가능)

  > REST의 가장 큰 특징 중 하나는 HTTP라는 기존 웹표준을 그대로 사용하기 때문에, 웹에서 사용하는 기존 인프라를 그대로 활용할 수 있다. 따라서 HTTP가 가진 캐싱 기능이 적용 가능하다. HTTP 프로토콜 표준에서 사용하는 `Last-Modified태그` 나 `E-Tag` 를 이용하면 캐싱 구현이 가능하다.

  4) Self-descriptiveness (자체 표현 구조) - code on demand

  > REST의 또 다른 큰 특징 중 하나는 REST API 메시지만 보고도 이를 쉽게 이해 할 수 있는 자체 표현 구조로 되어 있다는 것이다.

  5) Client - Server 구조

  > REST 서버는 API 제공하고, 클라이언트는 사용자 인증이나 컨텍스트(세션, 로그인 정보)등을 직접 관리하는 구조로 각각의 역할이 확실히 구분되기 때문에 클라이언트와 서버에서 개발해야 할 내용이 명확해지고 서로간 의존성이 줄어든다.

  6) Hierarchical system (계층형 구조) - layered system

  > REST 서버는 다중 계층으로 구성될 수 있으며 보안, 로드 밸런싱, 암호화 계층을 추가해 구조상의 유연성을 둘 수 있고 PROXY, 게이트웨이 같은 네트워크 기반의 중간매체를 사용할 수 있다.

### RESTful 하게 API를 디자인 한다는 것은 무엇을 의미하는가?
1. 리소스 와 행위 를 명시적이고 직관적으로 분리한다.

  - 리소스는 `URI` 로 표현되는데 리소스가 가리키는 것은 `명사` 로 표현되어야 한다.

  - 행위는 `HTTP Method` 로 표현하고, `GET(조회)`, `POST(생성)`, `PUT(기존 entity 전체 수정)`, `PATCH(기존 entity 일부 수정)`, `DELETE(삭제)` 을 분명한 목적으로 사용한다.

  |  <center>METHOD</center> |  <center>역할</center> |
  |:--------:|:--------:|
  |**POST**  | <center>POST를 통해 해당 URI를 요청하면 리소스를 생성합니다.</center> |
  |**GET**   | <center>GET를 통해 해당 리소스를 조회합니다. 리소스를 조회하고 해당 도큐먼트에 대한 자세한 정보를 가져온다.</center> |
  |**PUT** | <center>PUT를 통해 해당 리소스를 수정합니다.</center> |
  |**DELETE** | <center>DELETE를 통해 리소스를 삭제합니다.</center> |

2. Message는 Header와 Body를 명확하게 분리해서 사용한다.

  - Entity에 대한 내용은 body에 담는다.

  - 애플리케이션 서버가 행동할 판단의 근거가 되는 컨트롤 정보인 API 버전 정보, 응답받고자 하는 MIME 타입 등은 header에 담는다.

  - header와 body는 http header 와 http body로 나눌 수도 있고, http body에 들어가는 json 구조로 분리할 수도 있다.

3. API 버전을 관리한다.

  - 환경은 항상 변하기 때문에 API의 signature 가 변경될 수도 있음에 유의하자.

  - 특정 API를 변경할 때는 반드시 하위호환성을 보장해야 한다.

4. 서버와 클라이언트가 같은 방식을 사용해서 요청하도록 한다.

  - 브라우저는 form-data 형식의 submit으로 보내고 서버에서는 json 형태로 보내는 식의 분리보다는 json으로 보내든, 둘 다 form-data 형식으로 보내든 하나로 통일한다.

  - 다른 말로 표현하자면 URI가 플랫폼 중립적이어야 한다.

### RESTful API 디자인 가이드

  REST API 설계 시 가장 중요한 항목은 다음의 2가지로 요약할 수 있다.

  - URI는 정보의 자원을 표현해야 한다.
  - 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현한다.

  > 잘못된 예)
  >
  > GET /members/delete/1

  delete와 같은 행위에 대한 표현이 들어가서는 안된다.

  > 올바른 예)
  >
  > DELETE /members/1

  - URI 설계 시 주의할 점

    1) 슬래시 구분자(/)는 계층 관계를 나타내는데 사용

    > http://restapi.example.com/animals/mammals/whales

    2) URI 마지막 문자로 슬래시(/)를 포함하지 않는다.

    REST API는 분명한 URI를 만들어 통신을 해야 하기 때문에 혼동을 주지 않도록 URI 경로의 마지막에는 슬래시(/)를 사용하지 않는다.

    > http://restapi.example.com/houses/apartments/ (X)
    >
    > http://restapi.example.com/houses/apartments  (0)

    3) 하이픈(-)은 URI 가독성을 높이는데 사용 && 밑줄(\_)은 URI에 사용하지 않는다.

    불가피하게 긴 URI경로를 사용하게 된다면 하이픈을 사용해 가독성을 높인다. 그렇지만, 밑줄때문에 밑줄(\_)이 가려서 잘 보이지 않을 수 있다. 따라서 밑줄(\_)은 사용하지 않는다.

    4) URI 경로에는 소문자가 적합하다.

    대소문자에 따라 다른 리소스로 인식하게 되기 때문에, URI 경로에는 대문자를 사용하지 않는다.

    5) 파일 확장자는 URI에 포함시키지 않는다.

    > http://restapi.example.com/members/soccer/345/photo.jpg (X)


### 장/단점 요약

- 장점

  - Open API를 제공하기 쉽다

  - 멀티플랫폼 지원 및 연동이 용이하다.

  - 원하는 타입으로 데이터를 주고 받을 수 있다.

  - 기존 웹 인프라(HTTP)를 그대로 사용할 수 있다.

- 단점

  - 사용할 수 있는 메소드가 4가지 밖에 없다.

  - 분산환경에는 부적합하다.

  - HTTP 통신 모델에 대해서만 지원한다.

### Reference

- http://meetup.toast.com/posts/92