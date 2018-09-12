# 필승 interview

---
## 목차

- 주변에서 받은 질문 정리
  - 마이리얼트립
  - 카카오페이
  - 우아한형제들
  - 하이퍼커넥트
  - 티몬

- '백엔드 개발자를 꿈꾸는 학생 개발자에게' 에 대한 정리

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

#### - Rest 설명. 원론적인 이야기 X 

  - Representational State Transfer 의 줄임말. 클라이언트와 서버의 통신 방식 중 하나이다.
  - REST 의 구성 요소
    - Resource : 유일한 ID를 가지는 Resource 가 서버 내에 존재하고, 클라이언트는 Resource의 상태를 조작하기 위해 요청을 보낸다. HTTP에서 이러한 ID는 일반적으로 URI를 의미한다.
    > ex) /api/users/13/todoList/3 (명사형의 단어로 만들어져서 직관적으로 무엇을 의미하는지 알 수 있는 URI)

      그렇다면 URI을 구성하는 방법은 ?
      > 1. 직관적으로 어떤 정보를 제공하는지 알 수 있는 단어들로 구성.
      >
      > 2. PATH가 계층구조여야 한다. (/api/persons/4/puppy/2)
      >
      > 3. method 들을 명시적으 표현하여, URI만 봐도 어떤 정보나 어떤 조작을 하는지를 알 수 있도록 명명.

    - Method : Resource 를 조작하는 동사형의 표현들이다. HTTP에서는 GET/POST/PUT/DELETE 를 가장 빈번하게 사용한다.
    - Representation of Resource : 클라이언트가 서버로 요청을 보냈을 때, 서버가 응답으로 보내주는 Resource의 상태이다. 예를들어 xml, json, text 등이 있다.

  - REST 의 특징
    - stateless : 전, 후에 대한 직접적인 정보없이 직관적인 오브젝트로 접근하여 서비스를 처리한다. 세션정보를 보관할 필요가 없기 때문에, 서비스의 자유도 또한 높아지고 로드밸런싱등의 유연한 아키텍처의 적용이 가능하다.


스프링부트 버전 뭐 쓰는지?  a. 스프링 5 기능 특징이 무엇인지? 
JWT에 대한 설명, 다른 인증방식과의 차이점 
스트림 map, flatMap 차이점 
JPA를 쓰지 않는 회사는 안갈건지? 
AOP 개념과 pointcut 같은 키워드를 잘 알고 있는지 
객체지향이란? 
MVC패턴이 무엇인지? 

카카오페이
JVM에 대해서 그려가면서 설명해 주세요. 
JVM의 메모리 관리에 대해서 알고 있나요? 
GC의 동작 원리에 대해서 자세히 질문 
JPA를 사용했는데, lazy loading이 무엇인지? 
Open session in view에 대해서도 알고 있는지? 
왜 스프링부트가 open session in view = true 로 했는지? 
테스트 코드 작성 시 before같은거 알고 있는지? 
본인이 코드 구현할 때 테스트를 어떤식으로 생각하고 구현하는지? 
코드스쿼드에서 배울 때 팁같은 것들을 많이 듣는지? 예를 들어 테스트할때는 어떤 것들을 생각해야 하는지? 
실제 현업에서는 테스트 코드 어떻게 짤 것 같냐고 질문 
그럼 DI에 대해서 말씀해 주시고, DI방식으로 개발하는 것이 어떤 측면에서 좋을지? 
멀티스레드 프로그래밍 해보았는지? 





마이리얼트립
리버스 프록시, 포워드 프록시  
파이어베이스 액세스토큰 보관 사용 경험 질문 
테스트 주도 개발이란 무엇인가 
-> 꼬리질문 : 모든 코드에 대해 TDD 하고 있는가, 입사하게 된다면 TDD를 할 생각인가

REST API란 무엇인가 
-> 꼬리질문 : HTTP 메소드 종류와 뜻에 대한 질문 : GET, POST, PUT, DELETE, PATCH(PUT과 PATCH 사용에 있어서 커뮤니티 논쟁을 얘기하면서 알고 있는 것 있으면 말해봐라)
JWT(json web token)에 대해서 설명 
배포 자동화 스크립트 이외 쉘스크립트 사용한 경험이 있는지에 대해서 물어봄 
객체지향이란 무엇인가  
 -> 꼬리질문 :  C언어 함수를 나눠서 개발하는 것과 객체지향프로그래밍의 차이(객체가 상태값을 가짐)

