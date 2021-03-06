# 필승 interview

---
## 목차

- 정리 한번 해보장

- 주변에서 받은 질문 정리
  - 마이리얼트립
  - 카카오페이
  - 우아한형제들
  - 하이퍼커넥트
  - 티몬
  - 조이시티
  - 어웨어

- '백엔드 개발자를 꿈꾸는 학생 개발자에게' 에 대한 정리

---
### 정리를 해봅시당
- 자바를 쓰는 이유 ? (쓴 이유? 왜 하필 자바였는가?)
  - 자바는 엔터프라이즈급 어플리케이션에서 가장 많이 쓰이는 언어이다. 규모있는 회사에서 시작하고 싶었고, 그러한 회사에서 많은 유저들의 니즈를 해소해줄 수 있는 개발자가 되고 싶었다.

- 스프링이란 ?
  - 스프링은 자바 애플리케이션을 만들 때 구성 컴포넌트간의 의존도를 낮추고 확장에 용이한 구조로 설계할 수 있게끔 도와주는 프레임워크이다.

  - 스프링의 특징으로는, IoC, AOP, PSA 정도가 있다.
    - IoC란, 제어의 역전을 말하는데, 의존관계가 있는 객체를 각 객체들이 직접 제어하는 것이 아닌, 외부에서 제어를 해준다는 것이다. IoC를 위한 기법으로 DI가 있는데, 이는 의존성 주입으로, 서로 의존관계가 있는 객체들이 서로를 필드에 직접 선언해주는 것이 아니라, 생성자나 setter등을 이용해서 외부에서 설정해주는 것을 말한다. 즉, 각 객체들은 자신이 어떤객체에서 쓰이는지 알 수 없고, 스프링 컨테이너가 객체간의 의존관계를 정해준다. 이를 통해, 타 객체에 대한 조작없이, 각 객체는 본연의 임무에만 집중하면 된다. (관심사의 분리)

    - AOP란, 관점지향 프로그래밍이라는 뜻으로써, OOP가 객체간의 상속이나 구현등을 통해 수직적 객체 분리가 되어서 중복이 제거되고 본연의 임무에 충실하게 만들어 주었다면, AOP는 수평적으로 널리 퍼져있는 코드들을 한곳에 모아 중복을 제거하는 것을 의미한다. 쉽게말해서 어떤 코드 블럭 앞뒤의 전후처리 등에 대해 중복을 제거하고자 하는 프로그래밍 기법이다. 가장 쉬운 예로, 각 요청마다 로그인 유저가 맞는지에 대한 처리가 필요하다면, 굉장히 많은 메서드에서 중복이 발생하게 된다. 이를 한곳에서 다루도록 처리하는 기법이다.

    - PSA란, 이식가능한 잘 구성된 서비스라는 뜻으로, 특정 기술에 종속적이지 않고, 환경의 변화에 영향을 받지 않으며 일관된 방식으로 기술에 접근을 가능하게 해줌을 의미한다. SPRING에서 제공하는 많은 라이브러리들은, 모두 PSA라고 보면 된다.

- 스프링 부트를 사용했는데, 스프링과의 차이는 ?
  - 스프링 부트는, 스프링 프레임워크에서 복잡하지만 관례적으로 해오던 설정들을 자동으로, 혹은 쉽게 설정할 수 있도록 도와준다. 비교적 간단한 설정들만으로 스프링애플리케이션을 쉽고 빠르게 만들 수 있다.

  - 예를 들어, 외부 라이브러리나 프레임워크를 연동하는 부분들에 대한 xml설정들, 자주 사용하는 것들에 대해서는 starter 디팬던시만 추가하면 버저닝까지 자동으로 잡아주고, 임배디드 톰캣으로 톰캣 서버도 자동으로 잡아줍니다.

  - 단점으로는, 개발자가 잘 알지 못하고 사용하게 되면, 디폴트로 설정되는 것들에 대해서 모르고 넘어갈 수도 있다.

- 임베디드 톰캣이 무엇인가요?
  - 톰캣은 WAS의 한 종류로써 서버의 `동적 프로그래밍`이 가능하도록 자바진영에서 사용하는 오픈 소스 서버입니다.

- WAS는 뭐죠 ?
  - WAS는 동적 프로그래밍을 지원해주는 서버입니다. 일반적인 Web Server는 요청에 대해서 정적인 파일들(단순 html과 같은)을 제공해주지만, WAS는 요청을 받아서, 동적 데이터 처리를 제공하는 Web Container로 전송하여 data를 조작한 후, 응답을 돌려줍니다. 대표적으로 톰캣이 있고, 톰캣은 다른말로 서블릿 컨테이너라는 자바 클래스의 생명주기를 관리하는 컨테이너 역할로 동적 프로그래밍을 수행하게 합니다.

