# SPRING FRAME WORK 의 전반적인 질문 / 지식들 정리

---
## 목차

- controller 내부에 있는 메서드들을 Handler method 라고 하는 이유
- controller advice, handler method argument resolver ?
- 소스 분석 가이드
- spring Bean의 라이프 사이클
  - Bean container 가 Bean으로 만드는 전체 과정
  - circular dependency error(exception)?
  - 초기화 하는 방법?
  - @Bean 을 사용하는 이유?
- Scope
- DI를 사용하는 이유 (DI기반으로 개발하는 장 단점 ? 이를 보완하기 위한 SPRING의 역할?), 런타임이란?

---
### 1. controller method ? handler method argument resolver ?

SPRING은, SPRING MVC framework 외에도 다양한 형태의 MVC framework를 지원할 수 있는 추상화된 인터페이스를 가지고있다.
이 추상화 된 개념을 Handler라고 한다. 코드 내부를 들여다보면, handler라는 말이 많이 나올것이다. 각각의 컨트롤러 하나하나 마다
handler라고 할 수 있다.

즉, 여러개의 MVC프레임워크를 지원하기 때문에, service단 까지는 SPRING으로 관리하고, controller단을 structure2 등의 MVC프레임워크를
사용해서 구현할 수 있다는 것이다.

구현체를 이해하려면, java reflection을 알아야 한다. SPRING MVC는 컨트롤러 단 까지를 의미하고,
service단 부터는 SPRING container 위에서 작동하는것을 의미.

---
### 2. controller advice, handler method argument resolver ?

- controller advice는 SPRING에서 지원하는 AOP중의 하나이다. (인터셉터라고 볼 수도 있겠지만, 사실은).
컨트롤러 실행 후에 특정 상황이 발생하면, controller method로 exception을 던지는 것.

- handler method argument resolver 역시 컨트롤러 메서드의 중복을 제거하는 방법 중 하나이다.
컨트롤러 메서드에서 필요로하는 파라메터에 대한 처리를 한다.

- handler method argument resolver의 여러 구현체들이 컨트롤러 메서드의 argument들을 맞는 값으로 지정해주고, 변환해주는 등의
역할을 한다.

- 즉 두가지 모두 controller method에서 발생하는 중복을 제거하기 위한 설계 패턴이다.

---
### 3. 코드 분석 가이드

- 인터페이스 기반으로 코드를 분석하다보면 하위 구현체를 제대로는 모르더라도 큰 그림은 그려진다.

- 요청 -> 디스패쳐 서블릿 -> handler mapping(요청 url에 해당하는 handler를 달라는 요청을 보낸다.) -> 디스패쳐 서블릿(handler를 받는다.) -> Handler

- SPRING container의 핵심 interface
  - Bean Factory (Bean의 생성 및 라이프사이클 관리) -> getBean()이 핵심 -> container의 핵심 엔진.
  - Application context

- 이런 (핵심)인터페이스들을 먼저 파보자. 그러면 큰 그림이 그려진다.

---
### 4. SPRING Bean의 라이프 사이클
라이프 사이클 - Bean의 생성부터 소멸까지의 과정.

#### 4-1. Bean container 가 Bean으로 만드는 전체 과정

- 과정:
  - 전체 class path상에서 bean으로 생성될 후보를 찾는다. 찾은 뒤, 목록으로 만든다. (Bean definition이라는 객체들의 모음으로 만듬. -> 이 클래스가 어떤 클래스들과 의존관계가 있으며, 기본 생성자는 있는지 등의 정보를 가짐.)
  - 인스턴스들을 생성한다. -> 어떻게 만들까? ->
  - 생성을 한 뒤에는, DI를 한다. (@Autowired , @Resource 등의 어노테이션에 대해 DI를 미리 해주어야 exception이 발생하지 않음. -> 서비스 가능 상태가 됨.)
  - Bean의 초기화 작업을 해야한다. Bean은 컨테이너가 만드는 존재이기 때문에, 초기화 매커니즘과 후처리 매커니즘이 필요하다.(개발자들이 직접 구현하는것이 아니기 때문에.)
  - 여기까지 완료하면, 준비상태가 완료된 것이다. 컨테이너 내부에 BeanFactory내부에 Map과 같은 형식으로 만들어진 인스턴스들을 관리한다.

초기화보다 DI가 먼저 일어난다는것이 중요하다. 초기화 시에 DI를 참조해야 하는 초기화가 있기 때문이다. (NullPointException을 방지)

#### 4-2. circular dependency exception은 어디서 발생하는가?

- A -> B, B -> A 와 같이 dependency 가 걸려있다. (A, B는 모두 Bean) 이러한 경우, A를 생성하려면 B가 필요하고, B를 생성하려면 A가 필요하다. 이럴 때에 의존성 주입시에 발생한다. 위의 과정에서 DI해주는 부분에서 발생한다고 할 수 있다.

#### 4-3. 그렇다면 초기화 하는 방법?

3가지가 있다. 애노테이션방법, 생성자로 하는방법 등 강의자료에 나와있음.

#### 4-4. Bean을 생성하는 애노테이션 종류에는 @Component , @Bean 등 여러개가 있는데, 왜 @Bean 을 사용하나?

우리가 직접 구현한 코드가 아니고, 외부 라이브러리에 있는 코드들을 Bean 으로 등록하고 싶을 때, @Bean 을 이용한다.

---
### 5. SPRING scope ?

SPRING frame work 의 default scope 는 싱글톤이다.
scope 에는 대표적으로 싱글톤, 프로토타입이 있다. (두가지만 이해하자.)

@Scope({value}) 와 같이 지정해줄 수 있고 (ex. `@Scope("prototype")`, `@Scope("singleton")`)

prototype로 설정하면, 요청이 올 때마다 Bean을 새로 만들어서 쓸 수 있다. 싱글톤은 한번 저장해두면 계속해서 가져다 쓰는 방식이다.

prototype = 상태값을 가진 Bean 객체, singleton = 상태값이 없는 Bean객체.

---
### 6. DI -> runtime ?

여기서 runtime이란,

A -> B(interface)

B1 - - -> B

B2 - - -> B

이런 상태에서, 컴파일이 끝난 상태에서도 A, B(B1)의 조합과 A, B(B2)의 조합은 서로 다른 기능을 하도록 구현할 수 있다.
실제 동작하고 있는 서비스를 변경한다는 의미의 runtime이 아니고, 컴파일이 끝난 뒤에도, 설정을 통해서 서비스가 다른 기능을 수행할 수 있게
만들어 줄 수 있다는 것이다. runtime에 대해 오해할 수 있다.(실제 서비스 실행중이라는 의미 X)

인터페이스 기반의 개발을 잘 해야 가능한 구조이다. 유연한 프로그램을 만들어 주는것이 핵심이다.

---
### 7. 부록 (추가 학습 필요 부분)

AOP ?
