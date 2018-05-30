# SPRING

## 개념 정리들

- DAO (Data Access Object) : DB를 사용해 데이터를 조작하거나 조작하는 기능을 전담하도록 만든 오브젝트

- JDBC를 이용하는 작업의 일반적 순서
  > DB 연결을 위한 Connection을 가져온다.
  >
  > SQL을 담은 Statement를 만든다.
  > 만들어진 Statement를 실행한다.
  >
  > 조회의 경우 SQL 쿼리의 실행 결과를 ResultSet으로 받아서 정보를 저장할 오브젝트에 옮겨준다.
  >
  > 작업 중에 생성된 Connection, Statement, ResultSet 같은 리소스는 작업을 마친 후 반드시 닫아준다.
  >
  > JDBC API가 만들어내는 예외를 잡아서 직접 처리하거나, 메소드에 throws를 선언해서 예외가 발생하면 메소드 밖으로 던지게 한다.

- 템플릿 메소드 패턴 : 슈퍼클래스에 기본적인 로직의 흐름(커넥션 가져오기, SQL생성, 실행, 반환 등)을 만들고, 그 기능의 일부를 추상 메소드나 오버라이딩이 가능한 protected 메소드 등으로 만든 뒤 서브클래스에서 이런 메소드를 필요에 맞게 구현해서 사용하는 방법

- 디자인 패턴
  > 소프트웨어 설계 시 특정 상황에서 자주 만나는 문제를 해결하기 위해 사용할 수 있는 재사용 가능한 솔루션. 대부분 두 가지 구조로 정리된다.
  >
  > 1. 클래스 상속
  >
  > 2. 오브젝트 합성

  - 클래스 상속 시에, 슈퍼클래스 내부에 디폴트 기능을 정의해두거나 비워둔 메소드를 `훅 메소드` 라고 한다.

    ex)
    ```java
    public abstract class templateMethod() {
      protected void hookMethod() {   //서브클래스에서 선택적으로 오버라이드 가능한 훅 메소드
        ...
      }

      public abstract void abstractMethod();    //서브클래스에서 반드시 구현해야 하는 추상 메소드
    }
    ```
- 객체지향 설계 원칙(SOLID) - 5가지 원칙의 앞자를 따서 만들어진 약자
  - SRP (The Single Responsibility Principle) : 단일 책임 원칙
  - OCP (The Open Closed Principle) : 개방 폐쇄 원칙
  - LSP (The Liskov Substitution Principle) : 리스코프 치환 원칙
  - ISP (The Interface Segregation Principle) : 인터페이스 분리 원칙
  - DIP (The Dependency Inversion Principle) : 의존관계 역전 원칙

-
---
---