-

---
### 마이리얼트립

#### - 컨테이너 / IoC / DI 에 대한 개념 

  - Spring은 하나의 프레임워크. -> 왜 Spring container / IoC container 라고 하는가?
  > 컨테이너는 보통 `인스턴스의 생명주기를 관리`하며, `생성된 인스턴스들에게 추가적인 기능을 제공하도록하는 것`이라 할 수 있다. 다시말해, 컨테이너란 당신이 작성한 코드의 처리과정을 위임받은 독립적인 존재라고 생각하면 된다. 컨테이너는 적절한 설정만 되어있다면 누구의 도움없이도 프로그래머가 작성한 코드를 스스로 참조한 뒤 알아서 객체의 생성과 소멸을 컨트롤해준다. 스프링 컨테이너는 스프링 프레임워크의 핵심부에 위치하며, 종속객체 주입을 이용하여 애플리케이션을 구성하는 컴포넌트들을 관리한다.

  - IoC : Inversion Of Control (제어의 역전)
  > 쉽게 말해 외부에서 제어한다는 뜻이다. 객체의 생성에서부터 생명주기의 관리까지 모든 객체에 대한 제어권이 바뀌었다는 것(IoC 컨테이너)을 의미 한다. 각 Object들은 자신이 어디에서 어떻게 생성되고, 쓰이는 지를 알 수 없다. 또한, 자신이 사용할 Object들을 생성하거나, 선택하지 않는다.

    그렇다면 어떻게 생성되고, 사용되는가 ?
    > 모든 Object들은 제어 권한을 위임받는 특별한 Object에 의해 만들어지고, 사용된다.

  - DI : Dependency Injection (의존성 주입)
  > 각 클래스 사이에 필요로 하는 의존 관계들을 `컨테이너가 자동으로 연결해주는 것` 이다.

    Spring 은 @Autowired 와 @Resource 로 의존성을 주입한다.
    > 둘의 차이는, Bean 검색시에 Autowired는 byType 먼저, 못찾으면 byName / Resource는 byName 먼저, 못찾으면 byType

    왜 의존성 주입을 하는가 ?
    > 모듈간의 결합도를 낮춰서 유연한 변경이 가능하다. -> 이는 유지보수와도 연결된다.

  - ApplicationContext 의 역할
  > Controller, Repository 등 SPRING 프로그램을 구동하기 위한 클래스들을 Bean으로 등록하고(만들어주고,), 만들어진 Bean들의 생명주기를 관리한다.

  - 이렇게 생성된 Bean들의 의존관계나, 생명주기 등을 관리하고 추가 기능을 제공하는것이 `IoC container`이다.



#### - Rest 설명. 원론적인 이야기 X 

  - Representational State Transfer 의 줄임말. 클라이언트와 서버의 통신 방식 중 하나이다.
  - REST 의 구성 요소
    - Resource : 유일한 ID를 가지는 Resource 가 서버 내에 존재하고, 클라이언트는 Resource의 상태를 조작하기 위해 요청을 보낸다. HTTP에서 이러한 ID는 일반적으로 URI를 의미한다.
    > ex) /api/users/13/todoList/3 (명사형의 단어로 만들어져서 직관적으로 무엇을 의미하는지 알 수 있는 URI)

      그렇다면 URI을 구성하는 방법은 ?
      > 1. 직관적으로 어떤 정보를 제공하는지 알 수 있는 단어들로 구성.
      >
      > 2. PATH가 계층구조여야 한다. (/api/persons/4/puppys/2)
      >
      > 3. method 들을 명시적으로 표현하여, URI만 봐도 어떤 정보나 어떤 조작을 하는지를 알 수 있도록 명명.

    - Method : Resource 를 조작하는 동사형의 표현들이다. HTTP에서는 GET/POST/PUT/DELETE 를 가장 빈번하게 사용한다.
    - Representation of Resource : 클라이언트가 서버로 요청을 보냈을 때, 서버가 응답으로 보내주는 Resource의 상태이다. 예를들어 xml, json, text 등이 있다.

  - REST 의 특징
    - stateless : 전, 후에 대한 직접적인 정보없이 직관적인 오브젝트로 접근하여 서비스를 처리한다. 세션정보를 보관할 필요가 없기 때문에, 서비스의 자유도 또한 높아지고 로드밸런싱등의 유연한 아키텍처의 적용이 가능하다.

  -> 꼬리질문 : HTTP 메소드 종류와 뜻에 대한 질문 : GET, POST, PUT, DELETE, PATCH(PUT과 PATCH 사용에 있어서 커뮤니티 논쟁을 얘기하면서 알고 있는 것 있으면 말해봐라)

