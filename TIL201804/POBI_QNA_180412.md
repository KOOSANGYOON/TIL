# POBI QnA (18.04.12)

## interceptor

---
### interceptor
- 인터셉터의 역할
  - spring mvc와 관련이 되어 있다.
  - controller 요청에 대해서 끼어들기 하는 부분.
  - controller 요청 이전에 처리해야 할 것이 있을 때, 사용하면 된다. (요청과 응답 모두 가로채서 처리할 수 있다.)

- 사용하는 이유
  - controller 내의 반복적(중복이 많은) 작업을 줄이기 위해 사용한다.

- 인터셉터 내에 들어갈 수 있는 부분들 (예시)
  - 유효성 체크 부분

  > (ex) controller에서 요청을 보내고 나서, 응답을 받을때까지의 실행시간을 구하고 싶다. 어떻게 해야 할까?

  ```java
  //기존의 방식
  publi String test() {
    long start = System.currentTimeMillis();
    .
    .
    .
    long end = System.currentTimeMillis();
    System.out.println("execution time : " + (end - start));
    return String;
  }
  ```
  - 이와 같은 코드는 옳지 않다. (모든 메서드마다 중복이 생긴다. 비용/유지보수에 문제)

- 사용하는 방법
  - (1) HandlerInterceptor 를 import 한다.
  - (2) 하지만, preHandle / postHandle / 등 3가지 메서드를 항상 구현해야 한다.
  - (3) 이는 귀찮기 때문에, 아래와 같이 만들어 사용한다.

  ```java
  //기능을 구현하는 법
  public class PerformanceInterceptor extends HandlerInterceptorAdapter {
    public static final String START_TIME = "START_TIME";
    @Override   //controller 실행 전에 실행되는 부분
    public boolean preHandle(HttpServletRequest, HttpServletResponse, Object handler) {
      long start = System.currentTimeMillis();
      //두 메서드 사이에 같은 request(사용자의 요청) 을 파라메터로 가지기 때문에, 이에 데이터를 담아서 넘긴다.
      request.setAttribute("START_TIME", start);
      return super.preHandle(request, response, handler);
    }

    @Override   //controller 실행 후에 실행되는 부분
    public void postHandle(HttpServletRequest, HttpServletResponse, Object handler) {
      long start = (long)request.getAttribute(START_TIME);
      long end = System.currentTimeMillis();
      System.out.println("execution time : " + (end - start));
    }
  }
  ```

  - 기능을 구현한 이후에는,

  - @Bean 어노테이션을 이용해서 interceptor를 등록하고,
  ```java
  @Bean
  public
  ```
  - @Override 로 등록완료해서 인터셉터를 spring에서 인식할 수 있도록 만들어준다.
  ```java
  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(performanceInterceptor());
  }
  ```

- 이와 같이 구성을 완료하면, controller 부분을 하나도 건드리지 않고도 인터셉터로 모든 중복업무가 처리된다.

---

대부분의 spring이 관리하는 컨트롤러들은 인스턴스 하나를 가지고 재사용되는 경우가 많다. (static 처럼 사용된다.) 이 문제가 항상 발생할 수 있으므로 주의하자.

- AOP : aspect oriented programming (관점 기반 프로그래밍)
  - business 로직(실제 프로그램을 구동시키는 로직)과 달리 infra 로직은 성능을 높이고, 보안을 강화하기 위해 처리하는 로직이다. 이를 위해 AOP를 사용하면 되는 것이다. (인터셉터는 AOP중 하나의 기법이다.)

- point-cut을 어떻게 적용하느냐에 따라 인터셉터가 적용되는 범위가 달라진다.

- 인터셉터는 target을 컨트롤러 내에 있는 메서드에 대해서만 지원 가능한 advice이다. (다른 부분에서는 사용 불가하다.)

- 그래서 나온것이 spring AOP 이다. (repository 나 service 등 여러 부분에서 사용 가능하다.)

- 웹 개발중 은연중에 사용한 AOP 는 바로 `Transactional` 이다.


---
