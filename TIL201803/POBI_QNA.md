# POBI QNA

## TODO LIST
## - blocking / non-blocking 학습하기
## - API / 웹 서비스
## - Servlet / JSP
## - EJB 란?

---
## - blocking / non-blocking 학습하기

- 제대로 이해하면 node.js 를 이해하기 쉬워진다.

---
## - API / 웹 서비스

- 웹 서비스 :

  > 1. 홈페이지 등 웹 상에서 이루어지는 서비스.(일반적으로 아는 의미)
  >
  > 2. 과거에는 RESTFUL API 의 의미로 쓰였다. (서로 다른 데이터 간의 정보를 교환하는
       서비스가 있었고, 이를 웹 서비스라고 통칭했었다.)

- API :

  > 처음부터 내가 다 만드는 것이 아니라, 누군가가 제공해주는 클래스/라이브러리 등을 이용하여
    개발하는 때가 있다. 이때에 제공되는 클래스/라이브러리 등을 API라고 한다.

---
## - Servlet / JSP

- 파싱 / 마샬링 / 시리얼라이져블

  > web server ---- HTTP ---- client

  HTTP 에서 보낸 정보를 내가 사용할 수 있는 상태로 가공하는것을 파싱이라고 한다.
  HTTP 를 개발자들이 사용하기 쉬운 (JAVA OBJECT 등) 로 가공하는것이 파싱이다.

  > JSON <----> JAVA.obj

  이러한 과정은 `마샬링 / 언마샬링` 혹은 `시리얼라이져블 / 디시리얼라이져블` 한다고 한다.

- JSP 란?

  동적으로 HTML을 만들어주는 (MUSTACHE) 와 같은 것이다.

- Servlet 이란?

  `HTTP` ---사용하기 쉽게---> `Servlet` ---추상화를 통해 API제공---> `SPRING`

- Servlet 은 DB의 관점과 관계가 똑같다.

  `DB` ---JAVA에서 사용하기 편하도록---> `JDBC` ---사용하기 쉽게 표준으로 만든것---> `ORM`


---
## - EJB 란?

- EJB : Enterprise Java Bean

  > 1. 각 기능을 잘게 나누어 각각의 서버를 두고(기능별) 유지하자 라는 규약
  >
  > 2. 표준이 굉장히 복잡하다.(Enterprise 보면 사이즈 나온다..) 한 부분이 문제가 일어나면 전체에 영향을 끼치게 되는 구조였다.
  >
  > 3. 학습비용이 굉장히 크다.
  >
  > 4. 성능이 굉장히 느리다.

  이와 같은 문제들 때문에 빠르게 없어져버린 규약이다. 이 때에 혜성처럼 등장한것이 바로 SPRING 이다.

  현재는 SPRING 내에서도 기능을 작게 나누되, RESTFUL API를 이용하여 간편하게 개발하는
  Micro Service Architecture (MSA) 방식으로 발전해나가고 있는 중이다.

---
## - CGI (Common Gateway Interface) 란?

- 서버측에서 웹 서비스를 다룬 첫번째 인터페이스 였다.