#### - 스프링부트 버전 뭐 쓰는지?   스프링 5 기능 특징이 무엇인지? 
  - 스프링부트를 사용하는 이유 ?
    > 스프링 프레임워크 환경 구성 시에 요구되는 것들이 굉장히 많다. 프로젝트에 요구되는 `갖가지 의존성과 빌드환경을 구성`해야 하고, DispatcherServlet을 선언한 `web.xml` 파일 또는 `WebApplicationInitializer의 구현`, `MVC를 사용할 수 있는 환경` 구성, HTTP요청에 응답할 `컨트롤러 클래스`, 애플리케이션을 배포할 `웹 애플리케이션 서버` 등 굉장히 복잡하고도 단순 반복적인 업무들을 수행해야 한다. 이를 대신해 주는것이 스프링부트이다.

  - 스프링부트 2 버젼부터 최소 Java8 이상을 사용해야 하고, 추가적으로 Java9 도 지원한다. 따라서 JDK도 8버젼 이상으로 업그레이드 해야한다.

  ###  - 추가 학습 필요

#### - 영속성 컨텍스트란 뭔지?
  - `엔티티를 영구저장하는 환경`이다.
  - 영속성 컨텍스트의 특징
    1. 영속성 컨텍스트는 Entity를 식별자 값으로 구분한다. (Spring 에서 @Id 어노테이션으로)
    2. JPA는 트랜잭션이 일어나는 순간, 영속성 컨텍스트에 새로 저장된 Entity를 데이터베이스에 반영한다. (flush 라 한다.)
    3. 1차 캐시를 이용한다. `entityManager.find() 메소드를 호출`하면 먼저 `1차 캐시에서 Entity를 찾고`, 만약 찾는 Entity 가 1차 캐시에 없으면 `데이터베이스에서 조회한 후 1차 캐시에 저장`하고 `영속 상태인 해당 객체를 반환`합니다.
    4. (2)번에서 말한 flush() 란, 영속성 컨텍스트의 변경 내용을 데이터베이스에 동기화하는 작업이다.
    5. 지연로딩을 수행한다. 지연로딩이란, 실제 객체 대신 `프록시 객체를 로딩`해두고 해당 객체를 `실제 사용할 때` 영속성 컨텍스트를 통해 데이터를 불러오는 방법이다.

#### - JWT에 대한 설명, 다른 인증방식과의 차이점 

  ### - 추가 학습 필요

#### - 스트림 map, flatMap 차이점 

#### - @OneToMany 에서 One을 조회할 때, 쿼리문 결과 어떻게 오는가?
  - One 조회 시, 기본 patch 전략이 lazyloading 이기 때문에 Many 에 대한 정보는 가져오지 않는다.
  - Many 조회 시(@ManyToOne 시에), Many에 해당하는 객체를 조회해오면서, One에 해당하는 객체를 Many객체 테이블에 left outer join해서 가져온다.

#### - JPA를 쓰지 않는 회사는 안갈건지? 

