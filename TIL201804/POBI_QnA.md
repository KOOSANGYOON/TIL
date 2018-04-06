# POBI QnA

## Ajax 강의
- Ajax 로 구현했을때의 흐름에 대한 강의

---
### Ajax 의 기초

- Ajax 로 데이터를 주고받으면, 비동기 처리가 가능하다.
- 사용하지 않으면, 댓글 하나를 수정했을 뿐인데에도, 전체 html 문서를 다 내려받아 요청/응답을 주고받는다.

- Ajax 는 데이터를 json/xml 로 주고받는다.

### 질문의 목록 전체를 Ajax 로 구성하려면 ?

- Ajax가 구성되려면 html이 기본적으로 먼저 필요하다.
- 먼저 Ajax가 필요없는 부분은 html을 요청한다. (초기 1회 요청)
- html을 클라이언트에서 받았을 때, 서버에 Ajax 요청을 보낸다. (이 떄, 질문의 목록들이 json에 담겨있다.)

- 이 때의 장점 ?
  - 화면이 빨리뜬다. == 응답속도가 빨라진다. (한번에 html 전체를 다 구성하지 않으니,)

  - 때문에 보여줄 부분이 많은 페이지를 구성할 때에는 각 부분들을 나눠서 Ajax 로 구성할 수 있다.

- 이 때의 단점 ?
  - 개발 비용이 많이 든다. (json api 설계해야됨, js가지고 동적 html만들어야됨. 등등)

때문에 최근에는 Ajax를 많이 쓰지 않고 jquery 등을 이용해서 html을 동적으로 만들어준다.
(여러 방법이 있다.)

그래서 발전된것이 SPA 이다.

---
### SPA ?
- SPA = Single Page Application

- 초기 1회만 모든 html 받아오고, 이 후의 모든 요청들은 Ajax를 이용해서 보낸다.
- 처음 뜰 때에 성능이 느리고, 이 후부터는 굉장히 빠르다.

- 화면 내에서 UI가 바뀌는 부분이 많지않을 때, 이용하면 아주 효율이 좋다.

- 단점 ?
  - 클라이언트 역량이 되지 않으면 발생하는 일인데, 자바 스크립트가 한번 깨지면 화면을 refresh 하기 전까지 아무 기능도 사용할 수 없다.

- 그럼에도 issue가 되는 이유?
  - 백엔드 입장에서 보았을 때, html 서비스와 json 서비스를 모두 작업하게 되는 기존의 작업은 중복작업량이 많아질 수 밖에없다. 그렇지만, SPA를 사용할 경우에는 html 서비스는 초기 1회만 진행하고 나머지는 json api를 이용해서 통신하기 때문에 중복작업이 줄어든다. (또한 유지보수 비용이 줄어든다.)

  - 또한, 백엔드 / 프론트엔드의 구분이 명확해진다. 네트워크단으로 구분하여 json데이터를 보내고 응답받는 부분은 백엔드, 그 앞단은 프론트개발자가 담당한다. (개발 비용이 줄어듬)

---
### Ajax = async & non-blocking

- 따라서, 성능상 유리하다.

- 서버에서 응답이 왔을 때, 그때에 바로 명령을 수행하기 때문에 non-blocking
  - 이것을 구성하는 부분이 Ajax 내에 callback 함수이다.
  - (ex) success: onSuccess

- Ajax로 서버에 요청을 보내는 방식은 크게 2가지 방식이 있다. (client에서 -> server로)
  - queryString 형태로 보낸다.
    > get = (? key=value&)
    >
    > post = (헤더= {. . .}, 바디= {key=value})

  - json 형식으로 보낸다.

  - 두개의 차이 예시

  ```javascript
  var queryString = $("form[name=answer]").serialize();
  questionId=1&contents=abc
  ```

  ```javascript
  '{
    questionId: 1,
    contents: 'abc'
  }'
  ```

- json으로 데이터를 받을 때, controller 에서 파라미터로 받아줘야 한다. 이 때에

  ```java
  @PostMapping
  public String test(String inputdata) {
    . . .
  }
  ```
  가 아닌,
  ```java
  @PostMapping
  public String test(@RequestBody String inputdata) {
    . . .
  }
  ```
  로 사용해야 한다. ( @RequestBody 추가 필수!! )

---
### RESTful api
- 어떤식으로 설계할 지에 대한 설계 표준

- 한 쪽에서 문제가 생겼을 때, 다른 쪽에서 영향을 받지 않도록 만들어 줄 수 있다.

  (ex) 서버단에서 링크주소까지 다 가지고 있을떄를 생각해보라. URL이 변경되었을 때, 서버에서 가지고 있는 링크 주소를 변경해주면 프론트 단에서 변경해줄것이 없다.

  a

---
