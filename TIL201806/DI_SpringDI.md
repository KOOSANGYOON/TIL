## servlet / spring MVC

HTTP를 한단계 추상화 한 것이 servlet,

servlet 기반 하에 한단계 더 추상화 한 것이 SPRING MVC

SPRING은 servlet container 내에서 돌아간다.

@Resource 와 같은 어노테이션은 servlet container 에서 지원하는 기능이다.

---
### 그렇다면 container 란 무엇일까?

- 무엇인가의 life cycle를 관리해 주는것.
- servlet container란, servlet의 life cycle를 관리해 주는것이다.
- SPRING container란, SPRING BEAN의 life cycle를 관리해 주는것이다.

- 핵심은 life cycle 이다.

---
### life cycle란 무엇일까?

container가 없을때에는 개발자들이 직접 `초기화 -> 소멸` 등의 메서드의 처리를 수동으로 해주어야 했다.

하지만 SPRING BEAN 등의 life cycle을 관리하는 것이 개발자들이 담당하는 것이 아니라, SPRING container가 관리하는 것이다.

@Controller / @Service 등의 어노테이션만 붙여주면, 컨트롤러나 서비스가 그 역할을 수행할 수 있도록 만들어준다.

### 그렇다면 왜 필요한가? 단순히 귀찮아서 인가?

(싱글톤 객체란 무엇인지 정리 필요)

- 해당 클래스(인스턴스로 쓰이는)가 상태값을 가지는지 안가지는지 판단할 수 있어야 한다.

```java
@Resource
private QuestionRepository questionRepository;

private Question question;
```

- 여기서 question 은 상태를 가지고 있고, questionRepository 는 상태를 가지지 않고 있다.

- 이런 경우에는 question을 싱글톤으로 구현하게 되면, 멀티 스레드 환경에서 문제가 있을 수 있다.

- 상태를 가지지 않는 객체는 싱글톤으로 생성해서 사용하는것이 성능상으로 유리하다.

- 의존관계에 있는 객체들을 상호 연결시켜주는것이 (의존관계를 설정해주는 부분을) Dependency injection 이라는 기능을 통해 제공하는 것이다.

- 이에 대해서 CS적으로 학습하고 싶다면, 이런 질문을 받을 수 있다.
  - heap 메모리와, stack 메모리의 차이점에 대해 얘기해보시오.
  - 이것에 대해 정확히 판단이 설 수 있다면, 왜 싱글톤으로 만들 수 있는지, 왜 만들면 안되는지(상태값을 가지고있다면 / 없다면)에 대해 명확히 알 수 있다.

- 에노테이션에 대해서도 공부를 해야 SPRING이 돌아가는 원리를 깊게 파악할 수 있다.

---
### SPRING Dependency Injection 을 사용하는 이유는?

잘 생각해보고 / 공부해보고 정리하자.