#### - AOP 개념과 pointcut 같은 키워드를 잘 알고 있는지 
  - AOP란?
  > AOP(Aspect Oriented Programming)라는 뜻 자체가 어플리케이션의 핵심적인 기능에서 부가적인 기능을 분리해서 `애스팩트`라는 독특한 모듈로 만들어서 설계하고 개발하는 방법을 얘기한다. 쉽게 설명해서 공통된 부분을 (공통 기능을) 재사용하는 기법이다. OOP에서는 공통된 기능을 재사용하는 방법으로 상속이나 위임을 사용한다. 하지만 `전체 어플리케이션 여기저기에서 사용되는 부가기능들`을 상속이나 위임으로 처리하기에는 깔끔하게 모듈화가 어렵다.

  - AOP의 장점
    - 어플리케이션 전체에 흩어진 공통 기능이 하나의 장소에서 관리된다는 점
    - 다른 서비스 모듈들이 본인의 목적에만 충실하고 그외 사항들은 신경쓰지 않아도 된다는 점

  - AOP는 바이트 코드를 조작하여 Aspect를 기존 코드에 추가한다? (X)
  - AOP는 프록시 패턴을 사용하여 메소드 호출을 가로채는 방식으로 동작한다. (O)

  - AOP 용어 정리
    - 타겟 (Target)
    > 부가기능을 부여할 대상을 얘기한다.

    - 애스펙트 (Aspect)
    > 객체지향 모듈을 오프젝트라 부르는것과 비슷하게 부가기능 모듈을 애스펙트라고 부르며, `핵심기능에 부가되어 의미를 갖는 특별한 모듈`이라 생각하면 된다. 애스펙트는 부가될 기능을 정의한 `어드바이스`와 어드바이스를 어디에 적용할지를 결정하는 `포인트컷`을 함께 갖는다.

    - 어드바이스 (Advice)
    > `실질적으로 부가기능을 담은 구현체`를 얘기한다. 어드바이스의 경우 타겟 오프젝트에 종속되지 않기 때문에 순수하게 부가기능에만 집중할 수 있습니다. 어드바이스는` 애스펙트가 '무엇'을 '언제' 할지를 정의`한다.

    - 포인트컷 (PointCut)
    > 부가기능이 적용될 대상(메소드)를 선정하는 방법이다. 즉, 어드바이스를 적용할 `조인포인트`를 선별하는 기능을 정의한 모듈이다.

    - 조인포인트 (JoinPoint)
    > `어드바이스가 적용될 수 있는 위치`이다. 다른 AOP 프레임워크와 달리 Spring에서는 메소드 조인포인트만 제공한다. 따라서 Spring 프레임워크 내에서 조인포인트라 하면 메소드를 가리킨다고 생각해도 된다. 타 프레임워크에서는 예외 발생할 경우, 필드값이 수정될 경우 등도 지원한다.

    - 프록시 (Proxy)
    > 타겟을 감싸서 타겟의 요청을 대신 받아주는 랩핑(Wrapping) 오브젝트.

    - 인트로덕션 (Introduction)
    > 타겟 클래스에 코드 변경없이 신규 메소드나 멤버변수를 추가하는 기능.

    - 위빙 (Weaving)
    > 지정된 객체에 애스팩트를 적용해서 새로운 프록시 객체를 생성하는 과정이다. 예를 들면 A라는 객체에 트랜잭션 애스팩트가 지정되어 있다면, A라는 객체가 실행되기전 커넥션을 오픈하고 실행이 끝나면 커넥션을 종료하는 기능이 추가된 프록시 객체가 생성되고, 이 프록시 객체가 앞으로 A 객체가 호출되는 시점에서 사용된다. 이때의 프록시객체가 생성되는 과정이 위빙이다.

#### - @Transactional 이 이루어지는 과정
  - Transaction manager 를 가지고 Transaction Auto Commit 를 false 로 만든다.
  - 그 후에 작업(개발자가 작성한 코드 실행) -> try{} catch{} 로 묶어놓고 작업한다.
  - Transaction 을 commit 한다.
  - 개발자가 작성한 코드에서 catch 문 안에서는 어떠한 문제가 발생한 경우, 그 Transaction을 RollBack 시킨다.

#### - @ (에노테이션 클래스 관련)
  - @interface testAnnotation {} 로 선언해 준 어노테이션 클래스가 있다고 하자.
  - 이 클래스 위에 여러 어노테이션을 추가할 수 있다.
    - @Target : 이 어노테이션을 어디에 붙일 수 있는지 지정해준다.
    > 예를들어 @Target(ElementType.Method) : 메서드에 달 수 있음을 알려준다.

    - @Retention : 어노테이션을 사용한 코드를 언제까지 사용 할 건지 지정해준다.
    > 예를들어 @Retention(RetentionPolicy.RUNTIME) : 실행 시간 동안에 사용한다는 것 알려준다.

    - @Aspect : 실제 그 어노테이션의 동작을 구현한다.
    ```Java
    @Component
    @Aspect
    public class LogAspect {    //실행 시간을 찍어주는 어노테이션 클래스 구현체(Aspect)

        Logger log = LoggerFactory.getLogger(LogAspect.class);

        @Around("@annotation(LogExecutionTime)")  //LogExecutionTime 어노테이션이 붙은 곳 주변에서 아래의 일을 한다는것을 의미.
        public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws throwable {
          StopWatch stopWatch = new StopWatch();
          stopWatch.start();

          Object ret = joinPoint.proceed();

          stopWatch.stop();
          log.info(stopWatch.prettyPrint());

          return ret;
        }
    }
    ```

#### - PSA 란?
  - Portable Service Abstraction : 이식 가능한 서비스 추상화
  - 기존의 내 코드가 확장성이 좋지 않고, 특정 기술에 특화되어 있다면(Hibernate / JPA 등), 기술 변화시마다 코드가 바뀌게 된다. 또한, 테스트 하기에도 불편한 코드가 된다.
  - 이럴때, 이 인터페이스를 이용해서 내 코드를 작성하면, 확장/테스트 시에 아주 용이하다.
  - 그렇다면 SPRING 에서 PSA 가 어떤걸까?
    - SPRING에서 제공해주는 대부분의 API가 다 PSA이다.(...ㅋㅋ) : Resources, Validation, Data Binding, Transactions, ORM, JDBC 등등
    - 그래서 밑단의 기술(Servlet/Reactive) 등이 바뀌어도 이 코드들은 정상 작동한다. (어느 특정 기술에 제한적이지 않다.)

