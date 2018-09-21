# SPRING BOOT 정리

## 목차
- SPRING BOOT ?
- IDE 사용시에 세팅 순서 (스프링부트 프로젝트 생성기)
- 스프링부트 프로젝트의 구조
- 의존성 관리 이해
- 의존성 관리 기능을 활용하는 방법
- 자동설정 이해
- 내장 웹 서버 이해

---
### SPRING BOOT 란? (사용 이유)
- 제품 수준의 스프링부트 독립적인 애플리케이션을 만들때, 빠르고 쉽게 만들 수 있다. 모든 스프링 관련 개발을 할 때, 더 폭넓고 더 빠른 서비스를 제공해준다. (컨벤션으로 지정되어있는 설정을 제공해준다. 또한 이 설정들을 개발자가 원하는 방법으로 쉽고 빠르게 변경할 수 있다.)
- xml설정과 코드제너레이션을 하지 않는다.

---
#### IDE 사용시에 세팅 순서 (스프링부트 프로젝트 생성기)
- Create New Project
- Maven / Gradle 선택
- GroupId : 보통 패키지명을 입력
- ArtifactId : 임의의 이름 입력
- location 지정
- 생성
- 우측 하단의 Enable Auto Import 확인 (이것을 OK 해줘야 pom.xml파일 변경시마다 자동으로 임포트)
- parent 지정 : pom.xml에서 <parent\> ... </parent\> 사이에 spring-boot-parent 설정을 추가해준다.
  - 스프링 부트가 제공하는 `의존성 관리` 와 굉장히 밀접한 관계를 가지는 설정이다.
- Spring-boot-starter-web dependency 추가.
- <build\> ... </build\> 사이에 빌드 플러그인 추가. (maven plugin/ gradle plugin)

- Application 생성.
```java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
      SpringApplication.run(Application.class, args);
    }
}
```

- IDE상에서 실행시켜도 되고, terminal에서 실행시킬수도 있다.
  - terminal에서 사용
    - jar 파일로 생성
    > mvn package

    - jar 파일 실행
    > java -jar /directory/artifactName-version-SNAPSHOT.jar

- 여기까지의 과정을 start.spring.io 에서 바로 만들어주는 기능도 있다.

---
#### 스프링부트 프로젝트의 구조
- 딱히 구조랄 것은(스프링부트 프로젝트만의 구조랄 것은) 없다. java 디렉토리 안에 패키지가 들어가고, resource 디렉토리 아래에 참조할 수 있는 파일들(자바 파일들을 제외한 모든 파일들)이 들어간다.

- test 디렉토리 안에는 테스트 코드가 들어간다. 이 역시 /test/java 디렉토리 안에는 자바코드가, /test/resource 디렉토리 안에는 그 테스트 코드들이 참조할 모든 파일들이 들어간다.

- @SpringBootApplication 어노테이션이 붙은 메인 클래스가(메인 어플리케이션 클래스가) 들어갈 곳은 권장하는 곳이 있다. 바로 java 디렉토리 내에 있는 패키지(최상위 패키지) 안에 만드는 것이다. 이유는 이 어노테이션을 붙이는 이유에 있다. 이 어노테이션을 붙인 클래스부터 컴포넌트 스캔을 하겠다는 의미를 가지고 있다.(내부를 들여다보면) 따라서 최상위 패키지에 넣어놓고, 이 패키지 아래에 있는 모든 클래스를 컴포넌트 스캔하겠다는 의미를 가진다고 할 수 있다.

- 그렇다면 컴포넌트스캔을 하면 무엇이 되는가?
  - 컴포넌트 스캔을 하면서 Bean으로 등록할 수 있는 모든 클래스들을 Bean으로 등록하는 과정이다.

---
#### 의존성 관리 이해