스트림 API를 적용하는 이유(사용처, 사용 이유) 
Optional 어디에 사용했는지 물음 
 -> 꼬리질문 : 요즘 함수형 프로그래밍이 뜨고 있는데, 함수형 프로그래밍은 무엇이고 객체지향을 대체할 수 있는가에 대해 개인적인 견해를 물어봄

JPA를 가지고 어떻게 개발 해봤나? 
-> -> 너무 추상적이라 역질문해서 질문 요지를 알아냄 - 쿼리 메소드, JPQL 등등 쿼리 생성 해주는 부분에 대해서 어디까지 써봤냐는 질문이었음

IOC가 무엇인가(IOC라 질문하는데, IOC/Container에 대한 질문임) 
DI가 무엇인가 

우아한형제들
최근 관심가는 기술과 그 이유가 무엇인가 
프로그래밍 언어 알고 있는 것에 대해서 말하고 어디까지 써봤는지 
이커머스 어플리케이션에서 상품 보기에 대규모 트래픽이 발생한다고 했을 때 어떤 대처들을 할 수 있는지 생각해보세요(아키텍쳐 구성과 고정 데이터 캐시에 대한 이야기) 
객체지향적 프로그래밍을 하다보니(다른 객체가 마음대로 상태값 set 하지 못하고 요청하도록 처리) 많은 필드를 가지게 될 수 있는데 어떻게 해결해나갈 생각인가요? 
현업에서는 배운 것처럼 객체지향적이지 않은 코드가 있을텐데(능력 있는 개발자가 짰다고 하더라도 라는 전제도 붙여줬네요) 그 코드를 봤을 때 어떻게 행동할건가요? 
코드를 짤 때 이게 이상하다 싶은 경우(더 나은 방법이 없을까 이게 맞나 싶은 경우) 어떻게 해결했나요 
원래는 여러 테이블로 나눠서 저장해야할 데이터를 하나의 테이블에 다 저장하도록 모델링 한 경우는 왜 그런걸까요 이유를 추측해보세요 
JPA 버져닝을 해보셨나요 





하이퍼커넥트
 데드락 개념, 해결 방안, synchronized, 그럼 데드락을 일부러 만든다면 어떻게? 
left join과 join의 차이 
transactional isolation level 
sql injection 
static inner와 inner 클래스의 차이 
wrapper 클래스는왜 쓰냐? 
heap과 stack의 차이는? 
hash table 설명, 충돌 설명, 해결 방안, hashmap과의 차이, 다른 hash 구조와 비교, 순서  
unicode와 utf8의 차이 
jpa @version을 아는가  
 java @synchronized를 아는가 
equals 오버라이드시 주의점 (hashcode 오버라이드) 
spring boot는 왜 쓰는가? java는 얼마나 했는가? 컴공인가? 
성능이 빠르다라는건 두가지 관점을 섞어서 얘기할수있다. 무엇이 있을까? (레이턴시 관련 언급) 
세션은 무엇, 세션과 쿠키란? 사용자가 한 서버에서 로그인 했다가 다음에 다른 서버에서 로그인?하면 어떻게 체크? 
http2를 아는가? https? 
git에서 커밋이 잘못될 경우 어떻게 고칠 수 있나? 
소트를 아는대로 말해봐라. quick sort 작동방식을 설명해라, 복잡도나 워스트 케이스 설명. 
사용자가 어떤 기능에 끊임없이 접근하는게 싫어서 10분에 10번정도로 제한하려고 한다 어떻게 할거냐?  
@transactional에 대해 아냐? transaction은 무엇인가, 왜 쓰냐, propagation에 대해서 아냐  
int형 배열을 정렬하고싶다 어떻게 하냐? -> 오름차순 내림차순 선택해서 하고싶다 어떻게 하냐? 
회원가입 기능과 로그인을 만들고싶다. id pw는 어떻게 저장할것인가 -> 세션으로 넘어감 





티몬
Spring MVC 구조 설명 
Filter를 아는가 
Filter와 Intercepter의 차이 
테스트코드 왜 짜게 되었는가 
ATDD란 
스레드와 프로세스 차이 
Spring Boot 외에 다른 툴을 써본 경험 
협업 경험 
Java8 특징 
세션과 쿠키의 차이 
main메서드에 static이 있는 이유 





백엔드 개발자를 꿈꾸는 학생개발자에게

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