#### - 객체지향이란?  (OOP란?)
  - 객체 지향의 특징

  - 그렇다면 왜 쓰는가?
    - 생각해내기 쉽다. (구현/설계가 수월하다.)
    > 비 객체지향적인 언어들은 머릿속에 떠오른 현상들을 언어로 그대로 매핑하기가 어렵다. 수학 문제를 풀듯, 언어에 알맞게 문제를 풀어나가야 한다. 하지만, 객체지향적인 언어는 머릿속의 개념들(Real-World에서의)을 `객체`라는 개념으로 그대로 매핑할 수 있다. -> 구현과 설계가 빨라진다.

    - 재사용성 / 확장성이 우월하다.
    > 재사용성은 절차지향의 언어에서부터 강조되어왔다. 남이 만들어 놓은 api 등을 재사용하기에 굉장히 편하며, 이를 이용해서 확장하기에도 굉장히 편하다.

#### - MVC패턴이 무엇인지? 
  - 기존의 Model1 방식은, View단에 비즈니스 로직과 프레젠테이션 로직이 혼재되어 있었다. 이는 개발 속도(개발 비용) 향상에는 도움이 되는 방식이지만, 로직의 혼재로 인해 유지보수 하기에 상당히 복잡하다. 개발 비용만킁 유지보수 비용도 중요함이 대두되면서, Model2 개발 방식이 함께 대두되었다. 다양한 개발에 있어 근간이 되어온 MVC 패턴을 웹에 적용하여, 개발이 가능하도록 구현하는 방식을 Model 2방식이다.
  - 간단한 특징은, Model-View-Controller 로 역할을 나누어서 각각마다 자신의 임무만 수행하게 하는 패턴이다.

    - Model
    > Model은 Application 로직을 담당하는 부분으로 Database나 Legacy System과의 로직을 담당하는 부분을 말한다. Model은 Application으로부터 UI가 분리된다.

    - View
    > View는 사용자가 직접 사용하는 부분으로 Presentation 로직을 담당하는 부분이다. Controller와 Model에 의해 생성된 결과물을 보여주는 역할을 한다.

    - Controller
    > Controller는 Business Logic을 담당하는 부분으로 사용자의 요청을 받아 요청에 해당하는 작업을 한 후 작업 결과에 따라 응답을 결정하는 역할을 한다. Model과 View사이에서 데이터를 전달하는 역할을 한다.

#### - 리버스 프록시, 포워드 프록시
  - 프록시 서버 : 클라이언트단의 요청을 받아서, 서버로 요청을 보낸다. `중계자`의 역할을 하는 것이다.

  - 포워드 프록시 : 클라이언트에서 목적지 서버의 주소를 알려주기 전 까지는, 그 주소값을 알지 못한다. 주된 사용 목적은 서버의 부하를 줄이는 것이다. 서버 앞단에서 정적 자원들을 가지고 있는 캐시역할을 수행함으로써 서버에 걸리는 부하를 줄인다.

  - 리버스 프록시 : 클라이언트에서 목적지 서버의 주소를 알려주기 전에도, 자신의 뒷단에 있는 서버의 주소를 가지고있다. 클라이언트에게서 목적지 서버의 주소를 받으면, 그 주소가 할당되어있던 서버로 요청을 보내고 응답을 받아온다. 주된 사용 목적은 보안이나 암호화를 할 수 있고, 뒷단의 서버들에 대한 요청들을 로드밸런싱 할 때에 사용된다.

#### - 파이어베이스 액세스토큰 보관 사용 경험 질문 

#### - JWT(json web token)에 대해서 설명 

#### - 배포 자동화 스크립트 이외 쉘스크립트 사용한 경험이 있는지

#### - 테스트 주도 개발이란 무엇인가 
  -> 꼬리질문 : 모든 코드에 대해 TDD 하고 있는가, 입사하게 된다면 TDD를 할 생각인가

#### - 객체지향이란 무엇인가  
 -> 꼬리질문 :  C언어 함수를 나눠서 개발하는 것과 객체지향프로그래밍의 차이(객체가 상태값을 가짐)

#### - 스트림 API를 적용하는 이유(사용처, 사용 이유) 