- 처음에 등록할 때, spring-boot-starter-web 등을 등록해 주는것 자체가 의존성을 등록하는 과정이다.
- 등록할 때, 별도로 버젼등에 대한 정보를 기입하지 않아도, 스프링부트는 이 의존성을 관리해준다.
- 이 부분을 담당하는 부분을 찾고싶다 ? -> 아까 등록한 parent 부분을 들어가보면, spring-boot-dependency 를 또 parent로 갖는다. 여기에 또 들어가보면, 굉장히 많은 파일들의 버젼이 기록되어있다.
- 인텔리J의 우측 maven project 탭을 보면 자세한 버젼의 내용을 알 수 있다. (gradle일때는 gradle project)
- 이 장점은 무엇인가?
  - 많은 양의 의존성을 관리할 필요 없다. 우리는 web을 등록했을 뿐이고, 나머지 자세한 사항들은 springboot가 잡아주는 것이다.

---
#### 의존성 관리 기능을 활용하는 방법

```
<dependencies>
    <dependency>
        ... <- 이 부분에 의존성 추가하면 된다. (groupId / ArtifactId)
        ...    버젼정보는 상위(parent)에서 지정 안되어 있으면 해준다.
    </dependency>
</dependencies>
```

추가적인 버젼정보나, artifactId등이 궁금할 때, `mvnrepository.com`을 확인해보자.

스프링부트가 자동으로 버젼을 관리해주는 디펜던시가 아니라면, 무조건 버젼정보를 적어줘야 한다. 그렇지 않으면 실제 서버에 띄웠을 때, 어떤 버젼으로 받아올 지, 내 로컬에서 실행할 때, 어떤 버젼으로 받아올 지 정확하지 않다.(실제로 다른 버젼이 들어갈 수 있다.) -> 이는 프로젝트가 제대로 관리되고 있지 않음을 의미한다.

반대로 스프링부트가 관리해주는 버젼이 있지만, 다른버젼을 사용하고 싶을때에도 버젼을 명시해줌으로써 변경이 가능하다.

---
#### 자동설정 이해

- @SpringApplication 어노테이션의 내부를 보면, @EnableAutoConfiguration 어노테이션이 있는것을 볼 수 있다.
- 사실상 @SpringApplication 어노테이션은 3가지로 구성되있다고 볼 수 있다.
  - @SpringBootConfiguration
  - @ComponentScan
  - @EnableAutoConfiguration
- 스프링부트 어플리케이션은 Bean을 두번 등록한다.
  - @ComponentScan 과 @EnableAutoConfiguration 이 바로 이것이다.
- 만약 @SpringBootApplication 어노테이션이 아닌, @Configuration 과 @ComponentScan 만을 이용해서 동작시키려고 한다면, 메인 클래스가 바뀌어야 한다.
```java
@Configuration
@ComponentScan
//@EnableAutoConfiguration
public class Application {
    public static void main(String[] args) {
        SpringApplication application = new SpringApplication(Application.class);
        application.setWebApplicationType(WebApplicationType.NONE);
        application.run(args);
    }
}
```

- 물론 이렇게 등록하면 웹서버로 동작하지는 않는다.
- Bean으로 등록하는 순서는, @Component 어노테이션으로 Bean들을 읽어오고(등록해주고), 추가적으로 @EnableAutoConfiguration 에서 빈으로 등록을 해주는 순서이다.

---
#### Custom 한 AutoConfiguration 만들어보기
- AutoConfigure
- 다른 프로젝트를 만든다.
- 프로젝트 내에서 의존성을 추가해준다.

  ```
  <dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-autoconfigure</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-autoconfigure-processor</artifactId>
        <optional>true</optional>
    </dependency>
  </dependencies>

  <dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-dependencies</artifactId>
            <version>2.0.3.RELEASE</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
  </dependencyManagement>
  ```
- @Configuration 파일 생성
- src/main/resource/META-INF에 spring.factories 파일 만들기
- spring.factories 안에 자동 설정 파일 추가

  ```
  org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
  FQCN,\
  FQCN
  ```
- mvn install
- 덮어쓰기 방지하기
  - @ConditionalOnMissingBean
- 빈 재정의 수고 덜기
  - @ConfigurationProperties(“holoman”)
  - @EnableConfigurationProperties(HolomanProperties)
  - 프로퍼티 키값 자동 완성

    ```
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-configuration-processor</artifactId>
      <optional>true</optional>
    </dependency>
    ```

---
#### 내장 웹 서버 이해
-