#### - Optional 어디에 사용했는지 물음 
 -> 꼬리질문 : 요즘 함수형 프로그래밍이 뜨고 있는데, 함수형 프로그래밍은 무엇이고 객체지향을 대체할 수 있는가에 대해 개인적인 견해를 물어봄

#### - JPA를 가지고 어떻게 개발 해봤나? 
-> -> 너무 추상적이라 역질문해서 질문 요지를 알아냄 - 쿼리 메소드, JPQL 등등 쿼리 생성 해주는 부분에 대해서 어디까지 써봤냐는 질문이었음

### 카카오페이
#### - JVM에 대해서 그려가면서 설명해 주세요. 
#### - JVM의 메모리 관리에 대해서 알고 있나요? 
#### - GC의 동작 원리에 대해서 자세히 질문 
#### - JPA를 사용했는데, lazy loading이 무엇인지? 
  - 엔티티를 사용하는 그 시점에(필요할 때에) 로딩해오는 방식이다. 반대말로 eager loading(즉시 로딩)이란, 엔티티를 사용할 때, 연관된 모든 엔티티를 조회해오는 방식이다. 예를 들어, @OneToMany 관계가 설정되 있는 객체를 살펴보면, One에 해당하는 객체를 가져올 때, Many에 해당하는 모든 객체들을 다 불러온다면, 이는 성능의 관점에서 봤을때, 굉장한 비효율이 발생한다. Many에 해당하는 객체를 사용하지 않을 것인데 불러오는 결과가 발생하기 때문이다. 때문에 JPA는 개발자가 FetchType을 EAGER로 설정하지 않는 한, 기본적으로 Many에 해당하는 객체를 Lazy Loading한다.

#### - Open session in view에 대해서도 알고 있는지? 
  - Transaction을 뷰 렌더링이 끝나는 시점까지 유지하는 것을 의미한다. lazy loading으로 조회해오는 데이터는 실제 엔티티가 아닌, 프록시 객체를 담고 있는데, 이를 바로 뷰단에 렌더링 할 때, `org.hibernate.LazyInitializationException`이 발생한다. 이를 해결하기 위해 나온것이 open session in view 이다. SPRING에서는 FlushMode 와 ConnectionReleaseMode의 조정을 통해서 이를 해결한다. 스프링 Boot에서는 Open Session In View 패턴을 OpenEntityManagerInViewInterceptor를 통해 default로 지원을 해주고 있다.

#### - 왜 스프링부트가 open session in view = true 로 했는지? 

#### - 테스트 코드 작성 시 before같은거 알고 있는지? 
  - @Before : 각각의 테스트코드(메서드) 실행 전에 미리 실행할 메서드.
  - @After : 각각의 테스트코드(메서드) 실행 후에 실행할 메서드.

  - @BeforeClass / @AfterClass : 전체 클래스(테스트 클래스) 실행 전과 후에, 단 한번만 실행될 메서드 정의.

#### - 본인이 코드 구현할 때 테스트를 어떤식으로 생각하고 구현하는지? 

#### - 코드스쿼드에서 배울 때 팁같은 것들을 많이 듣는지? 예를 들어 테스트할때는 어떤 것들을 생각해야 하는지?
 
#### - 실제 현업에서는 테스트 코드 어떻게 짤 것 같냐고 질문 

#### - 그럼 DI에 대해서 말씀해 주시고, DI방식으로 개발하는 것이 어떤 측면에서 좋을지? 

#### - 멀티스레드 프로그래밍 해보았는지? 

### 우아한형제들
#### - 최근 관심가는 기술과 그 이유가 무엇인가 
#### - 프로그래밍 언어 알고 있는 것에 대해서 말하고 어디까지 써봤는지 
#### - 이커머스 어플리케이션에서 상품 보기에 대규모 트래픽이 발생한다고 했을 때 어떤 대처들을 할 수 있는지 생각해보세요(아키텍쳐 구성과 고정 데이터 캐시에 대한 이야기) 
#### - 객체지향적 프로그래밍을 하다보니(다른 객체가 마음대로 상태값 set 하지 못하고 요청하도록 처리) 많은 필드를 가지게 될 수 있는데 어떻게 해결해나갈 생각인가요? 
#### - 현업에서는 배운 것처럼 객체지향적이지 않은 코드가 있을텐데(능력 있는 개발자가 짰다고 하더라도 라는 전제도 붙여줬네요) 그 코드를 봤을 때 어떻게 행동할건가요? 
#### - 코드를 짤 때 이게 이상하다 싶은 경우(더 나은 방법이 없을까 이게 맞나 싶은 경우) 어떻게 해결했나요 
#### - 원래는 여러 테이블로 나눠서 저장해야할 데이터를 하나의 테이블에 다 저장하도록 모델링 한 경우는 왜 그런걸까요 이유를 추측해보세요 
#### - JPA 버져닝을 해보셨나요 


### 하이퍼커넥트
#### - 데드락 개념, 해결 방안, synchronized, 그럼 데드락을 일부러 만든다면 어떻게? 
#### - left join과 join의 차이 
  - A 와 B 테이블이 있을 때, query의 'where'절의 조건에 따라 두 테이블을 묶어서 데이터를 조회한다고 하자.
  > Join 사용시에, A와 B 테이블 사이에 where절에 조건에 해당하는 데이터들만 가져온다. 즉 조건절에 대한 요건이 A와 B모두 가지고 있는 데이터를 출력해준다. 따라서 조건에 해당하지 않는 row는 가져오지 않는다.

  > Left Join 사용시에는, 마찬가지로 공통으로 조건절에 해당하는 데이터(row)를 조회해오지만, 추가적으로 가져오는 데이터가 있다. A테이블에서는 만족하고, B테이블에서는 만족하지 못하는 row가 있을 때, Left Join의 경우는 그 row도 가져온다. 하지만, Join된 row를 가져오는것이 아니고, A테이블의 데이터 + null(B테이블에서 조건을 만족하지 않기 때문에 해당 row의 B테이블 데이터는 비어있다.)의 형식으로 조회해온다.

#### - transactional isolation level 
  - Locking 은 트랜잭션이 DB를 다루는 동안 다른 트랜잭션이 관여하지 못하게 막는 것이다. DB의 무결성을 보장하기 위해 사용된다. 개발자는 이 Locking을 너무 관대하게 설정하기만해서, 또는 너무 빡빡하게 설정하기만해서는 좋은 설정을 할 수 없다. 그 쓰임새에 알맞게 조정해야 한다. 이 조정하는 레벨을 `transactional isolation level`이라고 한다.

  - Isolation level 정리
    - Read Uncommitted
    > 어떤 사용자가 A라는 데이터를 B라는 데이터로 변경하는 동안 다른 사용자는 B라는 아직 완료되지 않은(Uncommitted 혹은 Dirty) 데이터 B를 읽을 수 있다.

    - Read Committed
    > SQL Server가 Default로 사용하는 Isolation Level. 이 Level에선 SELECT 문장이 수행되는 동안 해당 데이터에 Shared Lock이 걸린다. 그러므로, 어떠한 사용자가 A라는 데이터를 B라는 데이터로 변경하는 동안 다른 사용자는 해당 데이터에 접근할 수 없다.

    - Repeatable Read
    > 트랜잭션이 완료될 때까지 SELECT 문장이 사용하는 모든 데이터에 Shared Lock이 걸리므로 다른 사용자는 그 영역에 해당되는 데이터에 대한 수정이 불가능하다. 하지만 입력은 가능하다.

    - Serializable
    > 트랜잭션이 완료될 때까지 SELECT 문장이 사용하는 모든 데이터에 Shared Lock이 걸리므로 다른 사용자는 그 영역에 해당되는 데이터에 대한 수정 및 입력이 불가능하다.

#### - sql injection 
  - sql구문을 입력하면서 보안을 뚫는 해킹이다. 예를들어 로그인 컨트롤러에서 ID와 PASSWORD에 대한 정보를 쿼리문을 이용해서 받고, 그 쿼리문을 그대로 데이터베이스에 적용하는 식으로 운영 된다면, ID나 PASSWORD에 sql구문을 넣어서 로그인 시도를 했을때에 로그인 처리가 될 수 있다.

#### - static inner와 inner 클래스의 차이 

#### - wrapper 클래스는왜 쓰냐? 
  - 기본 데이터 타입들을 객체로 취급해야 하는 경우에 사용한다.

#### - heap과 stack의 차이는? 

#### - hash table 설명, 충돌 설명, 해결 방안, hashmap과의 차이, 다른 hash 구조와 비교, 순서  

#### - unicode와 utf8의 차이 
  - unicode는 그냥 코드 표 이다. 숫자와 글자, 즉, 키와 값이 매핑된 문자표와 같다.
  - utf-8은 이 표를 바탕으로 실제 문자들을 인코딩하는 방식이다.

#### - jpa @version을 아는가  
  -

#### - java @synchronized를 아는가 
#### - equals 오버라이드시 주의점 (hashcode 오버라이드) 
#### - spring boot는 왜 쓰는가? java는 얼마나 했는가? 컴공인가? 
#### - 성능이 빠르다라는건 두가지 관점을 섞어서 얘기할수있다. 무엇이 있을까? (레이턴시 관련 언급) 
#### - 세션은 무엇, 세션과 쿠키란? 사용자가 한 서버에서 로그인 했다가 다음에 다른 서버에서 로그인?하면 어떻게 체크? 
#### - http2를 아는가? https? 
#### - git에서 커밋이 잘못될 경우 어떻게 고칠 수 있나? 
#### - 소트를 아는대로 말해봐라. quick sort 작동방식을 설명해라, 복잡도나 워스트 케이스 설명. 
#### - 사용자가 어떤 기능에 끊임없이 접근하는게 싫어서 10분에 10번정도로 제한하려고 한다 어떻게 할거냐?  
#### - @transactional에 대해 아냐? transaction은 무엇인가, 왜 쓰냐, propagation에 대해서 아냐  
#### - int형 배열을 정렬하고싶다 어떻게 하냐? -> 오름차순 내림차순 선택해서 하고싶다 어떻게 하냐? 
#### - 회원가입 기능과 로그인을 만들고싶다. id pw는 어떻게 저장할것인가 -> 세션으로 넘어감 

### 티몬
#### - Spring MVC 구조 설명 
#### - Filter를 아는가 
#### - Filter와 Intercepter의 차이 
  - Filter는 DispatcherServlet 앞단에서 전, 후처리를 담당하기 때문에, 웹 전체적으로 보안과 관련된(인코딩) 부분을 담당한다.

  - 인터셉터는 DispatcherServlet 뒷단에서 (handler (controller) 와 DispatcherServlet 사이에서) 추가적인 처리를 해줘야 할 때 사용한다.

  - 또한, 인터셉터는 2개 이상 만들 수 있지만, filter는 그럴 수 없다.

  - DispatcherServlet부터가 Spring ApplicationContext이다.

#### - 테스트코드 왜 짜게 되었는가 
#### - ATDD란 
#### - 스레드와 프로세스 차이 
#### - Spring Boot 외에 다른 툴을 써본 경험 
#### - 협업 경험 
#### - Java8 특징 
#### - 세션과 쿠키의 차이 
#### - main메서드에 static이 있는 이유 

### 조이시티
#### - 스프링의 특징? 왜 스프링 쓰는지?
#### - 스트림?
#### - mvc?
#### - model2?
#### - connection pool?
#### - 테스트 할때 repository 같이 외부와 연결된 경우 테스트 어떻게?

### 어웨어
#### - 링크드리스트에 대해 설명
  - 노드가 있고, 다음 노드의 주소를 가지고 있는 형태로, 여러개의 노드가 연결되어있는 형태.

#### - 프로세스와 스레드 설명

#### - 스택과 힙 설명

#### - TDD에 대해서 설명

#### - TCP와 HTTP 차이


### 백엔드 개발자를 꿈꾸는 학생개발자에게

웹 생태계의 스펙 
HTML, HTTP(1.1 , HTTP/2) 
기본 SDK, 라이브러리/프레임워크 이해와 활용 
클라이언트를 위한 API 설계 
서버/컴퍼넌트/객체 간의 역할 분담/의존성/통신 방법 설계 
저장소 활용 
DBMS 설계 
Cache 적용 
Global/Local cache 적용범위, 라이프 싸이클, 솔루션 선택 
파일 저장 정책/솔루션 선택 활용 
검색엔진 연동 방식 결정 
빌드 도구 
Maven/Gradle 
배포 전략 
성능 테스트/프로파일링/튜닝 
JVM 레벨의 튜닝 (GC 옵션 등) 
웹 서버(Nginx,Tomcat)등의 설정/튜닝 
OS 설정의 주요 값 확인 
인접 기술에 대한 이해 
DBMS, Front End 등 
서버 개발자에만 해당하지는 않는 항목 
테스트 코드 작성/리팩토링 기법 
버전 관리 전략 
branch 정책 등 





사루
api 
springboot 
nginx 
google api 
guava 
json 
web request, response control 
reverse proxy 
localhost 
port 
redirect 
web browser 
학습테스트 
test 
generic 
hashmap 
cors 
timeout 
stream api 
String 
unit test 
logging 
stdin out 
tdd 
refactoring 
oop 
debuging 
db 
domain 
feedback 
atdd 
end to end test 
out-in 
layered architecture 
rest api 
status code 
error handling 
stateful, stateless 
was 
http 
@Embaddable, @Embadded 
github 
git 
MVC 



NoSql
AWS

---
### BasicAuth()

addAuthentication method : HTTP 내에 오소리제이션 field 에 value를 넣어준다. value에 들어가는 Base64의 규칙은 (Id : password) 이다. Base64 로 인코딩하면 앞에 "Basic" 가 붙는다.

---
